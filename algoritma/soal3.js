function countOccurrences(inputArray, queryArray) {
  const countMap = inputArray.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const result = queryArray.map((query) => countMap[query] || 0);
  return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
console.log(countOccurrences(INPUT, QUERY));
