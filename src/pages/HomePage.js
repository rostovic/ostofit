import classes from "./HomePage.module.css";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import VideoCard from "../components/VideoCard";

const Homepage = () => {
  const { userData, logout } = useContext(AuthContext);
  const { firstName, lastName } = userData;

  return (
    <>
      <div>
        <p>{`Hello ${firstName} ${lastName}`}</p>
        <div className={classes.container}>
          <div style={{ width: "300px" }}>
            <VideoCard />
          </div>
        </div>
      </div>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Homepage;
