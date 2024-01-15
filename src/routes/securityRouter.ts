import express, { Request, Response } from 'express';
import {
    JsonWebTokenError,
    JwtPayload,
    TokenExpiredError,
    sign,
    verify
} from 'jsonwebtoken';
import { DateTime } from 'luxon';
import { omit, pick } from 'radash';
import { z } from 'zod';
import { ENV } from '../env';
import prisma from '../prisma';
import { AuthMiddleware } from '../utils/authMiddlewares';
import { DefaultLang, Languages, comparePasswords } from '../utils/common';

const securityRouter = express.Router();

securityRouter.post('/login', async (req: Request, res: Response) => {
    const requestSchema = z.object({
        name: z.string(),
        password: z.string()
    });

    const result = requestSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(406).json({ error: result.error });
    }

    const { name, password } = result.data;

    const user = await prisma.user.findUnique({
        where: {
            name
        }
    });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (await comparePasswords(password, user.password)) {
        const payload = pick(user, ['id', 'created_at']);
        const token = sign(payload, ENV.JWT_TOKEN, { expiresIn: '2h' });

        return res.status(200).json({ success: true, data: { token } });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

securityRouter.post(
    '/refresh-token',
    async (request: Request, response: Response) => {
        const HEADER_NAME = 'authorization';
        const headersSchema = z.object({
            [HEADER_NAME]: z.string().startsWith('Bearer ').nonempty()
        });
        const result = headersSchema.safeParse(request.headers);
        if (!result.success) {
            return response.status(401).json({
                success: false,
                error: {
                    code: 'access_token_missing',
                    message: `This route requires a non-empty '${HEADER_NAME}' header`
                }
            });
        }

        const tokenFromHeader = result.data[HEADER_NAME].split(' ')[1];

        try {
            const payload = verify(
                tokenFromHeader,
                ENV.JWT_TOKEN
            ) as JwtPayload;
            delete payload.iat;
            delete payload.exp;
            delete payload.nbf;
            delete payload.jti;

            const token = sign(payload, ENV.JWT_TOKEN, { expiresIn: '2h' });
            request.app.set('auth', payload);

            return response
                .status(200)
                .json({ success: true, data: { token } });
        } catch (err) {
            const error = err as JsonWebTokenError | TokenExpiredError;
            const code =
                error.name === 'TokenExpiredError'
                    ? 'access_token_expired'
                    : 'invalid_token';
            const message = 'This route requires a valid access token';

            return response
                .status(401)
                .json({ success: false, error: { code, message } });
        }
    }
);

securityRouter.get(
    '/me',
    AuthMiddleware,
    async (request: Request, response: Response) => {
        const authData: { id: number; createdAt: string } =
            request.app.get('auth');

        const user = await prisma.user.findUnique({
            where: {
                id: authData.id
            }
        });

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        return response
            .status(200)
            .json({ success: true, data: omit(user, ['password']) });
    }
);

securityRouter.delete(
    '/me',
    AuthMiddleware,
    async (request: Request, response: Response) => {
        const authData: { id: number; createdAt: string } =
            request.app.get('auth');

        await prisma.user.delete({
            where: {
                id: authData.id
            }
        });

        await prisma.questionResult.deleteMany({
            where: {
                user_id: authData.id
            }
        });

        return response.status(200).json({ success: true });
    }
);

securityRouter.patch(
    '/me',
    AuthMiddleware,
    async (req: Request, res: Response) => {
        const bodySchema = z.object({
            name: z.string().min(3).max(20),
            language: z.enum(Languages).default(DefaultLang)
        });

        const result = bodySchema.safeParse(req.body);
        if (!result.success) {
            return res
                .status(406)
                .send({ success: false, error: result.error });
        }

        const existingUser = await prisma.user.findFirst({
            where: {
                name: result.data.name,
                id: {
                    not: req.app.get('auth').id
                }
            }
        });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                error: 'User already exists'
            });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: req.app.get('auth').id
            },
            data: {
                name: result.data.name,
                updated_at: DateTime.now().toISO(),
                language: result.data.language
            }
        });

        return res.status(200).json({
            success: true,
            user: omit(updatedUser, ['password'])
        });
    }
);

securityRouter.get('/ip', async (req: Request, res: Response) => {
    type IpAPI = {
        country: string;
        regionName: string;
        lat: number;
        lon: number;
    };

    const ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'];

    if (ip === undefined) {
        return res.status(406).json({
            success: false
        });
    }
    try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await (response.json() as Promise<IpAPI>);
        const result: IpAPI & { success: boolean } = {
            success: true,
            lon: data.lon,
            lat: data.lat,
            country: data.country,
            regionName: data.regionName
        };
        return res.status(200).json(result);
    } catch {
        return res.status(406).json({
            success: false
        });
    }
});

export default securityRouter;
