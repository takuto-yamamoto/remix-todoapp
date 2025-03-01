import path from 'path';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarSchema = z.object({
  NODE_ENV: z.enum(['prod', 'dev', 'test']).default('dev'),
  PORT: z.number().default(3000),
  DATABASE_URL: z.string().default('file:./dev.db'),
  API_BASE_URL: z.string().default('http://localhost:3000'),
});

const parsedEnvVars = envVarSchema.safeParse(process.env);
if (!parsedEnvVars.success) {
  throw new Error(`Config validation error: ${parsedEnvVars.error.message}`);
}

const config = {
  env: parsedEnvVars.data.NODE_ENV,
  port: parsedEnvVars.data.PORT,
};

export default config;
