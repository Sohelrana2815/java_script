// task 1
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// console.log(celsiusToFahrenheit(45));

// console.log(celsiusToFahrenheit(50));

// task 2

function countOccurrences(numbers, target) {
  let count = 0;

  for (const num of numbers) {
    if (num === target) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];

// console.log(countOccurrences(numbers, 5)); // Output: 2
// console.log(countOccurrences(numbers, 25)); // Output: 0

// task 3

const str = "Dhaka is the capital of Bangladesh.";

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels(str));

// task4

function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";
  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }
  return longestWord;
}

const input = "I am learning Programming to become a programmer";
const result = findLongestWord(input);

// console.log(result);

// task 5

const randomNumber = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber);
