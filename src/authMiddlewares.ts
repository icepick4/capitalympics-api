import { NextFunction, Request, Response } from 'express';
import { User } from './types/user';
const jwt = require('jsonwebtoken');
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
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if (decoded.id != id) {
            return res.status(403).send({ message: 'Forbidden' });
        }
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
        } else {
            return next();
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
        } else {
            return next();
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

export const corsMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.url.startsWith('/users')) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
};