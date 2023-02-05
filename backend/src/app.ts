import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from 'config';
import logger from './utils/logger';

const port = config.get<number>('port');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);

  app.get('/', (_req: Request, res: Response) => {
    res.json({
      message: 'HiQ it!',
    });
  });
});
