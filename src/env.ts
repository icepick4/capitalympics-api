import dotenv from 'dotenv';
import z from 'zod';

dotenv.config();
const envVariablesSchema = z.object({
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PWD: z.string(),
  DB_NAME: z.string(),
  DATABASE_URL: z.string().optional(),
  JWT_TOKEN: z.string().nonempty(),
  PORT: z.string().transform(Number)
    .refine(value => !isNaN(value) && value > 0, { message: 'The PORT environment variable must be a positive number' })
    .optional(),
});

export const ENV = envVariablesSchema.parse(process.env);
