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
