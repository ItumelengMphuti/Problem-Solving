const users = [
  { id: 1, name: "Michaela" },
  { id: 2, name: "Sipho" },
  { id: 3, name: "Zane" },
];

function getUserById(id) {
  return new Promise((resolve) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      resolve(user);
    } else {
      resolve("User not found");
    }
  });
}

async function getUpperCaseName(id) {
  const user = await getUserById(id);
  if (user === "User not found") return "User not found";
  return user.name.toUpperCase();
}


getUpperCaseName(1).then((result) => {
  console.log(result);
});

getUpperCaseName(99).then((result) => {
  console.log(result);
});