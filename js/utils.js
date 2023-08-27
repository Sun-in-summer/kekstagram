const repeatStr = (str, n) => {
  let newStr = '';
  while (n-- > 0) {
    newStr += str;
  }
  return newStr;
};

const  getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


export {getRandomPositiveInteger, repeatStr};
