const { findMean, findMedian, findMode, } = require('./helpers');

describe('findMedian', () => {
  test('finds the median of an even set', () => {
    expect(findMedian([1,3,5,6])).toEqual(4)
  });
  test('finds the median of an odd set', () => {
    expect(findMedian([1,3,5])).toEqual(3);
  });
});

describe('findMean', () => {
  test('finds the mean of an array of numbers', () => {
    expect(findMean([1,-1,4,2])).toEqual(1.5);
  });
  test('finds the mean of an empty array', () => {
    expect(findMean([])).toEqual(0);
  });
});

describe('findMode', () => {
  test('finds the mode', () => {
    expect(findMode([1,1,2,2,3,3,3])).toEqual(3);
  });
});