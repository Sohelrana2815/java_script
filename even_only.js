/**
 * create fun and return only even numbers
 * create the sum of even numbers
 *
 */

function evenNumbersOnly(numbers) {
  const even = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      even.push(number);
    }
  }
  return even;
}

const numbers = [5, 63, 48, 75, 12];

// const evens = evenNumbersOnly(numbers);

// console.log("all the even numbers are: ", evens);

function sumOfEvenNumbers(number) {
  let sum = 0;
  for (const key of number) {
    if (key % 2 === 0) {
      console.log(key);
      sum = sum + key;
    }
  }
  return sum;
}

const sum = sumOfEvenNumbers([1, 4, 8, 97, 4, 13, 2, 59, 4, 3, 15, 544, 1321]);

console.log("sum of even numbers: ", sum);
