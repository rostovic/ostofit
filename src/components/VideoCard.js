import { Avatar } from "@mui/material";
import classes from "./VideoCard.module.css";
import SubscribeButton from "./SubscribeButton";

const VideoCard = () => {
  return (
    <div className={classes.videoCard}>
      <div style={{ backgroundColor: "red", display: "flex", flex: 1 }}>
        <video className={classes.videoClip} muted loop autoPlay>
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={classes.videoFooter}>
        <div className={classes.footerContainer}>
          <div className={classes.footerLeft}>
            <p className={classes.videoTitle}>NEW DEADLIFT RECORD!</p>
            <div className={classes.footerUser}>
              <Avatar sx={{ height: 35, width: 35 }} />
              <p>snipcik12345678910</p>
            </div>
          </div>
          <div className={classes.footerRight}>
            <SubscribeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
