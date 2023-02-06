import logger from './logger';

const findMostFrequentWord = (text: string) => {
  logger.info('Find the most frequent word');
  let words: string[] = text.match(/(\w+)/g) || [];

  if (words.length === 0) return '';

  // Count every word eg. { hello: 1, world: 1 }
  words.reduce((acc: Array<string>, a: number | string, index: number) => {
    return [];
  }, []);
  const wordsObject = words.reduce((acc: { [x: string]: number }, curr: string) => {
    const current = curr.toLocaleLowerCase();

    if (current in acc) {
      acc[current] = acc[current] + 1;
    } else {
      acc[current] = 1;
    }

    return acc;
  }, {});

  // Find most frequent word in wordsObject
  let arr: number[] = Object.values(wordsObject);
  let mostFrequentWord = Math.max(...arr);

  return mostFrequentWord || words[0];
};

export default findMostFrequentWord;
