/*
 * Let’s write some code -
 * 1. Write a function that finds the sum of two numbers
 * 2. Write another function that displays this result in a pretty format
 * 3. Write another function that takes this sum and prints it in passive tense
 */

//! 1. Function to find sum of two numbers
function sum(a, b) {
  return a + b;
}

//! 2. Function to display result in pretty format
function displaySum(sum) {
  console.log(`The sum is: ${sum}`);
}

//! 3. Function to print sum in passive tense
function printPassive(sum) {
  console.log(`The sum of ${sum} was calculated`);
}

const num1 = 5;
const num2 = 8;

//? Find sum
const sumResult = sum(num1, num2);

//? Display sum
displaySum(sumResult);

//? Print passive
printPassive(sumResult);
