// Write code that will return a random letter from your name

// 1. Store your name in a variable
const myName = "Karan";

// 2. create a random number variable between 0 and 4
let randomNum = Math.floor(Math.random() * myName.length);

console.log(myName[randomNum]);
console.log(myName[randomNum]);
console.log(myName[randomNum]);
console.log(myName[randomNum]);

// alternative way

console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
