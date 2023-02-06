import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { promises as fs } from 'fs';
import multer from 'multer';
import config from 'config';
import logger from './utils/logger';
import readTextFile from './utils/readTextFile';
import findMostFrequentWord from './utils/findMostFrequentWord';

const port = config.get<number>('port');

const app = express();
const server = http.createServer(app);

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (_req, _file, cb) {
    cb(null, Date.now() + '.txt');
  },
});

const upload = multer({ storage: storage });

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

  app.post('/api/file_accept', upload.single('file'), async (req: Request, res: Response) => {
    // File is missing
    if (!req.file) {
      res.json({ status: 404 });
      return;
    }

    const text = (await readTextFile(req.file.path)) || '';
    const mostFrequentWord = findMostFrequentWord(text) || '';
    const modifiedText = text.replaceAll(mostFrequentWord, `HiQ${mostFrequentWord}`);

    // Remove temp file
    fs.unlink(req.file.path);

    res.json({
      status: 200,
      text,
      mostFrequentWord,
      modifiedText,
    });
  });
});
