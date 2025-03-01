import winston from 'winston';
import config from './config';

const enumerateErrorFormat = winston.format((error) => {
  if (error instanceof Error) {
    Object.assign(error, { message: error.stack });
  }
  return error;
});

const logger = winston.createLogger({
  level: config.env === 'dev' ? 'debug' : 'info',
  format: winston.format.combine(
    enumerateErrorFormat(),
    config.env === 'dev'
      ? winston.format.colorize()
      : winston.format.uncolorize(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  defaultMeta: { service: 'remix-todoapp' },
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error'],
    }),
  ],
});

export default logger;
