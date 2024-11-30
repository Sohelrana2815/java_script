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

const array = [3, 5, 66, 48, 96, 13, 12, -6, 454];

let maxNumber = [0];

for (const element of array) {
  if (element > maxNumber) {
    maxNumber = element;
  }
}

console.log(maxNumber);
