import { Level, UserScore } from '../types/user';

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
): Level => {
    let score: number = 0;

    const total = succeeded_count + medium_count + failed_count;
    if (total === 0) {
        return -1;
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
    return Math.floor(Math.max(0, Math.min(score, 100))) as Level;
};

export const getLevelName = (level: Level): string => {
    switch (level) {
        case -1: // -1 is for the user who has never played
            return 'No score';
        case 0:
            return 'Newcomer';
        case 1:
            return 'Beginner';
        case 2:
            return 'Learner';
        case 3:
            return 'Apprentice';
        case 4:
            return 'Intermediate';
        case 5:
            return 'Average';
        case 6:
            return 'Advanced';
        case 7:
            return 'Expert';
        case 8:
            return 'Master';
        case 9:
            return 'Grandmaster';
        case 10:
            return 'Legend';
        default:
            return 'Unknown : error';
    }
};

export const getNewCountryToPlay = (userScores: UserScore[]): string => {
    //userScores are sorted by level (level between -1 and 10)
    const lowPartWeight = 0.8;
    const half = Math.ceil(userScores.length / 2);
    const firstHalf = userScores.slice(0, half);
    const secondHalf = userScores.slice(half, userScores.length);
    const random = Math.random();
    if (random < lowPartWeight) {
        //select a random country from the first half
        return firstHalf[Math.floor(Math.random() * firstHalf.length)]
            .alpha3Code;
    }
    // select a random country from the second half
    return secondHalf[Math.floor(Math.random() * secondHalf.length)].alpha3Code;
};
