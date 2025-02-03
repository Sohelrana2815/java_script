/**
 * Task1
 * Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const numbers = [167, 190, 165, 120, 137];

const lowestNumber = Math.min(...numbers);

// console.log("The lowest number in the array is:", lowestNumber);

/**
 * Task2
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const names = ["rahim", "robin", "rafi", "ron", "rashed"];

const smallestName = names.reduce((smallest, current) => {
  return current.length < smallest.length ? current : smallest;
});

// console.log("The friend with the smallest name is:", smallestName);

/**
 * Task 3
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalLaptopCost = laptopQty * laptopPrice;
  const totalTabletCost = tabletQty * tabletPrice;
  const totalMobileCost = mobileQty * mobilePrice;

  const totalBudget = totalLaptopCost + totalTabletCost + totalMobileCost;

  return totalBudget;
}

const laptops = 2;
const tablet = 1;
const mobile = 3;

const totalBudget = calculateElectronicsBudget(laptops, tablet, mobile);

// console.log("Total budget required: ", totalBudget);

/**
 * Task 4
 * You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
 */

// defines function and accept phones array of pone objects
function findAveragePhonePrice(phones) {
  if (phones.length === 0) {
    return 0;
  }
  const totalPrice = phones.reduce((sum, phone) => {
    return sum + phone.price;
  }, 0);

  const averagePrice = totalPrice / phones.length;

  return averagePrice;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

const averagePrice = findAveragePhonePrice(phones);

// console.log("The average price of the phone is:", averagePrice, "tk");

/**
 * Task 5
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
 { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
 { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
 { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
 { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
 */

function calculateTotalMonthlySalary(employees) {
  let totalSalary = 0;

  for (const employee of employees) {
    const currentSalary =
      employee.starting + employee.increment * employee.experience;
    totalSalary += currentSalary;
  }

  return totalSalary;
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const totalMonthlySalary = calculateTotalMonthlySalary(employees);
console.log("Total monthly salary:", totalMonthlySalary, "tk");
