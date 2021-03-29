let string = "Hello World!";

//charAt
console.log(string.charAt(0)); // H

//charCodeAt
console.log(string.charCodeAt(0)); // returns 72 , ascii code of H

//startsWith
console.log(string.startsWith('h'));  // returns false
console.log(string.startsWith('l',3)); // returns true 3. position start with l
console.log(string.startsWith("Hello")); // returns true

//endsWith
console.log(string.endsWith('!')); // returns true
console.log(string.endsWith('d!')); // returns true

//includes
console.log(string.includes("hello")); // returns false
console.log(string.includes('or')); // returns true

//concat
let str = "Javascript";
console.log(string.concat(" ",str)); // returns Hello World! Javascript

//split
let words = string.split(" ");
console.log(words[0]); // returns Hello

let copyString = string.split(); //copied string to an array
console.log(copyString);

//slice
console.log(string.slice(0,5)); // returns Hello
console.log(string.slice(-6));  // returns World!
console.log(string.slice(2));   // returns llo World!

//substring
console.log(string.substring(0,4)); // returns Hell
console.log(string.substring(3));  // returns lo World!

//match
const regex = /[A-Z]/g;
let found = string.match(regex);
console.log(found); // returns H and W

//replace
console.log(string.replace("Hello","helllloooo")); // returns helllloooo World!

//toUpperCase
console.log(string.toUpperCase()); // returns HELLO WORLD!

//toLowerCase
console.log(string.toLowerCase()); // returns hello world;

//repeat
console.log(string.repeat(7)); // returns 7 times string

//trim 
let str1 = "    js functions    ";
console.log(str1.trim()); // returns string without spaces

//length
console.log(str1.length); // returns 20
console.log(str1.trim().length); // returns 12