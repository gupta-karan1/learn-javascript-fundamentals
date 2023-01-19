// If statements and conditionals

// if (condition) {
//     // run some code
// } else {
//     // run some other code
// }

let customerIsBanned = false;
let soup = "chicken noodle soup";
let reply;
let crackers = false;

if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} and crackers`;
  //   reply = "Here's your order of " + soup;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
  //   reply = "Here's your order of " + soup;
} else {
  reply = `Sorry we're out of soup.`;
}

// console.log(reply);

let testScore = 65;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}

// console.log(grade);

let playerOne;
let computer;

if (playerOne === computer) {
  // tie game!
} else if (playerOne === "rock") {
  if (computer == "paper") {
    // computer wins
  } else {
    // playerOne wins
  }
} else if (playerOne === "paper") {
  if (computer == "scissors") {
    // computer wins
  } else {
    // playerOne wins
  }
} else {
  if (computer == "rock") {
    // computer wins
  } else {
    // playerOne wins
  }
}

switch (Math.floor(Math.random() * 3 + 1)) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;

  default:
    break;
}
