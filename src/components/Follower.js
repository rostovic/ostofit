import { Avatar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import classes from "./Follower.module.css";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

const Follower = ({ name, id, action, avatarUrl }) => {
  const navigation = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const renderText = () => {
    if (action === "followers") {
      return <span>{isHovered ? "Remove follower!" : "Following you!"}</span>;
    }

    return <span>{isHovered ? "Stop following!" : "Following!"}</span>;
  };

  return (
    <div className={classes.singleFollower}>
      <Avatar
        src={avatarUrl}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          navigation(`/profile/${id}`);
        }}
      />
      <p
        id={id}
        onClick={() => {
          navigation(`/profile/${id}`);
        }}
      >
        {name}
      </p>
      <div
        className={classes.followerDiv}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {renderText()}
        {isHovered ? (
          <ClearIcon
            sx={{
              color: "white",
            }}
          />
        ) : (
          <CheckIcon
            sx={{
              color: "white",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Follower;
