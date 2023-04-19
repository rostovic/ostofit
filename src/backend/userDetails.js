export const userDetails = [
  {
    id: 1,
    firstName: "Emil",
    lastName: "Jerkovic",
    followers: [2, 3, 4],
  },
  {
    id: 2,
    firstName: "Matko",
    lastName: "Crkva",
    followers: [],
  },
  {
    id: 3,
    firstName: "Matteo",
    lastName: "Lukavac",
    followers: [],
  },
  {
    id: 4,
    firstName: "Roberto",
    lastName: "Di Baggio",
    followers: [],
  },
];

export const getUserDetailsById = (id) => {
  return userDetails.find((userObj) => userObj.id === id);
};
