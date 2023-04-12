export interface User {
    id: number;
    name: string;
    password: string;
    level: Level;
    last_activity: string;
    created_at: string;
}

export interface UserScore {
    user_id: number;
    country_code: number;
    succeeded: number;
    succeeded_streak: number;
    medium: number;
    medium_streak: number;
    failed: number;
    failed_streak: number;
    level: Level;
}

export enum Level {
    Beginner = 0,
    Intermediate = 1,
    Advanced = 2,
    Expert = 3,
    Master = 4,
    GrandMaster = 5,
    God = 6,
    Supreme = 7
}
