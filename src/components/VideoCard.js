import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import classes from "./VideoCard.module.css";

const VideoCard = () => {
  return (
    <div className={classes.videoCard}>
      <div>
        <video className={classes.videoClip} loop autoPlay>
          <source
            src="http://techslides.com/demos/sample-videos/small.mp4"
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
            <Button variant="contained" className={classes.subscribeButton}>
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
