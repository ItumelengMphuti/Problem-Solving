function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.describe = function () {
  return `${this.year} ${this.make} ${this.model}`;
};

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2022);

console.log(car1.describe()); // should print "2020 Toyota Corolla"
console.log(car2.describe()); // should print "2022 Honda Civic"
console.log(car1 instanceof Car); // should print true
