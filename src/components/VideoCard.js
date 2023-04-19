import { Avatar } from "@mui/material";
import classes from "./VideoCard.module.css";
import SubscribeButton from "./SubscribeButton";

const VideoCard = ({ videoDetails, name }) => {
  return (
    <div className={classes.videoCard}>
      <div style={{ display: "flex", flex: 1 }}>
        <video className={classes.videoClip} muted loop autoPlay>
          <source src={videoDetails.url} type="video/mp4" />
        </video>
      </div>
      <div className={classes.videoFooter}>
        <div className={classes.footerContainer}>
          <div className={classes.footerLeft}>
            <p className={classes.videoTitle}>{videoDetails.title}</p>
            <div className={classes.footerUser}>
              <Avatar sx={{ height: 35, width: 35 }} />
              <p>{name}</p>
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
