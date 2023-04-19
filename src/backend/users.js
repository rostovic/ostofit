import { getUserDetailsById } from "./userDetails";
import { userVideos } from "./userVideos";

const users = [
  {
    username: "lelmil",
    password: "123",
    id: 1,
  },
  {
    username: "matko",
    password: "123",
    id: 2,
  },
  {
    username: "megab",
    password: "123",
    id: 3,
  },
  {
    username: "snipcik",
    password: "123",
    id: 4,
  },
];

export const login = (username, password) => {
  const user = users.find(
    (userObj) => userObj.username === username && userObj.password === password
  );
  if (!user) {
    return {
      status: "success",
      data: {
        isValidCredentials: false,
      },
    };
  }

  const userDetails = getUserDetailsById(user.id);

  return {
    status: "success",
    data: {
      isValidCredentials: true,
      userDetails: { ...userDetails, username: user.username },
      redirect: "/home",
    },
  };
};

export const getFollowerVideos = (userId) => {
  //filtrirati ko followa
  const userDetails = getUserDetailsById(userId);
  const followerIds = userDetails.followers.map((userId) => userId);
  const videosPerUser = followerIds.map((id) => {
    const { firstName, lastName } = getUserDetailsById(id);
    return {
      firstName,
      lastName,
      id,
      videos: userVideos.filter((user) => user.id === id)[0].videos,
    };
  });
  return videosPerUser;
};
