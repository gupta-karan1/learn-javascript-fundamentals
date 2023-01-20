// Pop up an alert with a message which can only be read and cancelled
alert("Hello World");

// Pop up a confirmation alert box which asks for ok or cancel
confirm("Ok === True\nCancel === False ");
// returns true or false based on what the user clicks

// store the above input in a variable to be used further as a confirmation pop up
let myBoolean = confirm("Ok === True\nCancel === False ");

// Pop up with input field
let name = prompt("Please enter your name");

console.log(name ?? "You didn't enter a name");
// nullish coalescing operator will return the next statement if the user enters no input

if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log("You didn't enter a name");
}
