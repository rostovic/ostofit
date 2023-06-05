export const userDetails = [
  {
    id: 1,
    firstName: "Emil",
    lastName: "Jerkovic",
    username: "emilje",
    profilePicUrl:
      "https://media.licdn.com/dms/image/C4E03AQFb-oRoV6yocQ/profile-displayphoto-shrink_800_800/0/1628493839539?e=1688601600&v=beta&t=8o6pVA-7TQa3L29hBgOllfQoond7PcnFlGDqGlFdEoA",
    followers: [2, 3, 4],
    following: [2, 3, 4],
    requests: [5],
  },
  {
    id: 2,
    firstName: "Matko",
    lastName: "Crkva",
    username: "godmatko",
    profilePicUrl: null,
    followers: [1],
    following: [1],
    requests: [],
  },
  {
    id: 3,
    firstName: "Matteo",
    lastName: "Lukavac",
    username: "matteol",
    profilePicUrl: null,
    followers: [4],
    following: [4],
    requests: [],
  },
  {
    id: 4,
    firstName: "Roberto",
    lastName: "Di Baggio",
    username: "snipcik",
    profilePicUrl:
      "https://media.licdn.com/dms/image/C4D03AQG49xwlRDBHKg/profile-displayphoto-shrink_800_800/0/1660820217146?e=1688601600&v=beta&t=xaQhkXi9hML6PNO0Xuhg4O7DpMSrEmFIG9rE1aTl46A",
    followers: [3, 1],
    following: [3, 1],
    requests: [],
  },
  {
    id: 5,
    firstName: "Danko",
    lastName: "Te Spanko",
    username: "MrBanana",
    profilePicUrl:
      "https://scontent-vie1-1.xx.fbcdn.net/v/t1.15752-9/41390543_1883943278581391_7366941941499428864_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=PomCRlmUTXYAX971H31&_nc_ht=scontent-vie1-1.xx&oh=03_AdRnZx10zdfsqccRCymMSzVzD15d3w8sLeGGJvz1PtMDiA&oe=647B65AD",
    followers: [4, 6],
    following: [4, 6],
    requests: [],
  },
  {
    id: 6,
    firstName: "Dino",
    lastName: "Perić",
    username: "dangerous999",
    profilePicUrl:
      "https://scontent.fzag1-2.fna.fbcdn.net/v/t1.18169-9/22450036_10209857687823604_1995083471894238086_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=egn7HK1x9VkAX9cFB0h&_nc_ht=scontent.fzag1-2.fna&oh=00_AfA3vcPVHStlh0bf83I-YoK7SA-vlmsFWYi3ov2Sx8jcvQ&oe=647C4D94",
    followers: [5],
    following: [5],
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

export const getAllUsersThatStartWith = (username, id) => {
  const users = userDetails.filter(
    (userObj) => userObj.username.startsWith(username) && userObj.id !== id
  );
  return users;
};

export const getUserDetailsByUsername = (username) => {
  return userDetails.find((userObj) => userObj.username === username);
};

export const getUserProfileImage = (id) => {
  const user = userDetails.find((user) => user.id === id);
  return user.profilePicUrl;
};
