import { OkPacket, RowDataPacket } from 'mysql2';
import { database } from '../database';
import { Country } from '../types/country';
import { User, UserScore } from '../types/user';
import {
    calculateScore,
    comparePasswords,
    fromScoreToLevel,
    getNewCountryToPlay,
    hashPassword
} from '../utils/common';
import * as countryModel from './country.model';
export const create = async (user: User, callback: Function) => {
    const query =
        'INSERT INTO users (name, password, last_activity) VALUES (?, ?, ?)';
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
    database.query(
        query,
        [user.name, user.password, user.last_activity],
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
    const query =
        'INSERT INTO user_scores (user_id, user_name, country_code) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE user_name = ?, country_code = ?, level = -1, succeeded = 0, failed = 0, medium = 0, succeeded_streak = 0, failed_streak = 0, medium_streak = 0';
    database.query(
        query,
        [user_id, user_name, country_code, user_name, country_code],
        (err, result: OkPacket) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        }
    );
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
                        level: row.level,
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

export const findNewCountry = (id: number, callback: Function) => {
    const user_scores = 'SELECT * FROM user_scores WHERE user_id = ?';
    database.query(user_scores, [id], (err, result: RowDataPacket[]) => {
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
                    level: row.level
                };
                user_scores.push(userScore);
            }
            const newCountryCode = getNewCountryToPlay(user_scores);
            countryModel.findByCode(
                newCountryCode,
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
                level: rows[0].level,
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
    callback: Function
) => {
    const query =
        'SELECT * FROM user_scores WHERE user_id = ? and country_code = ?';

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
                    level: rows[0].level
                };
                callback(null, userScore);
            }
        }
    );
};

export const findAllLevels = (id: number, callback: Function) => {
    const query = 'SELECT * FROM user_scores WHERE user_id = ?';

    database.query(query, [id], (err, result: RowDataPacket[]) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            if (rows.length === 0) {
                callback(null, []);
                return;
            }
            let levels: UserScore[] = [];
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
                    level: row.level
                };
                levels.push(userScore);
            }
            levels = levels.sort((a, b) => {
                return b.level - a.level;
            });
            callback(null, levels);
        }
    });
};

export const update = (user: User, userId: number, callback: Function) => {
    const query =
        'UPDATE users SET name = ?, last_activity = ?, language = ?, level = ? WHERE id = ?';

    database.query(
        query,
        [user.name, user.last_activity, user.language, user.level, userId],
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

export const updateLevel = (userId: number, countryCode: string) => {
    const query =
        'UPDATE user_scores SET level = ? WHERE user_id = ? AND country_code = ?';
    findOneScore(userId, countryCode, (err: any, result: UserScore) => {
        if (result) {
            const level = fromScoreToLevel(
                calculateScore(result.succeeded, result.medium, result.failed)
            );
            database.query(query, [level, userId, countryCode]);
        }
    });
};

export const updateGlobalLevel = (userId: number) => {
    const query = 'UPDATE users SET level = ? WHERE id = ?';
    findAllLevels(userId, (err: any, result: number[]) => {
        if (result) {
            let sum = 0;
            let counter = 0;
            for (let level of result) {
                if (level != -1) {
                    sum += level;
                    counter++;
                }
            }
            let avg = sum / counter;
            if (Number.isNaN(avg)) {
                avg = 0;
            }
            database.query(query, [avg, userId]);
        }
    });
};

export const updateSucceededScore = (
    userId: number,
    countryCode: string,
    callback: Function
) => {
    const query =
        'UPDATE user_scores SET succeeded = succeeded + 1, succeeded_streak = succeeded_streak + 1, medium_streak = 0, failed_streak = 0 WHERE user_id = ? AND country_code = ?';
    database.query(query, [userId, countryCode], (err, result: OkPacket) => {
        if (err) {
            callback(err);
        } else {
            updateLevel(userId, countryCode);
            updateGlobalLevel(userId);
            callback(null, result);
        }
    });
};

export const updateMediumScore = (
    userId: number,
    countryCode: string,
    callback: Function
) => {
    const query =
        'UPDATE user_scores SET medium = medium + 1, medium_streak = medium_streak + 1, succeeded_streak = 0, failed_streak = 0 WHERE user_id = ? AND country_code = ?';

    database.query(query, [userId, countryCode], (err, result: OkPacket) => {
        if (err) {
            callback(err);
        } else {
            updateLevel(userId, countryCode);
            updateGlobalLevel(userId);
            callback(null, result);
        }
    });
};

export const updateFailedScore = (
    userId: number,
    countryCode: string,
    callback: Function
) => {
    const query =
        'UPDATE user_scores SET failed = failed + 1, failed_streak = failed_streak + 1, succeeded_streak = 0, medium_streak = 0 WHERE user_id = ? AND country_code = ?';

    database.query(query, [userId, countryCode], (err, result: OkPacket) => {
        if (err) {
            callback(err);
        } else {
            updateLevel(userId, countryCode);
            updateGlobalLevel(userId);
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
