/* 
Complex Primitives
! 1. Arrays
! 2. Objects

Let’s write some code -
* 1. Write a program prints all the even numbers in an array
* 2. Write a program to print the biggest number in an arrya
* 3. Write a program that prints all the male people’s first name given a complex object
* 4. Write a program that reverses all the elements of an array 
*/

//! 1. Print all even numbers in an array

const allNumbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = [];

for (let i = 0; i < allNumbers.length; i++) {
  if (allNumbers[i] % 2 === 0) {
    evenNumbers.push(allNumbers[i]);
  }
}

console.log(evenNumbers);

//! 2. Print the biggest number in an array

const numbers = [5, 2, 8, 3, 10];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);

//! 3. Print all male first names

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    gender: "male",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    gender: "female",
  },
  {
    firstName: "Jack",
    lastName: "Black",
    gender: "male",
  },
];

let maleFirstNames = [];

for (let i = 0; i < people.length; i++) {
  if (people[i].gender === "male") {
    maleFirstNames.push(people[i].firstName);
  }
}

console.log(maleFirstNames);

//! 4. Reverse all elements in array

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  for (let j = arr.length - 1; j > i; j--) {
    let temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;
  }
}

console.log(arr);
