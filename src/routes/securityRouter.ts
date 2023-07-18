import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { omit, pick } from 'radash';
import { z } from 'zod';
import { ENV } from '../env';
import { AuthMiddleware } from '../utils/authMiddlewares';
import { comparePasswords } from '../utils/common';

const securityRouter = express.Router();
const prisma = new PrismaClient();

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
    AuthMiddleware,
    async (req: Request, res: Response) => {
        const payload: { id: number; createdAt: string } = req.app.get('auth');
        const token = sign(payload, ENV.JWT_TOKEN, { expiresIn: '2h' });

        res.status(200).json({ success: true, data: { token } });
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

export default securityRouter;
