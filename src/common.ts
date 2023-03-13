const bcrypt = require('bcrypt');

const saltRounds = 10;

export const hashPassword = async (
    username: string,
    password: string
): Promise<string> => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(username + password, salt);
    return hashedPassword;
};
