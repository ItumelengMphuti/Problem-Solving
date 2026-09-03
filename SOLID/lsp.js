// class Bird {
//   fly() {}
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error("Penguins can't fly");
//   }
// }

// const bird = new Bird();

// bird.fly(); 
// console.log("Bird is flying");

// const penguin = new Penguin();

// penguin.fly();

// lsp
class Bird {
  eat() {
    console.log("Eating...");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying...");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Swimming...");
  }
}
function makeBirdEat(bird) { // every child can replace parent
    bird.eat();
}

const bird = new Bird();
const flyingBird = new FlyingBird();
const penguin = new Penguin();

makeBirdEat(bird);        // OK
makeBirdEat(flyingBird);  // OK
makeBirdEat(penguin);     // OK
