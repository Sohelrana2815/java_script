// Gilapi khor

const gilapiKhor = [
  "sabul",
  "tabul",
  "labul",
  "mokbul",
  "sabul",
  "rabul",
  "mokbul",
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 5, 8];

function noDuplicate(arr) {
  const unique = [];
  for (const element of arr) {
    if (unique.includes(element) === false) unique.push(element);
  }
  return unique;
}

const uniqueArr = noDuplicate(numbers);
console.log(uniqueArr);
