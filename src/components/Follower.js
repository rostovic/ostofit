import { Avatar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import classes from "./Follower.module.css";

const Follower = ({ name, id }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Avatar />
      <p id={id} style={{ flex: 1 }}>
        {name}
      </p>
      <div className={classes.followerDiv}>
        <p>Following you!</p>
        <CheckIcon
          sx={{
            color: "white",
          }}
        />
      </div>
    </div>
  );
};

export default Follower;
