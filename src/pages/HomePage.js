import classes from "./HomePage.module.css";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import VideoCard from "../components/VideoCard";
import { TextField } from "@mui/material";
import { getFollowerVideos } from "../backend/users";

const Homepage = () => {
  const { userData, logout } = useContext(AuthContext);
  const { firstName, lastName } = userData;
  const followerVideos = getFollowerVideos(userData.id);

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
        }}
      >
        <TextField variant="filled" label="Search..." size="small" />
      </div>
      <div
        style={{
          width: "400px",
          gap: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {followerVideos.map((user) => (
          <VideoCard
            videoDetails={user.videos[0]}
            key={user.videos[0].url}
            name={user.firstName + " " + user.lastName}
          />
        ))}
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Homepage;
