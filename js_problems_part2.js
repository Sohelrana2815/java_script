/**
 * Task1
 * Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const numbers = [167, 190, 165, 120, 137];

const lowestNumber = Math.min(...numbers);

console.log("The lowest number in the array is:", lowestNumber);

/**
 * Task2
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const names = ["rahim", "robin", "rafi", "ron", "rashed"];

const smallestName = names.reduce((smallest, current) => {
  return current.length < smallest.length ? current : smallest;
});

console.log("The friend with the smallest name is:", smallestName);

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

console.log("Total budget required: ", totalBudget);
