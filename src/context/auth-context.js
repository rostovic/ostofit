import React, { useState } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  userData: {
    id: null,
    firstName: "",
    lastName: "",
  },
  setIsLoggedIn: (isLoggedIn) => {},
  setUserData: (userData) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  }

  const value = {
    isLoggedIn,
    userData,
    setIsLoggedIn,
    setUserData,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
