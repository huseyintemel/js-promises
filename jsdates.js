let date = new Date;

console.log(date);  // returns date and date format

console.log(date.getTime()); // returns date as miliseconds

console.log(date.getFullYear()); // returns 2021

console.log(date.getMonth()); // returns 2

console.log(date.getDate()); // returns 29

console.log(date.getTimezoneOffset()); // returns -180 

let date1 = new Date("August 19, 2015 23:15:30");
date1.setFullYear("2016");
console.log(date1.getFullYear()); // returns 2016

date1.setHours("16");
console.log(date1); // Fri Aug 19 2016 16:15:30 GMT+0300 (GMT+03:00)

date1.setDate(21);
console.log(date1.getDate()); // returns 21 