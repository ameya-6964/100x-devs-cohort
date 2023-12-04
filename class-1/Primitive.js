/* 
 Let’s write some code -
*1. Write the program to greet a person given their first and last name
*2. Write a program that greets a person based on their gender. (If else)
*3. Write a program that counts from 0 - 1000 and prints (for loop)
 */

//! 1. Greet person by first and last name
const firstName = "John";
const lastName = "Doe";
console.log(`Hello ${firstName} ${lastName}!`);

//! 2. Greet based on gender
const gender = "male";
let greeting;

if (gender === "male") {
  greeting = `Hello Sir!`;
} else {
  greeting = `Hello Madam!`;
}
console.log(greeting);

//! 3. Count from 0 to 1000
for (let i = 0; i <= 1000; i++) {
  console.log(i);
}
