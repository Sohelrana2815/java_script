// function die array er moddhe thaka shokol numbers er sum ber korbo

// step -1: declare a function
// step-2: chek koro function call hoise kina
// step-3: set a parameter(s)
// step-4: check parameter e array ashse ki na
// step-5: jodi ashe do the operation

function sumOfNumbers(array) {
  let sum = 0;
  for (const element of array) {
    sum = sum + element;
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = sumOfNumbers(numbers);
console.log("Sum of number is: ", sum);
