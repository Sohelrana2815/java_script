// 1. Reverse String

function reverseString(str) {
  const splitString = str.split("");
  const reverseArray = splitString.reverse();
  const joinSplitString = reverseArray.join();
  return joinSplitString;
}

// console.log(reverseString("Sohel Rana"));

// 2. Fizzbuzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

// 3. Max number

const numbers = [100, 2, 3, 5, 86, 41];
function findMaxNumber(arr) {
  // Initialize a variable to store the maximum value
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const result = findMaxNumber(numbers);
console.log(result);
