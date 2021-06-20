// Sum All Numbers in a Range
const sumAll = (arr) => {
  const o = arr.sort((a, b) => a - b);
  let a = [];
  for (let i = o[0]; i <= o[1]; i++) {
    a.push(i);
  }
  return a.reduce((a, b) => a + b);
};

sumAll([1, 4]);
