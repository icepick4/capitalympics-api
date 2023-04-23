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
    const hashedPassword = await hashPassword(user.name, user.password);
    user.password = hashedPassword;
    database.query(
        query,
        [user.name, user.password, user.last_activity],
        (err, result: OkPacket) => {
            if (err) {
                callback(err);
            } else {
                const id = result.insertId;
                let callbackCalled = false;

                //init every user_scores for every country to -1
                countryModel.findAll((err: any, countries: Country[]) => {
                    if (err) {
                        if (!callbackCalled) {
                            callback(err);
                            callbackCalled = true;
                        }
                    } else {
                        let completed = 0;
                        countries.forEach((country) => {
                            createScore(
                                id,
                                user.name,
                                country.alpha3Code,
                                (err: any) => {
                                    if (err) {
                                        if (!callbackCalled) {
                                            callback(err);
                                            callbackCalled = true;
                                        }
                                    } else {
                                        completed++;
                                        if (
                                            completed === countries.length &&
                                            !callbackCalled
                                        ) {
                                            callback(null);
                                            callbackCalled = true;
                                        }
                                    }
                                }
                            );
                        });
                    }
                });
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
        'INSERT INTO user_scores (user_id, user_name, country_code) VALUES (?, ?, ?)';
    database.query(
        query,
        [user_id, user_name, country_code],
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
                if (await comparePasswords(name, password, row.password)) {
                    updateActivity(row.id, last_activity, (err: any) => {
                        if (err) {
                            return callback(err);
                        }
                    });
                    const user: User = {
                        id: row.id,
                        name: row.name,
                        password: row.password,
                        level: row.level,
                        last_activity: last_activity,
                        created_at: row.created_at
                    };
                    return callback(null, user);
                }
            }
            callback(null, null);
        }
    });
};

export const exists = (name: string, callback: Function) => {
    const query = 'SELECT * FROM users WHERE name = ?';
    database.query(query, [name], (err, result) => {
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
                password: rows[0].password,
                level: rows[0].level,
                last_activity: rows[0].last_activity,
                created_at: rows[0].created_at
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
    const query = 'SELECT level FROM user_scores WHERE user_id = ?';

    database.query(query, [id], (err, result: RowDataPacket[]) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            if (rows.length === 0) {
                callback(null, 0);
                return;
            }
            let levels: number[] = [];
            for (let row of rows) {
                levels.push(row.level);
            }
            callback(null, levels);
        }
    });
};

export const update = (user: User, userId: number, callback: Function) => {
    const query =
        'UPDATE users SET name = ?, password = ?, level = ?, last_activity = ? WHERE id = ?';

    database.query(
        query,
        [user.name, user.password, user.level, user.last_activity, userId],
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
