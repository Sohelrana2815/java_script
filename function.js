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

// console.log(`Result for num1: ${result1}`);

const num2 = 10;

const result2 = processNumber(num2);

// console.log(`Result for num2: ${result2}`);

// Task 3

function make_avg(arr, size) {
  let sum = 0;

  for (let i = 0; i < size; i++) {
    sum = sum + arr[i];
  }
  return sum / size;
}

const numbers = [10, 20, 30, 40, 50];

const avg = make_avg(numbers, numbers.length);

console.log("Average:", avg);

// task 4

function count_zero(binaryString) {
  let count = 0;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "0") {
      count++;
    }
  }
  return count;
}

const str1 = "101010";
const str2 = "111111";
const str3 = "000000";

console.log("Number of zeros in '" + str1 + "':", count_zero(str1));
console.log("Number of zeros in '" + str1 + "':", count_zero(str2));
console.log("Number of zeros in '" + str1 + "':", count_zero(str3));
