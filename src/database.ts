import mysql from 'mysql';

export const connect = (): Promise<mysql.Connection> => {
    return new Promise<mysql.Connection>((resolve, reject) => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'yourpassword',
            database: 'yourdatabase'
        });

        connection.connect((err) => {
            if (err) {
                reject(err);
            } else {
                resolve(connection);
            }
        });
    });
};
