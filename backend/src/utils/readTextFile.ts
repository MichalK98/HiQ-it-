import { promises as fs } from 'fs';
import logger from './logger';

const readTextFile = async (path: string) => {
  try {
    logger.info(`Reading from ${path}`);

    return await fs.readFile(path, 'utf8');
  } catch (e) {
    logger.error(`Reading from ${path} failed`);
    return '';
  }
};

export default readTextFile;
