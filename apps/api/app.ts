import express from 'express';
import config from './config/config';
import morgan from './config/morgan';
import compression from 'compression';
import httpStatus from 'http-status';
import { ApiError } from './utils/errors';
import { errorConverter, errorHandler } from './middlewares/error';
import contacts from './routes/contacts';

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(compression());

app.use('/contacts', contacts);

// send back a 404 error for any unknown api request
app.use((_req, _res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});
app.use(errorConverter);
app.use(errorHandler);

export default app;
