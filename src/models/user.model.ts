import { DateTime } from 'luxon';
import { OkPacket, RowDataPacket } from 'mysql2';
import { database } from '../database';
import { Country } from '../types/country';
import { User, UserScore } from '../types/user';
import {
    Lang,
    calculateScore,
    comparePasswords,
    getNewCountryToPlay,
    hashPassword
} from '../utils/common';
import * as countryModel from './country.model';
export const create = async (user: User, callback: Function) => {
    const query = 'INSERT INTO users (name, password, language, last_activity) VALUES (?, ?, ?, ?)';
    user.password = await hashPassword(user.password);

    database.query(
        query,
        [user.name, user.password, user.language, DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss')],
        (err, result: OkPacket) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        }
    );
};

export const createScore = (
    user_id: number,
    user_name: string,
    country_code: string,
    callback: Function
) => {
    const queryCapitals =
        'INSERT INTO capital_scores (user_id, user_name, country_code) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE user_name = ?, country_code = ?, score = -1, succeeded = 0, failed = 0, medium = 0, succeeded_streak = 0, failed_streak = 0, medium_streak = 0';
    const queryFlags = queryCapitals.replace('capital', 'flag');
    database.query(
        queryCapitals,
        [user_id, user_name, country_code, user_name, country_code],
        (err, result: OkPacket) => {
            if (err) {
                callback(err);
            }
        }
    );
    database.query(
        queryFlags,
        [user_id, user_name, country_code, user_name, country_code],
        (err, result: OkPacket) => {
            if (err) {
                callback(err);
            }
        }
    );
    callback(null);
};

export const connect = async (
    name: string,
    password: string,
    last_activity: string,
    callback: Function
) => {
    const query = 'SELECT * FROM users WHERE name = ?';
    database.query(query, [name], async (err, result) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            for (let row of rows) {
                if (await comparePasswords(password, row.password)) {
                    updateActivity(row.id, last_activity, (err: any) => {
                        if (err) {
                            return callback(err);
                        }
                    });
                    const user: User = {
                        id: row.id,
                        name: row.name,
                        image: row.image,
                        password: row.password,
                        flag_score: row.flag_score,
                        capital_score: row.capital_score,
                        last_activity: last_activity,
                        created_at: row.created_at,
                        language: row.language
                    };
                    return callback(null, user);
                }
            }
            callback(null, null);
        }
    });
};

export const exists = (name: string, id: number | null, callback: Function) => {
    const query =
        id == null
            ? 'SELECT * FROM users WHERE name = ?'
            : 'SELECT * FROM users WHERE name = ? AND id != ?';
    database.query(query, [name, id], (err, result) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            if (rows.length > 0) {
                callback(null, true);
            } else {
                callback(null, false);
            }
        }
    });
};

export const findNewCountry = (
    id: number,
    learning_type: string,
    lang: Lang,
    region: string,
    callback: Function
) => {
    const defaultQuery = `SELECT * FROM ${learning_type}_scores WHERE user_id = ?`;

    let query = region === 'World' ? defaultQuery : `
        SELECT *
        FROM ${learning_type}_scores AS s
        JOIN countries AS c ON s.country_code = c.alpha3Code
        WHERE scores.user_id = ? AND countries.region = ?
    `;

    query += ' ORDER BY score ASC';

    database.query(query, [id, region], (err, result: RowDataPacket[]) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            const user_scores: UserScore[] = [];
            for (let row of rows) {
                const userScore: UserScore = {
                    user_id: row.user_id,
                    user_name: row.user_name,
                    country_code: row.country_code,
                    succeeded: row.succeeded,
                    medium: row.medium,
                    failed: row.failed,
                    succeeded_streak: row.succeeded_streak,
                    medium_streak: row.medium_streak,
                    failed_streak: row.failed_streak,
                    score: row.score
                };
                user_scores.push(userScore);
            }
            const newCountryCode = getNewCountryToPlay(user_scores);
            countryModel.findByCode(
                newCountryCode,
                lang,
                (err: any, result: Country) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, result);
                    }
                }
            );
        }
    });
};

export const findOne = (id: number, callback: Function) => {
    const query = 'SELECT * FROM users WHERE id = ?';

    database.query(query, [id], (err, result: RowDataPacket[]) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            if (rows.length !== 1) {
                callback(null, null);
                return;
            }
            const user: User = {
                id: rows[0].id,
                name: rows[0].name,
                image: rows[0].image,
                password: rows[0].password,
                flag_score: rows[0].flag_score ?? 0,
                capital_score: rows[0].capital_score ?? 0,
                last_activity: rows[0].last_activity,
                created_at: rows[0].created_at,
                language: rows[0].language
            };

            callback(null, user);
        }
    });
};

export const findOneScore = (
    id: number,
    country_code: string,
    learning_type: string,
    callback: Function
) => {
    const query = `SELECT * FROM ${learning_type}_scores WHERE user_id = ? and country_code = ?`;

    database.query(
        query,
        [id, country_code],
        (err, result: RowDataPacket[]) => {
            if (err) {
                callback(err);
            } else {
                const rows = <RowDataPacket[]>result;
                if (rows.length !== 1) {
                    callback(null, null);
                    return;
                }
                const userScore: UserScore = {
                    user_id: rows[0].user_id,
                    user_name: rows[0].user_name,
                    country_code: rows[0].country_code,
                    succeeded: rows[0].succeeded,
                    succeeded_streak: rows[0].succeeded_streak,
                    medium: rows[0].medium,
                    medium_streak: rows[0].medium_streak,
                    failed: rows[0].failed,
                    failed_streak: rows[0].failed_streak,
                    score: rows[0].score
                };
                callback(null, userScore);
            }
        }
    );
};

export const findAllScores = (
    id: number,
    sort: string,
    learning_type: string,
    region: string,
    callback: Function
) => {
    const query =
        region == 'World'
            ? `SELECT * FROM ${learning_type}_scores WHERE user_id = ? AND score > -1 ORDER BY score ${sort}`
            : `SELECT * FROM ${learning_type}_scores JOIN countries ON countries.alpha3Code COLLATE utf8mb4_unicode_ci = ${learning_type}_scores.country_code COLLATE utf8mb4_unicode_ci WHERE user_id = ? AND score > -1 AND region = ? ORDER BY score ${sort}`;
    database.query(query, [id, region], (err, result: RowDataPacket[]) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            if (rows.length === 0) {
                callback(null, []);
                return;
            }
            let scores: UserScore[] = [];
            for (let row of rows) {
                let userScore: UserScore = {
                    user_id: row.user_id,
                    user_name: row.user_name,
                    country_code: row.country_code,
                    succeeded: row.succeeded,
                    succeeded_streak: row.succeeded_streak,
                    medium: row.medium,
                    medium_streak: row.medium_streak,
                    failed: row.failed,
                    failed_streak: row.failed_streak,
                    score: row.score
                };
                scores.push(userScore);
            }
            callback(null, scores);
        }
    });
};

export const findSingleScore = (
    id: number,
    learning_type: string,
    country_code: string,
    callback: Function
) => {
    const query = `SELECT * FROM ${learning_type}_scores WHERE user_id = ? AND score > -1 AND country_code = ?`;
    database.query(
        query,
        [id, country_code],
        (err, result: RowDataPacket[]) => {
            if (err) {
                callback(err);
            } else {
                const rows = <RowDataPacket[]>result;
                if (rows.length === 0) {
                    callback(null, []);
                    return;
                }
                callback(null, rows[0].score);
            }
        }
    );
};

export const update = (user: User, userId: number, callback: Function) => {
    const query =
        'UPDATE users SET name = ?, last_activity = ?, language = ?, flag_score = ?, capital_score = ? WHERE id = ?';

    database.query(
        query,
        [
            user.name,
            user.last_activity,
            user.language,
            user.flag_score,
            user.capital_score,
            userId
        ],
        (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        }
    );
};

export const updateActivity = (
    userId: number,
    activity: string,
    callback: Function
) => {
    const query = 'UPDATE users SET last_activity = ? WHERE id = ?';
    database.query(query, [activity, userId], (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
};

export const updateScore = (
    userId: number,
    countryCode: string,
    learning_type: string
) => {
    const query = `UPDATE ${learning_type}_scores SET score = ? WHERE user_id = ? AND country_code = ?`;
    findOneScore(
        userId,
        countryCode,
        learning_type,
        (err: any, result: UserScore) => {
            if (result) {
                const score = calculateScore(
                    result.succeeded,
                    result.medium,
                    result.failed
                );
                database.query(query, [score, userId, countryCode]);
            }
        }
    );
};

export const updateGlobalScore = (userId: number, learning_type: string) => {
    const query = `UPDATE users SET ${learning_type}_score = ? WHERE id = ?`;
    findAllScores(
        userId,
        'ASC',
        learning_type,
        'World',
        (err: any, result: UserScore[]) => {
            if (result) {
                let sum = 0;
                let counter = 0;
                for (let user_score of result) {
                    if (user_score.score != -1) {
                        sum += user_score.score;
                        counter++;
                    }
                }
                let avg = sum / counter;
                if (Number.isNaN(avg)) {
                    avg = 0;
                }
                database.query(query, [avg, userId]);
            }
        }
    );
};

export const updateSucceededScore = (
    userId: number,
    countryCode: string,
    learning_type: string,
    score: string,
    callback: Function
) => {
    let reset_score1: string;
    let reset_score2: string;

    switch (score) {
        case 'succeeded':
            reset_score1 = 'medium';
            reset_score2 = 'failed';
            break;
        case 'medium':
            reset_score1 = 'succeeded';
            reset_score2 = 'failed';
            break;
        default:
            reset_score1 = 'succeeded';
            reset_score2 = 'medium';
    }

    const query = `UPDATE ${learning_type}_scores
                   SET ${score} = ${score} + 1,
                       ${score}_streak = ${score}_streak + 1,
                       ${reset_score1}_streak = 0,
                       ${reset_score2}_streak = 0
                   WHERE user_id = ? AND country_code = ?`;

    database.query(query, [userId, countryCode], (err, result: OkPacket) => {
        if (err) {
            callback(err);
        } else {
            updateScore(userId, countryCode, learning_type);
            updateGlobalScore(userId, learning_type);
            callback(null, result);
        }
    });
};

export const remove = (id: number, callback: Function) => {
    const query = 'DELETE FROM users WHERE id = ?';
    database.query(query, [id], (err, result: OkPacket) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    });
};

export const count = (callback: Function) => {
    const query = 'SELECT COUNT(*) AS count FROM users';
    database.query(query, (err, result: RowDataPacket[]) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            const count = rows[0].count;
            callback(null, count);
        }
    });
};
