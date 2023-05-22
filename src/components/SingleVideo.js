import { useParams } from "react-router-dom";
import classes from "./SingleVideo.module.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { getCommentsData, getVideoData } from "../backend/helpers";
import VideoCard from "./VideoCard";
import { Avatar, TextField } from "@mui/material";
import Comments from "./Comments";

const SingleVideo = () => {
  const param = useParams();
  const { userData } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState(null);
  const [commentsData, setCommentsData] = useState(null);
  const [numCharLeft, setNumCharLeft] = useState(0);

  useEffect(() => {
    const getVideo = async (videoID, myID) => {
      const videoData = await getVideoData(videoID, myID);
      setVideoData(videoData);
    };

    const getComments = async (videoID, myID) => {
      const comments = await getCommentsData(videoID, myID);
      setCommentsData(comments);
    };

    const getData = async () => {
      await getVideo(param.videoID, userData.id);
      await getComments(param.videoID, userData.id);
      setIsLoading(false);
    };

    getData();
  }, [param.videoID]);

  if (isLoading) {
    return (
      <div className={classes.loaderSpinnerWrapper}>
        <div className={classes.loaderSpinner}></div>
      </div>
    );
  }

  if (videoData.length === 0) {
    return (
      <div className={classes.errorDiv}>
        <span>Error! Video could not be found!</span>
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
          isSubscribed={videoData.isSubscribed}
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
            <Avatar src={userData.profile_pic} />
          </div>
          <div className={classes.newComment}>
            <TextField
              placeholder={`Add a comment as ${userData.username}...`}
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
        {commentsData === "error" ? (
          <div className={classes.noCommentsYet}>
            <span>Be first to comment!</span>
          </div>
        ) : (
          commentsData.map((comment) => {
            return <Comments comment={comment} key={comment.username} />;
          })
        )}
      </div>
    </div>
  );
};

export default SingleVideo;
