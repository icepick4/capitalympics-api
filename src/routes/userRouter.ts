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

userRouter.get('/', tokenMiddleware, async (req: Request, res: Response) => {
    userModel.findAll((err: Error, users: User[]) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ users: users });
    });
});

userRouter.post(
    '/',
    userTypeMiddleware,
    async (req: Request, res: Response) => {
        const user: User = req.body;
        userModel.create(user, (err: Error, userId: number) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ userId: userId });
        });
    }
);

userRouter.post(
    '/score',
    [userScoreTypeMiddleware, tokenMiddleware],
    async (req: Request, res: Response) => {
        const userScore: UserScore = req.body;
        userModel.createScore(userScore, (err: Error, userId: number) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ userId: userId });
        });
    }
);

userRouter.post(
    '/connect/',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const name = req.body.name;
        const password = req.body.password;
        const device = req.body.device;
        const screenSize = req.body.screenSize;
        userModel.connect(name, password, (err: Error, users: User[]) => {
            if (err || users.length === 0 || users.length > 1) {
                return res
                    .status(500)
                    .json({ message: 'User not found', err: err.message });
            }
            const token = jwt.sign(
                {
                    user: users[0].id,
                    device: device,
                    screenSize: screenSize
                },
                process.env.JWT_SECRET
            );
            res.status(200).json({ token, user: users[0] });
        });
    }
);

userRouter.put(
    '/',
    [userTypeMiddleware, tokenMiddleware],
    async (req: Request, res: Response) => {
        const user: User = req.body;
        userModel.update(user, (err: Error) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).send();
        });
    }
);

userRouter.put(
    '/score',
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
