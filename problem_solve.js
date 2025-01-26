// 1st Option
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

const addProp = (car.passengerCapacity = 5);

// console.log(car);

//2nd

const updatedCar = {
  ...car,
  "passenger capacity": 5,
};

// console.log(updatedCar);

// 3rd

const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahajahan Tapan",
    marks: 30,
  },
};

// const physicsMarks = student.physics.marks;

// using nested indexing

// const physicsMarks = student["physics"]["marks"];

const physics = student.physics;
const physicsMarks = physics.marks;

console.log("Physics marks: ", physicsMarks);


// 