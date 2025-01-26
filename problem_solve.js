// 1st Option
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

const addProp = (car.passengerCapacity = 5);

console.log(car);

//2nd

const updatedCar = {
  ...car,
  "passenger capacity": 5,
};

console.log(updatedCar);
