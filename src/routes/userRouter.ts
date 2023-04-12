import express, { Request, Response } from 'express';
import * as userModel from '../models/user.model';
import { User, UserScore } from '../types/user';
import {
    tokenMiddleware,
    userScoreTypeMiddleware,
    userTypeMiddleware
} from '../utils/authMiddlewares';
import { calculateScore } from '../utils/common';
const jwt = require('jsonwebtoken');
const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
    userModel.count((err: Error, count: number) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ count: count });
    });
});

userRouter.get('/:id', tokenMiddleware, async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    userModel.findOne(id, (err: Error, user: User) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const { id: _id, password: _password, ...userWithoutPassword } = user;
        res.status(200).json({ user: userWithoutPassword });
    });
});

userRouter.get(
    ':id/score',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        userModel.findAllLevels(id, (err: Error, userScore: UserScore) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ userScore: userScore });
        });
    }
);

userRouter.get(
    '/:id/score/:country_code',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const country_code: string = req.params.country_code;
        userModel.findOneScore(
            id,
            country_code,
            (err: Error, userScore: UserScore) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({
                    userScore: userScore,
                    score: calculateScore(
                        userScore.succeeded,
                        userScore.medium,
                        userScore.failed
                    )
                });
            }
        );
    }
);

userRouter.post(
    '/',
    userTypeMiddleware,
    async (req: Request, res: Response) => {
        const user: User = req.body.user;
        userModel.create(user, (err: Error, userId: number) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ userId: userId });
        });
    }
);

userRouter.post(
    '/:id/score/:country_code',
    [userScoreTypeMiddleware, tokenMiddleware],
    async (req: Request, res: Response) => {
        const userScore: UserScore = req.body;
        const id: number = parseInt(req.params.id);
        const country_code: string = req.params.country_code;
        userModel.createScore(
            userScore,
            id,
            country_code,
            (err: Error, userScoreId: number) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ userScoreId: userScoreId });
            }
        );
    }
);

userRouter.post('/connect/', async (req: Request, res: Response) => {
    const user: User = req.body.user;
    userModel.connect(
        user.name,
        user.password,
        user.last_activity,
        (err: Error, user: User | null) => {
            if (err || !user) {
                return res
                    .status(500)
                    .json({ message: 'User not found', error: err });
            }
            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    level: user.level,
                    date: new Date()
                },
                process.env.JWT_TOKEN
            );
            user.password = '';
            res.status(200).json({ token, user });
        }
    );
});

userRouter.put(
    '/:id',
    [userTypeMiddleware, tokenMiddleware],
    async (req: Request, res: Response) => {
        const user: User = req.body;
        const userId: number = parseInt(req.body.id);
        userModel.update(user, userId, (err: Error) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).send();
        });
    }
);

userRouter.put(
    '/:id/score/:country_code',
    [userScoreTypeMiddleware, tokenMiddleware],
    async (req: Request, res: Response) => {
        const userScore: UserScore = req.body.userScore;
        const userId: number = parseInt(req.body.id);
        const countryCode: string = req.body.countryCode;
        userModel.updateScore(userScore, userId, countryCode, (err: Error) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).send();
        });
    }
);

userRouter.delete(
    '/:id',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        userModel.remove(id, (err: Error) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).send();
        });
    }
);

export default userRouter;
