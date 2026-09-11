// Write a function getFullName that takes a person object and returns their full name as a string.
// Use destructuring inside the function. The object will always have firstName, lastName and optionally a title.

// getFullName({ firstName: "Sipho", lastName: "Mathebula" });
// // "Sipho Mathebula"

// getFullName({ title: "Dr", firstName: "Palesa", lastName: "Matsane" });
// // "Dr Palesa Matsane"
function getFullName({ firstName, lastName, title = "" }) {
  return `${title ? title + " " : ""}${firstName} ${lastName}`;
}

console.log(getFullName({ firstName: "Sipho", lastName: "Mathebula" }));
// // "Sipho Mathebula"

console.log(getFullName({ title: "Dr", firstName: "Palesa", lastName: "Matsane" }));
// // "Dr Palesa Matsane"