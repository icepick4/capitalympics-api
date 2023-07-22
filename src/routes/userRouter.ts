import express, { Request, Response } from 'express';
import { DateTime } from 'luxon';
import { OkPacket } from 'mysql2';
import { pick } from 'radash';
import * as countryModel from '../models/country.model';
import * as userModel from '../models/user.model';
import { Country, Region } from '../types/country';
import { User, UserScore } from '../types/user';
import {
    AuthMiddleware,
    tokenMiddleware,
    userTypeMiddleware
} from '../utils/authMiddlewares';
import { Lang, LearningType, Maybe } from '../utils/common';

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
        const learning_type: LearningType =
            req.params.learning_type === 'flag' ? 'flag' : 'capital';
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
        let region: Region;
        if (req.query.region) {
            region = req.query.region as Region;
        } else {
            region = 'World';
        }
        let lang: Lang;
        if (req.query.lang) {
            lang = req.query.lang as Lang;
        } else {
            lang = 'en';
        }
        userModel.findAllScores(
            id,
            sort,
            learning_type,
            region,
            lang,
            (err: Error, scores: Array<UserScore>) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(200).json({ scores: scores });
            }
        );
    }
);

userRouter.get(
    '/:id/:country_code/:learning_type/score',
    tokenMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const country_code = req.params.country_code;
        const learning_type: LearningType =
            req.params.learning_type === 'flag' ? 'flag' : 'capital';

        userModel.findSingleScore(
            id,
            learning_type,
            country_code,
            (err: Error | null, score: UserScore) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                res.status(200).json({ score });
            }
        );
    }
);

userRouter.get(
    '/:id/score',
    AuthMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        userModel.findOne(id, (err: Error, user: User) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(200).json(pick(user, ['flag_score', 'capital_score']));
        });
    }
);

userRouter.get(
    '/:id/country/play/:learning_type',
    AuthMiddleware,
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const learning_type: LearningType =
            req.params.learning_type === 'flag' ? 'flag' : 'capital';

        const lang: Lang = (req.query.lang as Maybe<Lang>) || 'en';
        const region: string = (req.query.region as Maybe<string>) || 'World';

        userModel.findNewCountry(
            id,
            learning_type,
            lang,
            region,
            (err: Error, country: Country) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                res.status(200).json({ country });
            }
        );
    }
);

userRouter.post(
    '/',
    userTypeMiddleware,
    async (req: Request, res: Response) => {
        const user: User = req.body.user;

        userModel.exists(
            user.name,
            null,
            (err: Error | null, exists: boolean) => {
                if (err) {
                    return res.status(500).json({ success: false, error: err.message });
                }

                if (exists) {
                    return res
                        .status(409)
                        .json({ error: 'User already exists' });
                } else {
                    userModel.create(user, (err: Error, user: User) => {
                        if (err) {
                            return res.status(500).json({ success: false, error: err.message });
                        }

                        res.status(200).json({ success: true, user });
                    });
                }
            }
        );
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
                                        user.flag_score = 0;
                                        user.capital_score = 0;
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
                return res.status(500).json({ success: false, error: err.message });
            }
            if (exists) {
                return res.status(409).json({ success: false, error: 'User already exists' });
            } else {
                userModel.update(user, userId, (err: Error) => {
                    if (err) {
                        return res.status(500).json({ success: false, error: err.message });
                    }
                    res.status(200).send({ success: true });
                });
            }
        });
    }
);

userRouter.put(
    '/:id/:country_code/:learning_type/score/:score',
    AuthMiddleware,
    async (req: Request, res: Response) => {
        const authData: { id: number; createdAt: string } = req.app.get('auth');

        const country_code: string = req.params.country_code;
        const learning_type: LearningType =
            req.params.learning_type === 'flag' ? 'flag' : 'capital';
        const score: string = req.params.score;

        userModel.updateSucceededScore(
            authData.id,
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
