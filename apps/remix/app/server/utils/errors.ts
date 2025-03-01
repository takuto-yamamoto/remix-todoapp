export class ApiError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(
    statusCode: number,
    message: string,
    isOperational?: boolean,
    stack?: string
  ) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational || true;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
