const myArray = ["A", "B", "C", "D", "E", "F"];

const newArray = myArray.slice(2, 5);
console.log(newArray);

myArray.reverse();
console.log(myArray);

myArray.reverse();
const newString = myArray.join();
console.log(newString);

const newArrayTwo = newString.split(",");
console.log(newArrayTwo);

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];
const concatArray = myArrayA.concat(myArrayB);
console.log(concatArray);

const spreadArray = [...myArrayA, ...myArrayB];
console.log(spreadArray);
const nestArray = [myArrayA, myArrayB];
console.log(nestArray);

// nested and multidimensional array

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];
console.log(equipDept);
console.log(clothesDept);

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

// this was a 2 dimensional array, a nested array

// now we create a multidimensional array

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);

console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
