import path from 'path';

import dotenv from 'dotenv';
import { DEFAULT_PORT } from 'utils/constants';
import { z } from 'zod';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarSchema = z.object({
  NODE_ENV: z
    .enum(['production', 'development', 'test'])
    .default('development'),
  PORT: z.number().default(DEFAULT_PORT),
  DATABASE_URL: z.string().default('file:./dev.db'),
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
