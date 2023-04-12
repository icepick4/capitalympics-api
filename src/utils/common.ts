const bcrypt = require('bcrypt');

export const hashPassword = async (
    username: string,
    password: string
): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(username + password, saltRounds);
};

export const comparePasswords = async (
    name: string,
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return await bcrypt.compare(name + password, hashedPassword);
};

export const calculateScore = (
    succeeded_count: number,
    medium_count: number,
    failed_count: number
): number => {
    let score: number = 0;

    const total = succeeded_count + medium_count + failed_count;
    if (total === 0) {
        return 0;
    }

    const succeeded_percentage: number = succeeded_count / total;
    const medium_percentage: number = medium_count / total;
    const failed_percentage: number = failed_count / total;

    // Weighted score
    const weighted_succeeded_percentage: number = Math.min(
        succeeded_percentage * 2,
        1
    );
    const weighted_medium_percentage: number = Math.min(
        medium_percentage * 1.5,
        1
    );
    const weighted_failed_percentage: number = Math.min(
        failed_percentage * 2,
        1
    );

    // Final score
    score = Math.round(
        (weighted_succeeded_percentage * 100) / 3 +
            (weighted_medium_percentage * 100) / 3 +
            (weighted_failed_percentage * 100) / 3
    );

    // Score between 0 and 100
    return Math.max(0, Math.min(score, 100));
};
