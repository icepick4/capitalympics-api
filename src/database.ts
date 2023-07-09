import mysql from 'mysql2';
import { ENV } from './env';

export const database = mysql.createConnection({
    host: ENV.DB_HOST,
    user: ENV.DB_USER,
    password: ENV.DB_PWD,
    database: ENV.DB_NAME,
    ssl: {
        rejectUnauthorized: false,
    },
});
