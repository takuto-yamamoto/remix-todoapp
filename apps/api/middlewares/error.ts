import express from 'express';
import { ApiError } from '../utils/errors';
import httpStatus from 'http-status';
import config from '../config/config';
import logger from '../config/logger';

export const errorConverter: express.ErrorRequestHandler = (
  err,
  _req,
  _res,
  next
) => {
  if (!(err instanceof ApiError)) {
    const statusCode = err.statusCode as number & keyof typeof httpStatus;
    const message = err.message ?? httpStatus[statusCode];
    next(new ApiError(statusCode, message, false, err.stack));
  }
};

export const errorHandler: express.ErrorRequestHandler = (
  err,
  _req,
  res: express.Response
) => {
  let { statusCode, message } = err;

  if (config.env === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  logger.error(err);

  res.status(statusCode).send({
    code: statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  });
};
