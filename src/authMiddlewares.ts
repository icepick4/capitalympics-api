import { NextFunction, Request, Response } from 'express';
import { User } from './types/user';

export const apiKeyMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
        return res.status(401).send('API key is missing');
    } else if (apiKey !== process.env.API_KEY) {
        return res.status(403).send('Invalid API key');
    }
    next();
};

export const userTypeMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user: User = req.body;
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
