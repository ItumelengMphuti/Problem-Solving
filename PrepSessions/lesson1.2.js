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
      obj.push({number: i, label: "Other"})
    }
  }
  return obj;
}
console.log(numberAnalyzer(6));
