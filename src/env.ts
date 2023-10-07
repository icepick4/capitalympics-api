import dotenv from 'dotenv';
import z from 'zod';

dotenv.config();
const envVariablesSchema = z.object({
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PWD: z.string(),
    DB_NAME: z.string(),
    DATABASE_URL: z.string(),
    JWT_TOKEN: z.string().nonempty(),
    DOWNLOAD_FOLDER: z.string().nonempty(),
    PORT: z
        .string()
        .transform(Number)
        .refine((value) => !isNaN(value) && value > 0, {
            message: 'The PORT environment variable must be a positive number'
        })
        .optional(),
    SSL_REJECT_UNAUTHORIZED: z.string().optional().default('1')
});

export const ENV = envVariablesSchema.parse(process.env);
