export interface User {
    id: number;
    name: string;
    password: string;
    image: string;
    level: Level;
    last_activity: Date;
    created_at: Date;
}

export interface UserScore {
    user_id: number;
    country_id: number;
    succeeded_streak: number;
    failed_streak: number;
    succeeded: number;
    failed: number;
    level: Level;
}

export enum Level {
    Beginner = 0,
    Master
}
