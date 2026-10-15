
let num = 4;

function handleNum(num, handleEven, handleOdd) {
  if (num % 2 === 0) {
    return handleEven();
  } else {
    return handleOdd();
  }
}

const handleEven = () => {
  return 'number is even';
};

const handleOdd = () => {
  return 'number is odd';
};

console.log(handleNum(num, handleEven, handleOdd));