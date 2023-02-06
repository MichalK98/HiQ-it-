import logger from './logger';

const findMostFrequentWord = (text: string) => {
  logger.info('Find the most frequent word');
  let words: string[] = text.match(/(\w+)/g) || [];

  if (words.length === 0) return '';

  // Count every word eg. { hello: 1, world: 1 }
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
  const mostFrequentWord = Object.keys(wordsObject).reduce((acc, curr) => {
    return wordsObject[acc] > wordsObject[curr] ? acc : curr;
  });

  return mostFrequentWord || words[0];
};

export default findMostFrequentWord;
