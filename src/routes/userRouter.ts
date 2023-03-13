import express, { Request, Response } from 'express';
import * as userModel from '../models/user.model';
import { User, UserScore } from '../types/user';

const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
    userModel.findAll((err: Error, users: User[]) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ users: users });
    });
});

userRouter.post('/', async (req: Request, res: Response) => {
    const user: User = req.body;
    userModel.create(user, (err: Error, userId: number) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ userId: userId });
    });
});

userRouter.post('/score/', async (req: Request, res: Response) => {
    const userScore: UserScore = req.body;
    userModel.createScore(userScore, (err: Error, userId: number) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ userId: userId });
    });
});

userRouter.put('/', async (req: Request, res: Response) => {
    const user: User = req.body;
    userModel.update(user, (err: Error) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).send();
    });
});

userRouter.put('/score/', async (req: Request, res: Response) => {
    const userScore: UserScore = req.body;

    userModel.updateScore(userScore, (err: Error) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).send();
    });
});

userRouter.delete('/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    userModel.remove(id, (err: Error) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).send();
    });
});

export default userRouter;
