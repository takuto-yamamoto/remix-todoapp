import path from 'path';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarSchema = z.object({
  NODE_ENV: z
    .enum(['production', 'development', 'test'])
    .default('development'),
  API_PORT: z.number().default(3001),
  DATABASE_URL: z.string().default('file:./dev.db'),
});

const parsedEnvVars = envVarSchema.safeParse(process.env);
if (!parsedEnvVars.success) {
  throw new Error(`Config validation error: ${parsedEnvVars.error.message}`);
}

const config = {
  env: parsedEnvVars.data.NODE_ENV,
  port: parsedEnvVars.data.API_PORT,
};

export default config;
