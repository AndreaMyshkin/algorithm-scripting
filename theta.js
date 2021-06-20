const uniteUnique = (...arrays) => {
  const array = [];
  for (let θ of [].concat(...arrays)) if (!array.includes(θ)) array.push(θ);
  return array;
};

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
