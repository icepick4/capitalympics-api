import express, { Request, Response } from 'express';
import { OkPacket } from 'mysql2';
import * as countryModel from '../models/country.model';
import * as userModel from '../models/user.model';
import { Country } from '../types/country';
import { User, UserScore } from '../types/user';
import { tokenMiddleware, userTypeMiddleware } from '../utils/authMiddlewares';
import { calculateScore, getCurrentMySQLDate } from '../utils/common';
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

userRouter.get(
    ':id/scores',
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
    '/:id/score',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        userModel.findOne(id, (err: Error, user: User) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ score: user.level });
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

userRouter.get(
    '/:id/country/play',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        userModel.findNewCountry(id, (err: Error, country: Country) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ country: country });
        });
    }
);

userRouter.post(
    '/',
    userTypeMiddleware,
    async (req: Request, res: Response) => {
        const user: User = req.body.user;
        userModel.exists(user.name, (err: Error, exists: boolean) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (exists) {
                return res.status(409).json({ error: 'User already exists' });
            } else {
                userModel.create(user, (err: Error, user: User) => {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }
                    res.status(200).json({ user: user });
                });
            }
        });
    }
);

userRouter.post(
    '/:id/score/:country_code',
    [tokenMiddleware],
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const country_code: string = req.params.country_code;
        //get the user name from the id
        userModel.findOne(id, (err: Error, user: User) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            userModel.createScore(id, user.name, country_code, (err: Error) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).send();
            });
        });
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
                    name: user.name
                },
                process.env.JWT_TOKEN,
                { expiresIn: 60 * 60 * 4 }
            );
            user.password = '';
            res.status(200).json({ token, user });
        }
    );
});

userRouter.post(
    '/connect/:id',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        userModel.updateActivity(id, getCurrentMySQLDate(), (err: Error) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            userModel.findOne(id, (err: Error, user: User) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                const { password: _password, ...userWithoutPassword } = user;
                res.status(200).json({ user: userWithoutPassword });
            });
        });
    }
);

userRouter.post(
    '/init/:id',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        userModel.findOne(id, (err: Error, user: User) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            //init every user_scores for every country to -1
            countryModel.findAll((err: any, countries: Country[]) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                } else {
                    let completed = 0;
                    let hasSentResponse = false;
                    countries.forEach((country) => {
                        userModel.createScore(
                            id,
                            user.name,
                            country.alpha3Code,
                            (err: any) => {
                                if (err && !hasSentResponse) {
                                    hasSentResponse = true;
                                    return res.status(500).json({
                                        error: err.message
                                    });
                                } else {
                                    completed++;
                                    if (
                                        completed === countries.length &&
                                        !hasSentResponse
                                    ) {
                                        user.level = 0;
                                        userModel.update(
                                            user,
                                            id,
                                            (err: any) => {
                                                if (err) {
                                                    return res
                                                        .status(500)
                                                        .json({
                                                            error: err.message
                                                        });
                                                } else {
                                                    hasSentResponse = true;
                                                    return res
                                                        .status(200)
                                                        .send();
                                                }
                                            }
                                        );
                                    }
                                }
                            }
                        );
                    });
                }
            });
        });
    }
);

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
    '/:id/score/:country_code/new_succeeded',
    [tokenMiddleware],
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const country_code: string = req.params.country_code;
        userModel.updateSucceededScore(
            id,
            country_code,
            (err: Error, response: OkPacket) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ affectedRows: response.affectedRows });
            }
        );
    }
);

userRouter.put(
    '/:id/score/:country_code/new_medium',
    [tokenMiddleware],
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const country_code: string = req.params.country_code;
        userModel.updateMediumScore(
            id,
            country_code,
            (err: Error, response: OkPacket) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ affectedRows: response.affectedRows });
            }
        );
    }
);

userRouter.put(
    '/:id/score/:country_code/new_failed',
    [tokenMiddleware],
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const country_code: string = req.params.country_code;
        userModel.updateFailedScore(
            id,
            country_code,
            (err: Error, response: OkPacket) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ affectedRows: response.affectedRows });
            }
        );
    }
);

userRouter.delete(
    '/:id',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        userModel.remove(id, (err: Error, response: OkPacket) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ affectedRows: response.affectedRows });
        });
    }
);

export default userRouter;
