// Task 1 Find the Longest Word

function findLongestWord(words) {
  if (!words || words.length === 0) {
    return "";
  }

  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const words = ["apple", "banana", "cherry", "dragonFruit"];

// console.log(findLongestWord(words));

// Task 2 Reverse a String

function reverseString(str) {
  if (!str) {
    return "";
  }

  return str.split("").reverse().join("");
}

// console.log(reverseString("hello"));

// Task 3 Calculate Age from Birth Year

function calculateAge(people) {
  // get the current year

  const currentYear = new Date().getFullYear();

  return people.map((person) => ({
    name: person.name,
    age: currentYear - person.birthYear,
    name: person.name,
    age: currentYear - person.birthYear,
  }));
}

const people = [
  { name: "Alice", birthYear: 1990 },
  { name: "Bob", birthYear: 1985 },
];

// console.log(calculateAge(people));

// Task 4 Filter Even Numbers

function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 !== 1);
}

const numbers = [35, 13, 24, 8, 40];

console.log(filterEvenNumbers(numbers));
