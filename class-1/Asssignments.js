/*  
  For today 
* 1. Create a counter in Javascript (counts down from 30 to 0)
* 2. Calculate the time it takes between a setTimeout call and the inner function actually running
* 3. Create a terminal clock (HH:MM:SS)
 */

//! 1. Counter from 30 to 0
let counter = 30;
const interval = setInterval(() => {
  console.log(counter);
  counter--;
  if (counter < 0) {
    clearInterval(interval);
  }
}, 1000);

//! 2. Calculate setTimeout delay
const t1 = Date.now();
setTimeout(() => {
  const t2 = Date.now();
  console.log(`Delay: ${t2 - t1}ms`);
}, 500);

//! 3. Terminal clock
let time;
setInterval(() => {
  const now = new Date();
  time = now.toLocaleTimeString();
  console.clear();
  console.log(time);
}, 1000);
