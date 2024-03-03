import express from 'express';

import morgan from 'morgan';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import routes from './routes';
import { rateLimit } from 'express-rate-limit'
import { swaggerOptions } from './swaggerOptions';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import { envguard } from 'env';

// const transport = new DailyRotateFile({
//   dirname: 'log',
//   filename: 'access-%DATE%.log',
//   datePattern: 'YYYY-MM-DD',
//   maxSize: '20m',
//   maxFiles: '14d'
// });

// const logger = winston.createLogger({
//   transports: [
//     transport
//   ]
// });

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit: 10,
  message: 'Wait before sending another request.',
  statusCode: 429,
})

const cors = require('cors');
const app = express();

const specs = swaggerJsdoc(swaggerOptions);
app.use(cors({
  origin: process.env.ORIGIN_URL
}));
app.use(limiter);

// setup the logger
// app.use(morgan('combined', { stream: { write: (message) => logger.info(message) } }));

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// All api routes are handled in routes.ts
app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Invalid request' });
  });

envguard(["WEB_PORT", "ORIGIN_URL"]);
envguard({ strict: ["MONGODB_URL"]});

export default app;