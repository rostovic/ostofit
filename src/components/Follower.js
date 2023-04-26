import { Avatar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import classes from "./Follower.module.css";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Follower = ({ name, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        width: "500px",
      }}
    >
      <Avatar />
      <p id={id} style={{ flex: 1 }}>
        {name}
      </p>
      <div
        className={classes.followerDiv}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{isHovered ? "Remove follower!" : "Following you!"}</span>
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
