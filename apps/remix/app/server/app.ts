import { createRequestHandler } from '@remix-run/express';
import express from 'express';
import path from 'path';

const app = express();

// middlewares
app.use(express.json());

// remix settings
const build = await import(path.join(__dirname, 'build', 'index.js'));
app.all('*', createRequestHandler({ build }));

export default app;
