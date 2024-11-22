// no.1

function multiply(a, b, c, d) {
  return a * b * c * d;
}

// console.log(multiply(4, 5, 6, 7, 8));

// no.2

function evenOrOdd(number) {
  if (number % 2 === 1) {
    // odd number
    const multiplyByTow = number * 2;
    return multiplyByTow;
  } else {
    const divideByTow = number / 2;
    return divideByTow;
  }
}

// const result = evenOrOdd(10);
// console.log(result);

// no.3

function make_avg(arr) {
  let sum = 0;
  const arrSize = arr.length;

  for (const element of arr) {
    sum += element;
  }

  const avg = sum / arrSize;
  return avg;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const avg = make_avg(numbers);
// console.log("Average of all elements : ", avg);

// no.4

function one_count(binaryStr) {
  let motOne = 0;

  for (const character of binaryStr) {
    if (character === "1") {
      motOne++;
    }
  }

  return motOne;
}

const binaryStr = "01110100010111100101111110101110101011001010";

const motOne = one_count(binaryStr);

// console.log("Binary te motOne: ", motOne);

// no.5

function odd_even(value) {
  if (value % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const value = 47;
const result = odd_even(value);
console.log(result);
