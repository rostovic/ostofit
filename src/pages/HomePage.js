import classes from "./Homepage.module.css";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";

const Homepage = () => {
const {userData, logout} = useContext(AuthContext)
const {firstName, lastName} = userData

  return (
    <div>
      <p>{`Hello ${firstName} ${lastName}`}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Homepage;
