function getRandNum(limitFrom, limitTo){
  return (Math.random() * (limitTo - limitFrom)) + limitFrom;
};

module.exports = getRandNum;