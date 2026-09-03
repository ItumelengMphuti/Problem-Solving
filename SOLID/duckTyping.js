class Dog {
    makeSound() { console.log("Woof") }
}

class Cat {
    makeSound() { console.log("Meow") }
}

class Car {
    makeSound() { console.log("Hoot Hoot") }
}

function makeSound(thing) { // the function does not ask instanceof 
    thing.makeSound()
}

const dog = new Dog();
const cat = new Cat();
const car = new Car();

makeSound(dog);
makeSound(cat);
makeSound(car);