function numberAnalyzer(num) {
  let obj = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      obj.push({ number: i, label: "EvenFizz" });
    } else if (i % 2 === 0) {
      obj.push({ number: i, label: "Even" });
    } else if (i % 3 === 0) {
      obj.push({ number: i, label: "Fizz" });
    } else {
      obj.push({ number: i, label: "Other" });
    }
  }
  return obj;
}

function getFizzNumbers(num) {
  const prevResult = numberAnalyzer(num);
  const matches = prevResult.filter(
    (items) => items.label === "EvenFizz" || items.label === "Fizz",
  );
  return matches.length;
}

console.log(numberAnalyzer(6));
console.log(getFizzNumbers(6));
