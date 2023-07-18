import express, { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { DateTime } from 'luxon';
import { omit, pick } from 'radash';
import { z } from 'zod';
import { ENV } from '../env';
import * as userModel from '../models/user.model';
import { User } from '../types/user';
import { AuthMiddleware } from '../utils/authMiddlewares';

const securityRouter = express.Router();

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

    userModel.connect(
        name,
        password,
        DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss'),
        (err: Error | null, user: User | null) => {
            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'User not found', error: err });
            }

            if (err) {
                return res
                    .status(500)
                    .json({ message: 'An error occured', error: err });
            }

            const payload = pick(user, ['id', 'created_at']);
            const token = sign(payload, ENV.JWT_TOKEN, { expiresIn: '2h' });

            res.status(200).json({ success: true, data: { token } });
        }
    );
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

        userModel.findOne(authData.id, (error: null, user: User) => {
            response
                .status(200)
                .json({ success: true, data: omit(user, ['password']) });
        });
    }
);

export default securityRouter;
