// Reverse array without using reverse method

// Stored the reversed colors
const colors = ["red", "blue", "green", "yellow", "orange"];

const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

// console.log(reversedColors);

// task 2

const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

// console.log(`even numbers: ${evenNumbers}`);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output: 'TomTimTinTik'

// initialize the string

const names = ["tom", "tim", "tik", "ton"];

// Declare a variable to stored the concatenated value

let result = "";

for (const name of names) {
  result += name;
}
// console.log(result);

// task 4

const sentence = "I am hard working person.";

const words = sentence.split(" ");

const reversedWords = words.reverse();

const reverseSentence = reversedWords.join(" ");

console.log(reverseSentence);


