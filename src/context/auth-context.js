import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    try {
      const userData = localStorage.getItem("userData");
      if (!userData) {
        return;
      }

      const userDataParsed = JSON.parse(userData);
      setUserData(userDataParsed);
      setIsLoggedIn(true);
    } catch (error) {
      logout();
    }
  }, []);
  // console.log(userData, isLoggedIn);
  const logout = () => {
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
  };

  const login = (userData) => {
    try {
      localStorage.setItem("userData", JSON.stringify(userData));
      setIsLoggedIn(true);
      setUserData(userData);
    } catch (error) {
      logout();
    }
  };

  const value = {
    isLoggedIn,
    userData,
    setIsLoggedIn,
    setUserData,
    logout,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
