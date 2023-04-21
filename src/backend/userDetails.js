export const userDetails = [
  {
    id: 1,
    firstName: "Emil",
    lastName: "Jerkovic",
    following: [2, 3, 4],
    followers: [2, 3, 4],
  },
  {
    id: 2,
    firstName: "Matko",
    lastName: "Crkva",
    following: [1],
    followers: [],
  },
  {
    id: 3,
    firstName: "Matteo",
    lastName: "Lukavac",
    following: [4],
    followers: [],
  },
  {
    id: 4,
    firstName: "Roberto",
    lastName: "Di Baggio",
    following: [3],
    followers: [],
  },
];

export const getUserDetailsById = (id) => {
  return userDetails.find((userObj) => userObj.id === id);
};
