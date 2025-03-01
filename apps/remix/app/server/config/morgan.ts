import morgan from 'morgan';
import config from './config';
import logger from './logger';

morgan.token('message', (_, res) => res.statusMessage || '');

const ipFormat = config.env === 'prod' ? ':remote-addr - ' : '';
const successResponseFormat = `${ipFormat}:method :url :status - :response-time ms`;
const errorResponseFormat = `${ipFormat}:method :url :status - :response-time ms - :message`;

export const successHandler = morgan(successResponseFormat, {
  skip: (_, res) => res.statusCode >= 400,
  stream: { write: (message) => logger.info(message.trim()) },
});
export const errorHandler = morgan(errorResponseFormat, {
  skip: (_, res) => res.statusCode < 400,
  stream: { write: (message) => logger.error(message.trim()) },
});
