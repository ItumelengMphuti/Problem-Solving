function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

function applyMultiplier(fn, value) {
  return fn(value);
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(applyMultiplier(double, 5)); // should print 10
console.log(applyMultiplier(triple, 4)); // should print 12
console.log(double(triple(2))); // should print 12

//Closure