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
  const userDetails = getUserDetailsById(userId);
  const followerIds = userDetails.following.map((userId) => userId);
  const videosPerUser = followerIds.map((id) => {
    const { firstName, lastName, profilePicUrl } = getUserDetailsById(id);
    return {
      firstName,
      lastName,
      id,
      profilePicUrl,
      videos: userVideos.filter((user) => user.id === id)[0].videos,
    };
  });
  return videosPerUser;
};

export const getAllFollowers = (userId) => {
  const userDetails = getUserDetailsById(userId);
  const followerIds = userDetails.followers.map((userId) => userId);
  const allFollowers = followerIds.map((id) => {
    const { firstName, lastName, profilePicUrl } = getUserDetailsById(id);
    return {
      firstName,
      lastName,
      id,
      profilePicUrl,
    };
  });
  return allFollowers;
};

export const getAllFollowing = (userId) => {
  const userDetails = getUserDetailsById(userId);
  const followingIds = userDetails.following.map((userId) => userId);
  const allFollowing = followingIds.map((id) => {
    const { firstName, lastName, profilePicUrl } = getUserDetailsById(id);
    return {
      firstName,
      lastName,
      id,
      profilePicUrl,
    };
  });
  return allFollowing;
};

export const getNumberOfFollowers = (userId) => {
  const userDetails = getUserDetailsById(userId);
  const number = userDetails.followers.length;
  return number;
};

export const getNumberOfFollowing = (userId) => {
  const userDetails = getUserDetailsById(userId);
  const number = userDetails.following.length;
  return number;
};
