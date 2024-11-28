// 1. Even or Odd
// Write a program that takes a number as input and checks if it is even or odd. Print "Even" or "Odd" accordingly.

function isEven(number) {
  if (number % 2 !== 1) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}
const checkIsEven = isEven(81);

console.log(checkIsEven);
