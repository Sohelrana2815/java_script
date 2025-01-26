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

console.log(`even numbers: ${evenNumbers}`);
