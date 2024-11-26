// # js-problems-part1-practice-tasks

// ### Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// Formula : °F = °C × (9/5) + 32
// 1.
function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// console.log(celsiusToFahrenheit(32));

// ### Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input:
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// ----

// 1st method
// const numbers = [9, 5, 7, 4, 15, 24, 28];

// const target = 25;

// function count25(arr, num) {
//   let count = 0;
//   for (const element of arr) {
//     if (element === num) {
//       count++;
//     }
//   }
//   return count;
// }

// const result = count25(numbers, target);
// console.log(result);

// 2nd method

const numbers = [2, 5, 7, 9, 10, 5, 5, 25, 25, 25, 5];

const targetNumber = 25;

function countSpecificNumber(arr, num) {
  let count = 0;

  for (const element of arr) {
    if (element === num) {
      count++;
    }
  }
  return count;
}

const output = countSpecificNumber(numbers, targetNumber);

// console.log(`The ${targetNumber} is repeated ${output} times`);

// const numbers = [5, 6, 11, 12, 98, 5];
// const target = 5; // The number to find

// function countOccurrences(array, num) {
//   let count = 0; // Initialize count
//   for (let i = 0; i < array.length; i++) {
//     // Loop through each element
//     if (array[i] === num) {
//       // Check if the element matches the target
//       count++; // Increment count
//     }
//   }
//   return count; // Return the total count
// }

// const result = countOccurrences(numbers, target);
// console.log(`The number ${target} is repeated ${result} times.`); // Output: 2

// // ### Task-3:
// Write a function to count the number of vowels in a string.

function getVowels(str) {
  let m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

// const output2 = getVowels("Hello world, how are you");
// console.log(output2);

// Find the longest word in a string

const sentence = "My name is Sohel Rana and i am 23 years old.";

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const longestWord = findLongestWord(sentence);
console.log(longestWord);
