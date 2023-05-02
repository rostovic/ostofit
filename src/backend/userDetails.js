export const userDetails = [
  {
    id: 1,
    firstName: "Emil",
    lastName: "Jerkovic",
    profilePicUrl:
      "https://media.licdn.com/dms/image/C4E03AQFb-oRoV6yocQ/profile-displayphoto-shrink_800_800/0/1628493839539?e=1688601600&v=beta&t=8o6pVA-7TQa3L29hBgOllfQoond7PcnFlGDqGlFdEoA",
    followers: [2, 3, 4],
    following: [2, 3, 4],
    username: "emilje",
  },
  {
    id: 2,
    firstName: "Matko",
    lastName: "Crkva",
    profilePicUrl: null,
    followers: [1],
    following: [1],
    username: "sgodmatko",
  },
  {
    id: 3,
    firstName: "Matteo",
    lastName: "Lukavac",
    profilePicUrl: null,
    followers: [4],
    following: [4],
    username: "matteol",
  },
  {
    id: 4,
    firstName: "Roberto",
    lastName: "Di Baggio",
    profilePicUrl:
      "https://media.licdn.com/dms/image/C4D03AQG49xwlRDBHKg/profile-displayphoto-shrink_800_800/0/1660820217146?e=1688601600&v=beta&t=xaQhkXi9hML6PNO0Xuhg4O7DpMSrEmFIG9rE1aTl46A",
    followers: [3],
    following: [3],
    username: "snipcik",
  },
];

export const getUserDetailsById = (id) => {
  return userDetails.find((userObj) => userObj.id === id);
};

export const isSubscribed = (idUser, idSub) => {
  const user = userDetails.find((userObj) => userObj.id === idUser);
  const isSubscribed = user.following.includes(idSub);
  return isSubscribed;
};

export const getAllUsersThatStartWith = (username) => {
  const users = userDetails.filter((userObj) =>
    userObj.username.startsWith(username)
  );
  return users;
};
