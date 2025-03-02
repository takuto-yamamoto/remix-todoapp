import express from 'express';
import httpStatus from 'http-status';
import { ZodSchema } from 'zod';

import { ApiError } from '../utils/errors';


export const validate =
  (schema: ZodSchema) =>
  (
    req: express.Request,
    _res: express.Response,
    next: express.NextFunction
  ) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      const errorMessage = parsed.error.issues
        .map((issue) => issue.message)
        .join(', ');
      return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    }

    return next();
  };
