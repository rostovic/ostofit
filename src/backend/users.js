import { getUserById } from "./userDetails";

const users = [
  {
    username: "lelmil",
    password: "123",
    id: 1,
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

  const userDetails = getUserById(user.id);

  return {
    status: "success",
    data: {
      isValidCredentials: true,
      userDetails: { ...userDetails, username: user.username },
      redirect: "/dashboard",
    },
  };
};
