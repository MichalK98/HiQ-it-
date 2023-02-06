import findMostFrequentWord from '../utils/findMostFrequentWord';

test('Find most frequent word: word', () => {
  expect(findMostFrequentWord('Most frequent word should be word')).toBe('word');
});

test('Find most frequent word: there multiple most frequent words', () => {
  expect(findMostFrequentWord('Most frequent word should be word and frequent')).toBe('word');
});

test('Find most frequent word: the text file is empty', () => {
  expect(findMostFrequentWord('')).toBe('');
});
