import express, { Request, Response } from 'express';
import { DateTime } from 'luxon';
import { OkPacket } from 'mysql2';
import { ENV } from '../env';
import * as countryModel from '../models/country.model';
import * as userModel from '../models/user.model';
import { Country } from '../types/country';
import { User, UserScore } from '../types/user';
import { tokenMiddleware, userTypeMiddleware } from '../utils/authMiddlewares';
import { Lang } from '../utils/common';

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
    '/:id/:learning_type/scores',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const learning_type: string = req.params.learning_type;
        let max: number;
        if (req.query.max) {
            max = parseInt(req.query.max as string);
        }
        let sort: string;
        if (req.query.sort) {
            sort = req.query.sort as string;
        } else {
            sort = 'DESC';
        }
        userModel.findAllLevels(
            id,
            sort,
            learning_type,
            (err: Error, scores: Array<UserScore>) => {
                max = max ? max : scores.length;
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ scores: scores.slice(0, max) });
            }
        );
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
            res.status(200).json({
                flag_score: user.flag_level,
                capital_score: user.capital_level
            });
        });
    }
);

userRouter.get(
    '/:id/country/play/:learning_type',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const learning_type: string = req.params.learning_type;
        let lang: Lang = 'en';
        if (req.query.lang) {
            lang = req.query.lang as Lang;
        }
        let region: string = 'World';
        if (req.query.region) {
            region = req.query.region as string;
        }
        userModel.findNewCountry(
            id,
            learning_type,
            lang,
            region,
            (err: Error, country: Country) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ country: country });
            }
        );
    }
);

userRouter.post(
    '/',
    userTypeMiddleware,
    async (req: Request, res: Response) => {
        const user: User = req.body.user;
        userModel.exists(user.name, null, (err: Error, exists: boolean) => {
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
                    created_at: user.created_at
                },
                ENV.JWT_TOKEN,
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
        const now = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');

        userModel.updateActivity(id, now, (err: Error) => {
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
            countryModel.findAll('en', (err: any, countries: Country[]) => {
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
                                        user.flag_level = 0;
                                        user.capital_level = 0;
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
        const user: User = req.body.user;
        const userId: number = parseInt(req.params.id);
        user.last_activity = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');

        userModel.exists(user.name, user.id, (err: Error, exists: boolean) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (exists) {
                return res.status(409).json({ error: 'User already exists' });
            } else {
                userModel.update(user, userId, (err: Error) => {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }
                    res.status(200).send();
                });
            }
        });
    }
);

userRouter.put(
    '/:id/:country_code/:learning_type/score/:score',
    [tokenMiddleware],
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const country_code: string = req.params.country_code;
        const learning_type: string = req.params.learning_type;
        const score: string = req.params.score;
        userModel.updateSucceededScore(
            id,
            country_code,
            learning_type,
            score,
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
