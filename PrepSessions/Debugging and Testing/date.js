// the program takes a date and a number an dcombines them
// into a custom string

function formatAsCustomString(date, number) {
  return padLeft(number, 5) + "-" + formatDate(date);
}

function padLeft(str, max) {
  str = str.toString();

  return str.length < max ? padLeft("0" + str, max) : str;
}

function formatDate(date) {
  let d = new Date(date),
    day = "" + d.getDate(),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear().toString().slice(2, 4);

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("");
}

console.log(formatAsCustomString("2025-08-29", 4));
console.log(formatAsCustomString("2025-08-29", 123456));
// 00001-250929
console.log()
