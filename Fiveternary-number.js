/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 15;

const num2 = 10;

if (num1 > num2) {
  const result1 = num1 * 2;
  console.log(`Double of ${num1} is: `, result1);
} else {
  const result2 = num1 + num2;
  console.log(`Sum of ${num1} and ${num2} is: `, result2);
}
