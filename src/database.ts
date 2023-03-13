import * as dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config();

export const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});
