import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  ID: z.string(),
  PASSWORD: z.string(),
  JWT_SECRET_KEY: z.string(),
  ALLOWED_ORIGIN: z.string(),
  NODE_ENV: z.string(),
});
