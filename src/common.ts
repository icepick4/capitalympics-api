const bcrypt = require('bcrypt');

const saltRounds = 10;

export const hashPassword = async (
    username: string,
    password: string
): Promise<string> => {
    console.log(typeof username, typeof password);
    return await bcrypt.hash(username + password, saltRounds);
};

export const comparePasswords = async (
    name: string,
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return await bcrypt.compare(name + password, hashedPassword);
};
