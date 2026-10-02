function getPassingStudents(students) {
  return students
    .filter((student) => student.score >= 50)
    .map((student) => student.name.toUpperCase());
}

const students = [
  { name: "sipho", score: 72 },
  { name: "palesa", score: 45 },
  { name: "zane", score: 50 },
  { name: "michaela", score: 88 },
];

console.log(getPassingStudents(students));
// should print ["SIPHO", "ZANE", "MICHAELA"]
