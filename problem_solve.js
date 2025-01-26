let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const [prop, val] of Object.entries(myObject)) {
  console.log(`key: ${prop} | type: ${typeof val}`);
}
