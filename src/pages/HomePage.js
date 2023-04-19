import classes from "./HomePage.module.css";
import { AuthContext } from "../context/auth-context";
import { useContext, useEffect, useRef, useState } from "react";
import VideoCard from "../components/VideoCard";
import { TextField } from "@mui/material";
import { getFollowerVideos } from "../backend/users";

const Homepage = () => {
  const [observer, setObserver] = useState(null);
  const { userData, logout } = useContext(AuthContext);
  const { firstName, lastName } = userData;
  const followerVideos = getFollowerVideos(userData.id);
  const videoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    setObserver(observer);
  }, []);

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
        ref={videoRef}
      >
        {followerVideos.map((user) => (
          <VideoCard
            videoDetails={user.videos[0]}
            key={user.videos[0].url}
            name={user.firstName + " " + user.lastName}
            observer={observer}
          />
        ))}
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Homepage;
