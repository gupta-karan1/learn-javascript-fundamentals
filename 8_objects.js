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

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrooooom!";
  },
};

console.log(vehicle);

const truck = Object.create(vehicle);
console.log(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
console.log(car);
car.doors = 4;
car.engine = function () {
  return "Whoosh!";
};
console.log(car.engine());
