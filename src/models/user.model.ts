import { OkPacket, RowDataPacket } from 'mysql2';
import { database } from '../database';
import { User } from '../types/user';

export const create = (user: User, callback: Function) => {
    const query =
        'INSERT INTO users (name, password, image, level, last_activity) VALUES (?, ?, ?, ?, ?)';

    database.query(
        query,
        [user.name, user.password, user.image, user.level, user.last_activity],
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

export const findAll = (callback: Function) => {
    const query = 'SELECT * FROM users';

    database.query(query, (err, result) => {
        if (err) {
            callback(err);
        }
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
        (err, result: OkPacket) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result.affectedRows);
            }
        }
    );
};
