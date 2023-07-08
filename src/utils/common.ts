import { Level, UserScore } from '../types/user';

const bcrypt = require('bcrypt');

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

export const comparePasswords = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};

export const Languages = ['en', 'fr', 'es', 'it'] as const;
export type Lang = (typeof Languages)[number];

export const calculateScore = (
    succeeded_count: number,
    medium_count: number,
    failed_count: number
): Level => {
    let score: number = 0;

    const total = succeeded_count + medium_count + failed_count;

    const succeeded_percentage = succeeded_count / total;
    const medium_percentage = medium_count / total;
    const failed_percentage = failed_count / total;

    // -- Weighted scores percentage -- //
    const weighted_succeeded_percentage = Math.min(
        succeeded_percentage * 6,
        1.1
    );
    const weighted_medium_percentage = Math.min(medium_percentage * 2, 1);
    const weighted_failed_percentage = failed_percentage * 4;

    // -- Final score -- //
    // The score is calculated with a logarithmic function to avoid
    // achieving a high score with a few questions
    score = Math.round(
        ((weighted_succeeded_percentage * 100 -
            weighted_medium_percentage * 10 -
            weighted_failed_percentage * 25) *
            Math.log10(succeeded_count + 1)) /
            1.5
    );

    // Score between 0 and 100
    return Math.floor(Math.max(0, Math.min(score, 100))) as Level;
};

export const fromScoreToLevel = (score: number): Level => {
    if (score < 0) {
        return -1;
    } else if (score < 10) {
        return 0;
    } else if (score < 20) {
        return 1;
    } else if (score < 30) {
        return 2;
    } else if (score < 40) {
        return 3;
    } else if (score < 50) {
        return 4;
    } else if (score < 60) {
        return 5;
    } else if (score < 70) {
        return 6;
    } else if (score < 80) {
        return 7;
    } else if (score < 90) {
        return 8;
    } else if (score < 100) {
        return 9;
    } else {
        return 10;
    }
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
            .country_code;
    }
    // select a random country from the second half
    return secondHalf[Math.floor(Math.random() * secondHalf.length)]
        .country_code;
};
