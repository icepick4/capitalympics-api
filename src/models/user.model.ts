import { OkPacket, RowDataPacket } from 'mysql2';
import { hashPassword } from '../common';
import { database } from '../database';
import { User, UserScore } from '../types/user';

export const create = async (user: User, callback: Function) => {
    const query =
        'INSERT INTO users (name, password, image, last_activity) VALUES (?, ?, ?, ?)';
    const hashedPassword = await hashPassword(user.name, user.password);
    user.password = hashedPassword;
    database.query(
        query,
        [user.name, user.password, user.image, user.last_activity],
        (err, result: OkPacket) => {
            if (err) {
                callback(err);
            } else {
                const id = result.insertId;
                callback(null, id);
            }
        }
    );
};

export const createScore = (userScore: UserScore, callback: Function) => {
    const query = 'INSERT INTO user_scores (user_id, country_id) VALUES (?, ?)';

    database.query(
        query,
        [userScore.user_id, userScore.country_id],
        (err, result: OkPacket) => {
            if (err) {
                callback(err);
            } else {
                const id = result.insertId;
                callback(null, id);
            }
        }
    );
};

export const connect = (user: User, callback: Function) => {
    const query = 'SELECT * FROM users WHERE password = ?';

    database.query(query, [user.password], (err, result) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            const users: User[] = [];

            rows.forEach((row) => {
                const user: User = {
                    id: row.id,
                    name: row.name,
                    password: row.password,
                    image: row.image,
                    level: row.level,
                    last_activity: row.last_activity,
                    created_at: row.created_at
                };
                users.push(user);
            });
            callback(null, users);
        }
    });
};

export const findAll = (callback: Function) => {
    const query = 'SELECT * FROM users';

    database.query(query, (err, result) => {
        if (err) {
            callback(err);
        } else {
            const rows = <RowDataPacket[]>result;
            const users: User[] = [];

            rows.forEach((row) => {
                const user: User = {
                    id: row.id,
                    name: row.name,
                    password: row.password,
                    image: row.image,
                    level: row.level,
                    last_activity: row.last_activity,
                    created_at: row.created_at
                };
                users.push(user);
            });
            callback(null, users);
        }
    });
};

export const update = (user: User, callback: Function) => {
    const query =
        'UPDATE users SET name = ?, password = ?, image = ?, level = ?, last_activity = ? WHERE id = ?';

    database.query(
        query,
        [
            user.name,
            user.password,
            user.image,
            user.level,
            user.last_activity,
            user.id
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

export const updateScore = (userScore: UserScore, callback: Function) => {
    const query =
        'UPDATE userScores SET succeeded_streak = ?, failed_streak = ?, succeeded = ?, failed = ?, level = ? WHERE user_id = ? AND country_id = ?';

    database.query(
        query,
        [
            userScore.succeeded_streak,
            userScore.failed_streak,
            userScore.succeeded,
            userScore.failed,
            userScore.level,
            userScore.user_id,
            userScore.country_id
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

export const remove = (id: number, callback: Function) => {
    const query = 'DELETE FROM users WHERE id = ?';
    database.query(query, [id], (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
};
