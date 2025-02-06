// task 6 Find the Oldest Person

function findOldestPerson(peopleObj) {
  const oldestPerson = peopleObj.reduce((oldest, person) =>
    person.age > oldest.age ? person : oldest
  ).name;
  return oldestPerson;
}

const people = [
  { name: "Alice", age: 33 },
  { name: "Bob", age: 45 },
];

console.log(findOldestPerson(people), "is the oldest person");

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
