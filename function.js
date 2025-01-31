// task1

function multiply(a, b, c, d) {
  return a * b * c * d;
}

// console.log(multiply(5, 5, 2, 2));

// task2

function input(number) {
  if (number % 2 !== 0) {
    return number * 2;
  } else {
    return number / 2;
  }
}

console.log(input(7));
console.log(input(4));

// task4

function count_zero(binary_string) {
  let count = 0;

  for (let char of binary_string) {
    if (char === "0") {
      count++;
    }
  }

  return count;
}

// console.log(count_zero("101110"));
// console.log(count_zero("0000101"));
// console.log(count_zero("000000"));
