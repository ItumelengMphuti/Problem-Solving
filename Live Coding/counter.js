// Write a function makeCounter that returns a new function. 
// Every time the returned function is called it should return the next number starting from 1.
// Each counter created by makeCounter should be independent.

// Closure
function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3


const counter2 = makeCounter();
console.log(counter2()); // 1