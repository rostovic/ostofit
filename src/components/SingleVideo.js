import { useParams } from "react-router-dom";
import classes from "./SingleVideo.module.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { getVideoData } from "../backend/helpers";
import VideoCard from "./VideoCard";
import { Avatar, TextField } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const SingleVideo = () => {
  const param = useParams();
  const { userData, logout } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState(null);
  const [numCharLeft, setNumCharLeft] = useState(0);

  useEffect(() => {
    const getVideo = async (videoID, id) => {
      const videoData = await getVideoData(videoID, id);
      setVideoData(videoData);
      setIsLoading(false);
    };
    getVideo(param.videoID, userData.id);
  }, [param.videoID]);

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
      <div className={classes.writeComment}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={classes.newAvatarComment}>
            <Avatar />
          </div>
          <div className={classes.newComment}>
            <TextField
              placeholder="Add a comment as snipcik..."
              multiline
              rows={2}
              sx={{ width: "100%", height: "100%", borderRadius: "25px" }}
              inputProps={{ maxLength: 500 }}
              onChange={(e) => setNumCharLeft(e.target.value.length)}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            marginLeft: "75px",
            marginTop: "4px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: "2px",
              width: "90%",
            }}
          >
            <span>{500 - numCharLeft} characters left</span>
            <div className={classes.submitComment}>
              <button className={classes.buttonSubmitComment}>
                Post comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.commentsDiv}>
        <div className={classes.singleComment}>
          <div className={classes.divAvatar}>
            <Avatar />
          </div>
          <div className={classes.divUserComment}>
            <div className={classes.usernameDate}>
              <span className={classes.textUsername}>@snipcik</span>
              <span className={classes.textDate}>3 days ago</span>
            </div>

            <span className={classes.textForComment}>
              I think this music video is very good. I listen to it everyday. It
              is very exciting and refreshing. I hope you feel the same :D!
              Ithink this music video is very good. I listen to it everyday. It
              is very exciting and refreshing. I hope you feel the same :D! I
              think this music video is very good. I listen to it everyday. It
              is very exciting and refreshing. I hope you feel the same :D! I
              think this music video is very good. I listen to it everyday. It
              is very exciting and refreshing. I hope you it.
            </span>
            <span className={classes.textIcons}>
              <span>125k</span>
              <ThumbUpIcon
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: "green",
                  },
                }}
              />
              <ThumbDownAltIcon
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: "red",
                  },
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
