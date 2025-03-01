import process from 'process';
import app from './app';
import logger from './config/logger';

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const server = app.listen(port, () => {
  logger.info(`Express Server initiated listening on port ${port}`);
});

const safeShutdown = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
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
