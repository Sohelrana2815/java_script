// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(a, b, c, d) {
  const result = a * b * c * d;
  return result;
}

// console.log(multiply(5, 2, 3, 5));

// task 2

function processNumber(number) {
  if (number % 2 !== 0) {
    return number * 2;
  } else {
    return number / 2;
  }
}

const num1 = 9;

const result1 = processNumber(num1);

console.log(`Result for num1: ${result1}`);

const num2 = 10;

const result2 = processNumber(num2);

console.log(`Result for num2: ${result2}`);
