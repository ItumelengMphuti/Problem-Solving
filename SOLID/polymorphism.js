// // Without polymorphism
// class Dog {
//   bark() {
//     console.log("Woof");
//   }
// }

// class Cat {
//   meow() {
//     console.log("Meow");
//   }
// }

// class Cow {
//     moo() {
//         console.log("Moo")
//     }
// }

// function makeSound(animal) {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else if (animal instanceof Cat) {
//     animal.meow();
//   } 
// }

// const dog = new Dog();
// const cat = new Cat();

// makeSound(dog);
// makeSound(cat);

// With Polymorphism

class Animal {
    sound() {}
}

class Dog extends Animal {
    sound() {
        console.log("Woof")
    }
}

class Cat extends Animal {
    sound() {
        console.log("Meow ")
    }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());