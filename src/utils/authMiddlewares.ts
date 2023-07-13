import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken';
import { z } from 'zod';
import { ENV } from '../env';
import { User } from '../types/user';

export const tokenMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const auth = req.headers.authorization;
    const token = auth && auth.split(' ')[1];
    const id = req.params.id;

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

        next();
    } catch (err) {
        return res.status(401).send({ message: 'Invalid token' });
    }
};

export function AuthMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const HEADER_NAME = 'authorization';
    const headersSchema = z.object({ [HEADER_NAME]: z.string().startsWith('Bearer ').nonempty() });

    const result = headersSchema.safeParse(request.headers);
    if (!result.success) {
        return response.status(401).json({
            success: false,
            error: {
                code: 'access_token_missing',
                message: `This route requires a non-empty '${HEADER_NAME}' header`,
            },
        });
    }

    const token = result.data[HEADER_NAME].split(' ')[1];

    try {
        const authData = verify(token, ENV.JWT_TOKEN);
        request.app.set('auth', authData);

        return next();
    } catch (err) {
        const error = err as JsonWebTokenError|TokenExpiredError;
        const code = error.name === 'TokenExpiredError' ? 'access_token_expired' : 'invalid_token';
        const message = 'This route requires a valid access token';

        return response.status(401).json({ success: false, error: { code, message } });
    }
}

export const userTypeMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user: User = req.body.user;
    if (req.method === 'POST' && req.url === '/') {
        if (
            !user ||
            typeof user !== 'object' ||
            !('name' in user) ||
            !('password' in user) ||
            !('created_at' in user)
        ) {
            return res.status(400).send('Invalid user object for POST /users');
        } else {
            return next();
        }
    }
    if (
        !user ||
        typeof user !== 'object' ||
        !('id' in user) ||
        !('name' in user) ||
        !('flag_score' in user) ||
        !('capital_score' in user) ||
        !('last_activity' in user) ||
        !('created_at' in user)
    ) {
        return res.status(400).send('Invalid user object');
    }
    next();
};

export const corsMiddleware = (
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
