// task 3

function calculateAge(people) {
  const currentYear = new Date().getFullYear();

  return people.map((person) => ({
    name: person.name,
    age: currentYear - person.birthYear,
  }));
}

const people = [
  { name: "Alice", birthYear: 2000 },
  { name: "Bob", birthYear: 2005 },
];

console.log(calculateAge(people));
// task 6 Find the Oldest Person

function findOldestPerson(peopleObj) {
  const oldestPerson = peopleObj.reduce((oldest, person) =>
    person.age > oldest.age ? person : oldest
  ).name;
  return oldestPerson;
}

const people1 = [
  { name: "Alice", age: 33 },
  { name: "Bob", age: 45 },
];

console.log(findOldestPerson(people1), "is the oldest person");

// task 7 Calculate Factorial

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * (n - 1);
}
console.log(factorial(5), "good");

// task 9 Shopping Cart Total

function calculateTotal(cartItems, discountPercentage) {
  const totalPrice = cartItems.reduce((acc, cart) => {
    return acc + cart.price * cart.quantity;
  }, 0);

  const discount = (totalPrice * discountPercentage) / 100;

  const discountedPrice = totalPrice - discount;

  return discountedPrice;
}

const cart = [
  { item: "Shirt", price: 500, quantity: 2 },
  { item: "Shoes", price: 1000, quantity: 1 },
];

console.log(calculateTotal(cart, 20));

// task 10 Find Duplicate Numbers

function findDuplicates(numbers) {
  const seen = new Set(); // Set to store unique numbers
  const duplicates = new Set(); // Set to store duplicates numbers

  for (const num of numbers) {
    if (seen.has(num)) {
      duplicates.add(num); // if number is already seen, add to duplicates
    } else {
      seen.add(num);
    }
  }
  return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 4, 2, 5, 5]));

function convertTemperature(value, unit) {
  if (unit === "C") {
    const celsius = ((value - 32) * 5) / 9;
    return `${celsius}°F`;
  } else if (unit === "F") {
    const fahrenheit = (value * 9) / 5 + 32;
    return `${fahrenheit}°F`;
  } else {
    ("Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit.");
  }
}

console.log(convertTemperature(32, "C"));
console.log(convertTemperature(45, "F"));
