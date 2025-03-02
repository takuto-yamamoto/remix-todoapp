import morgan from 'morgan';
import config from './config';
import logger from './logger';
import express from 'express';

morgan.token(
  'message',
  (_, res: express.Response) => res.locals.errorMessage ?? ''
);

const ipFormat = config.env === 'production' ? ':remote-addr - ' : '';
const successResponseFormat = `${ipFormat}:method :url :status - :response-time ms`;
const errorResponseFormat = `${ipFormat}:method :url :status - :response-time ms - :message`;

const successHandler = morgan(successResponseFormat, {
  skip: (_, res) => res.statusCode >= 400,
  stream: { write: (message) => logger.info(message.trim()) },
});
const errorHandler = morgan(errorResponseFormat, {
  skip: (_, res) => res.statusCode < 400,
  stream: { write: (message) => logger.error(message.trim()) },
});

export default {
  successHandler,
  errorHandler,
};
