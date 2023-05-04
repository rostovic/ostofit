import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import classes from "./SubscribeButton.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

const SubscribeButton = ({ isSubscribed = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "black",
        color: "white",
        fontSize: "10px",
        boxShadow: "none",
        borderRadius: "20px",
        ":hover": {
          backgroundColor: "red",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isSubscribed ? (
        <div className={classes.subscribedButtonStyle}>
          {isHovered ? <p>UNSUBSCRIBE?</p> : <p>SUBSCRIBED</p>}
          {isHovered ? (
            <ClearIcon sx={{ height: 14, width: 14 }} />
          ) : (
            <CheckIcon sx={{ height: 14, width: 14 }} />
          )}
        </div>
      ) : (
        <div className={classes.notSubcribedButtonStyle}>
          <p>SUBSCRIBE</p>
        </div>
      )}
    </Button>
  );
};
export default SubscribeButton;
