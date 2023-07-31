import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken';
import { z } from 'zod';
import { ENV } from '../env';

export const tokenMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const HEADER_NAME = 'authorization';

    const headersSchema = z.object({
        [HEADER_NAME]: z.string().startsWith('Bearer ').nonempty()
    });

    const bodySchema = z.object({
        id: z.number().nonnegative()
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

    const resultBody = bodySchema.safeParse(request.body);

    if (!resultBody.success) {
        return response.status(401).json({
            success: false,
            error: {
                code: 'user_id_missing',
                message: `This route requires a non-empty 'id' body parameter`
            }
        });
    }

    const token = result.data[HEADER_NAME].split(' ')[1];
    const id = resultBody.data.id;

    if (!id) {
        return response.status(401).send({ message: 'User ID missing' });
    }
    if (!token) {
        return response.status(401).send({ message: 'Token missing' });
    }
    try {
        const decoded = verify(token, ENV.JWT_TOKEN);
        if (typeof decoded === 'string' || decoded.id != id) {
            return response.status(403).send({ message: 'Forbidden' });
        }

        next();
    } catch (err) {
        return response.status(401).send({ message: 'Invalid token' });
    }
};

export function AuthMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
) {
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

    const token = result.data[HEADER_NAME].split(' ')[1];

    try {
        const authData = verify(token, ENV.JWT_TOKEN);
        request.app.set('auth', authData);

        return next();
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

export function optionalAuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const HEADER_NAME = 'authorization';
    const headersSchema = z.object({
        [HEADER_NAME]: z.string().startsWith('Bearer ').nonempty()
    });

    const bodySchema = z.object({
        id: z.number().nonnegative()
    });

    const headerResult = headersSchema.safeParse(req.headers);
    const bodyResult = bodySchema.safeParse(req.body);

    if (headerResult.success && !bodyResult.success) {
        return res.status(401).json({
            success: false,
            error: {
                code: 'user_id_missing',
                message: `This route requires a non-empty 'id' body parameter`
            }
        });
    }

    if (
        (!headerResult.success && !bodyResult.success) ||
        (!headerResult.success && bodyResult.success)
    ) {
        req.app.set('auth', null);
        return next();
    }

    if (headerResult.success && bodyResult.success) {
        if (!headerResult.data[HEADER_NAME]) {
            return res.status(401).send({ message: 'Token missing' });
        }
        const token = headerResult.data[HEADER_NAME].split(' ')[1];
        const id = bodyResult.data.id;

        if (!id) {
            return res.status(401).send({ message: 'User ID missing' });
        }
        if (!token) {
            return res.status(401).send({ message: 'Token missing' });
        }
        try {
            const decoded = verify(token, ENV.JWT_TOKEN);
            if (typeof decoded === 'string' || decoded.id != id) {
                return res.status(403).send({ message: 'Forbidden' });
            }

            req.app.set('auth', decoded);

            return next();
        } catch (err) {
            return res.status(401).send({ message: 'Invalid token' });
        }
    }
}

export const CORSMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const allowedOrigins = [
        'https://capitalympics.com',
        'http://localhost:3000'
    ];
    const origin = req.headers.origin!;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
