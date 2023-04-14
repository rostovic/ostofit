import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import classes from "./VideoCard.module.css";

const VideoCard = () => {
  return (
    <div className={classes.videoCard}>
      <div></div>
      <div className={classes.videoFooter}>
        <div className={classes.footerContainer}>
          <div className={classes.footerLeft}>
            <p style={{ fontSize: 16 }}>Title</p>
            <div className={classes.footerUser}>
              <Avatar sx={{ height: 35, width: 35 }} />
              <p>UserName/RealName</p>
            </div>
          </div>
          <div className={classes.footerRight}>
            <Button variant="contained">💪</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
