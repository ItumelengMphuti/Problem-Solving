function getAge(birthDate, nowDate) {
  let age = 0;
  let date1 = new Date(birthDate),
    day1 = date1.getDate(),
    year1 = date1.getFullYear(),
    month1 = date1.getMonth() + 1;
  let date2 = new Date(nowDate),
    day2 = date2.getDate(),
    year2 = date2.getFullYear(),
    month2 = date2.getMonth() + 1;

  age = year2 - year1;

  if (month2 < month1) {
    age -= 1;
  } else if (month2 === month1 && day2 < day1) {
    age -= 1;
  }

  return age;
}
