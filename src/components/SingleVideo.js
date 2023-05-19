import { useParams } from "react-router-dom";
import classes from "./SingleVideo.module.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { getVideoData } from "../backend/helpers";
import VideoCard from "./VideoCard";
import { Avatar } from "@mui/material";

const SingleVideo = () => {
  const param = useParams();
  const { userData, logout } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const getVideo = async (videoID, id) => {
      const videoData = await getVideoData(videoID, id);
      setVideoData(videoData);
      setIsLoading(false);
    };
    getVideo(param.videoID, userData.id);
  }, [param.videoID]);

  console.log(videoData);
  if (isLoading) {
    return (
      <div className={classes.loaderSpinnerWrapper}>
        <div className={classes.loaderSpinner}></div>
      </div>
    );
  }

  return (
    <div className={classes.mainDiv}>
      <div className={classes.content}>
        <VideoCard
          videoDetails={videoData}
          username={videoData.username}
          name={videoData.username}
          avatarUrl={videoData.profilePicUrl}
          isVerified={videoData.isVerified}
        />
      </div>
      <div className={classes.commentsDiv}>
        <div className={classes.singleComment}>
          <div className={classes.divAvatar}>
            <Avatar />
          </div>
          <div className={classes.divUserComment}>
            <div className={classes.usernameDate}>
              <span className={classes.textForComment}>Username</span>
              <span className={classes.textForComment}>Date</span>
            </div>

            <span className={classes.textForComment}>Comment</span>
            <span className={classes.textForComment}>Icons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
