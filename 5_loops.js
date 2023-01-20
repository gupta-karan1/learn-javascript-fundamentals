// while loop
let myNumber = 50;
while (myNumber < 50) {
  myNumber += 2;
  console.log(myNumber);
}
// don't create an endless loop

// do while loop
do {
  myNumber++;
  console.log(myNumber);
} while (myNumber < 50);

for (let i = 0; i <= 10; i++) {
  console.log(i);
  i++;
  console.log(i);
}

let myName = "Karan";
for (let i = 0; i < myName.length; i++) {
  console.log(myName.charAt(i));
}

let counter = 0;
let myLetter;
// while (true) {
//   myLetter = myName[counter];
//   console.log(myLetter);
//   if (myLetter === "r") break;
//   counter++;
// }

while (counter <= 3) {
  myLetter = myName[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "r") break;
  counter++;
}
console.log(counter);
