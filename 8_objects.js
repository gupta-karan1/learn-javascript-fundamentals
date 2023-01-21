const firstObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "coffee",
    night: "Tea",
    afternoon: "iced tea",
  },
  action: function () {
    return `time for ${this.beverage.morning}`;
  },
};

console.log(firstObj.alive);
console.log(firstObj["answer"]);
console.log(firstObj.hobbies[2]);
console.log(firstObj.beverage.night);
console.log(firstObj.action());
