const userDetails = [
  {
    id: 1,
    firstName: "Emil",
    lastName: "Jerkovic",
  },
];

export const getUserById = (id) => {
  return userDetails.find((userObj) => userObj.id === id);
};
