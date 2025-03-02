import process from 'process';
import app from './app';
import logger from './config/logger';
import config from './config/config';
import { EXIT_CODE_ERROR } from 'utils/constants';

const server = app.listen(config.port, () => {
  logger.info(`Express Server initiated listening on port ${config.port}`);
});

const safeShutdown = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(EXIT_CODE_ERROR);
    });
  } else {
    process.exit(EXIT_CODE_ERROR);
  }
};
const unexpectedExceptionHandler = (error: Error) => {
  logger.error(error);
  safeShutdown();
};
const exitSignalsHandler = (signal: NodeJS.Signals) => {
  logger.info(`${signal} signal received: closing HTTP server.`);
  safeShutdown();
};

process.on('uncaughtException', unexpectedExceptionHandler);
process.on('unhandledRejection', unexpectedExceptionHandler);
process.on('SIGTERM', exitSignalsHandler);
process.on('SIGINT', exitSignalsHandler);
