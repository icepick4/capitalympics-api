import { NextFunction, Request, Response } from 'express';
import { User } from './types/user';
const jwt = require('jsonwebtoken');
export const tokenMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({ message: 'Token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send({ message: 'Invalid token' });
    }
};

export const userTypeMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user: User = req.body;
    if (req.method === 'POST' && req.url === '/') {
        if (
            !user ||
            typeof user !== 'object' ||
            !('name' in user) ||
            !('password' in user)
        ) {
            return res.status(400).send('Invalid user object for POST /users');
        }
    }
    if (
        !user ||
        typeof user !== 'object' ||
        !('id' in user) ||
        !('name' in user) ||
        !('password' in user) ||
        !('image' in user) ||
        !('level' in user) ||
        !('last_activity' in user) ||
        !('created_at' in user)
    ) {
        return res.status(400).send('Invalid user object');
    }
    next();
};

export const userScoreTypeMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userScore = req.body;
    if (req.method === 'POST' && req.url === '/scores') {
        if (
            !userScore ||
            typeof userScore !== 'object' ||
            !('user_id' in userScore) ||
            !('country_code' in userScore)
        ) {
            return res
                .status(400)
                .send('Invalid user object for POST /users/scores');
        }
    }
    if (
        !userScore ||
        typeof userScore !== 'object' ||
        !('user_id' in userScore) ||
        !('country_id' in userScore) ||
        !('succeeded_streak' in userScore) ||
        !('failed_streak' in userScore) ||
        !('succeeded' in userScore) ||
        !('failed' in userScore) ||
        !('level' in userScore)
    ) {
        return res.status(400).send('Invalid userScore object');
    }
    next();
};
