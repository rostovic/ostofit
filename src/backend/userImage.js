export const userImages = [
  {
    id: 1,
    profilePicUrl:
      "https://media.licdn.com/dms/image/C4E03AQFb-oRoV6yocQ/profile-displayphoto-shrink_800_800/0/1628493839539?e=1688601600&v=beta&t=8o6pVA-7TQa3L29hBgOllfQoond7PcnFlGDqGlFdEoA",
  },
  {
    id: 2,
    profilePicUrl: null,
  },
  {
    id: 3,
    profilePicUrl: null,
  },
  {
    id: 4,
    profilePicUrl:
      "https://media.licdn.com/dms/image/C4D03AQG49xwlRDBHKg/profile-displayphoto-shrink_800_800/0/1660820217146?e=1688601600&v=beta&t=xaQhkXi9hML6PNO0Xuhg4O7DpMSrEmFIG9rE1aTl46A",
  },
];

export const getUserImage = (id) => {
  const user = userImages.find((user) => user.id === id);
  return user.profilePicUrl;
};
