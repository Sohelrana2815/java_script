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

// console.log(filterEvenNumbers(numbers));

// Task 5 Calculate total price of books

function calculateTotalBookPrice(books) {
  const totalPrice = books.reduce(
    (total, book) => total + book.price * book.quantity,
    0
  );
  return totalPrice;
}

const books = [
  { title: "JS Basic", price: 200, quantity: 3 },
  { title: "Advanced JS", price: 300, quantity: 2 },
];
// console.log(calculateTotalBookPrice(books));

// Task 6
function findOldestPerson(people) {
  if (people.length === 0) return null; // Handle empty array case

  return people.reduce((oldest, person) => 
    person.age > oldest.age ? person : oldest
  ).name;
}

// Example usage:
const peoples = [
  { name: "Alice", age: 33 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 50 }
];

console.log(findOldestPerson(people)); // Output: "Charlie"

// task 7

function isValidPassword(password) {
  //Check if password meets all criteria

  return (
    password.length >= 8 && // at least 8 characters
    /[A-Z]/.test(password) && // contains at least one uppercase letter
    /\d/.test(password) // one number
  );
}

console.log(isValidPassword("Secret123"));
console.log(isValidPassword("foobar1G"));
