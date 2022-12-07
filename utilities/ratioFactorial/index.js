const ratioOfTwoNumb = require("../ratio/index");
const factorialTwoNumb = require("../factorial/index");
const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumb(num1, num2);
  const fact = factorialTwoNumb(num3);

  return { ratio, fact };
};
module.exports = ratioAndFactorial;
