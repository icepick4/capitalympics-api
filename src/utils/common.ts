import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';

export function hashPassword(password: string, saltRounds: number = 10): Promise<string>
{
    return bcrypt.hash(password, saltRounds);
}

export const comparePasswords = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};

export const Languages = ['en', 'fr', 'es', 'it'] as const;
export const DefaultLang = 'en' as const;
export type Lang = (typeof Languages)[number];
export const Continents = [
    'World',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
] as const;
export const DefaultContinent = 'Europe' as const;
export type Continent = (typeof Continents)[number];

export const Scores = ['succeeded', 'medium', 'failed'] as const;
export type Score = (typeof Scores)[number];

export const LearningTypes = ['flag', 'capital'] as const;
export type LearningType = (typeof LearningTypes)[number];

export type ScoreResult = {
    count: number;
    country_id: number;
    result: Score;
};

export const calculateScore = (
    succeeded_count: number,
    medium_count: number,
    failed_count: number
): number => {
    let score: number = 0;
    const total = succeeded_count + medium_count + failed_count;
    if (total === 0) {
        return -1;
    }
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
    return Math.floor(Math.max(0, Math.min(score, 100)));
};

export const getNewCountryToPlay = (
    userScores: {
        [key: string]: number;
        id: number;
    }[]
): number => {
    userScores.sort((a, b) => b.score - a.score);
    const lowPartWeight = 0.8;
    const half = Math.ceil(userScores.length / 2);
    const firstHalf = userScores.slice(0, half);
    const secondHalf = userScores.slice(half, userScores.length);
    const random = Math.random();
    if (random < lowPartWeight) {
        //select a random country from the first half
        return firstHalf[Math.floor(Math.random() * firstHalf.length)].id;
    }
    // select a random country from the second half
    return secondHalf[Math.floor(Math.random() * secondHalf.length)].id;
};

export function t(translations: Prisma.JsonValue, lang: Lang): string | null {
    if (
        translations === null ||
        typeof translations !== 'object' ||
        Array.isArray(translations)
    ) {
        return null;
    }

    return (
        (translations[lang] as string | null) ??
        (translations[DefaultLang] as string | null) ??
        null
    );
}

export type Nullish = null | undefined;
export type Maybe<T> = T | Nullish;
