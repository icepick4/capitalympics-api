import express, { Request, Response } from 'express';
import {
    tokenMiddleware,
    userScoreTypeMiddleware,
    userTypeMiddleware
} from '../authMiddlewares';
import * as userModel from '../models/user.model';
import { User, UserScore } from '../types/user';
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
    '/score/:id',
    [userScoreTypeMiddleware, tokenMiddleware],
    async (req: Request, res: Response) => {
        const userScore: UserScore = req.body.userScore;
        userModel.createScore(userScore, (err: Error, userId: number) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ userId: userId });
        });
    }
);

userRouter.post('/connect/', async (req: Request, res: Response) => {
    const name = req.body.name;
    const password = req.body.password;

    userModel.connect(name, password, (err: Error, user: User | null) => {
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
        res.status(200).json({ token });
    });
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
    '/score/:id',
    [userScoreTypeMiddleware, tokenMiddleware],
    async (req: Request, res: Response) => {
        const userScore: UserScore = req.body;

        userModel.updateScore(userScore, (err: Error) => {
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
