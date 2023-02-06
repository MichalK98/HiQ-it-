import readTextFile from '../utils/readTextFile';
import path from 'path';

test('Read text from text file', async () => {
  expect(await readTextFile(path.join(__dirname, '../../uploads/chickens.txt'))).toBe(
    'How Many Generic Chickens Can You Fit Into a Generic Pontiac?'
  );
});

test('Read text from empty text file', async () => {
  expect(await readTextFile(path.join(__dirname, '../../uploads/empty.txt'))).toBe('');
});

test('Read .rtf file', async () => {
  expect(await readTextFile(path.join(__dirname, '../../uploads/text.rtf'))).toBe(
    'hello world from rtf'
  );
});
