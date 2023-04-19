export const userDetails = [
  {
    id: 1,
    firstName: "Emil",
    lastName: "Jerkovic",
    followers: [1, 2, 3, 4],
  },
  {
    id: 2,
    firstName: "Matko",
    lastName: "Crkva",
    followers: [1],
  },
  {
    id: 3,
    firstName: "Matteo",
    lastName: "Lukavac",
    followers: [4],
  },
  {
    id: 4,
    firstName: "Roberto",
    lastName: "Di Baggio",
    followers: [3],
  },
];

export const getUserDetailsById = (id) => {
  return userDetails.find((userObj) => userObj.id === id);
};
