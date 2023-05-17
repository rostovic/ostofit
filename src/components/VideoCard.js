import { Avatar } from "@mui/material";
import classes from "./VideoCard.module.css";
import SubscribeButton from "./SubscribeButton";
import { useState, useEffect, useRef } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CommentIcon from "@mui/icons-material/Comment";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const VideoCard = ({
  videoDetails,
  name,
  id,
  observerRef,
  avatarUrl,
  username,
  isVerified,
  isCompact = false,
  isSubscribed = false,
}) => {
  const navigation = useNavigate();
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const [muted, setMuted] = useState(true);

  const handlePlayVideo = () => {
    if (!videoRef.current.paused) {
      videoRef.current.muted = true;
      setPlayVideo(false);
      setMuted(true);
      return;
    }

    videoRef.current.muted = false;
    setPlayVideo(true);
    setMuted(false);
  };

  const handleMuteUnmute = () => {
    videoRef.current.muted = !muted;
    setMuted((current) => !current);
  };

  const handleRestart = () => {
    videoRef.current.currentTime = 0;
  };

  useEffect(() => {
    const handlePlayEvent = () => {
      setPlayVideo(true);
    };

    const handlePauseEvent = () => {
      setPlayVideo(false);
    };

    videoRef.current?.addEventListener("play", handlePlayEvent);
    videoRef.current?.addEventListener("pause", handlePauseEvent);

    return () => {
      videoRef.current?.removeEventListener("play", handlePlayEvent);
      videoRef.current?.removeEventListener("pause", handlePauseEvent);
    };
  }, [videoRef.current]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    if (playVideo) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playVideo]);

  useEffect(() => {
    if (!observerRef?.current) {
      return;
    }
    observerRef.current.observe(videoRef.current);
  }, [observerRef?.current]);

  return (
    <div className={classes.videoCard}>
      <div className={classes.videoDiv}>
        <video
          className={classes.videoClip}
          loop
          onClick={handlePlayVideo}
          ref={videoRef}
          muted
        >
          <source src={videoDetails.url} type="video/mp4" />
        </video>

        <div className={classes.iconsDiv}>
          <div className={classes.singleIconDiv}>
            <StarBorderIcon
              sx={{
                "&:hover": {
                  color: "red",
                },
              }}
            />
            <span>589</span>
          </div>
          <div className={classes.singleIconDiv}>
            <CommentIcon
              sx={{
                "&:hover": {
                  color: "red",
                },
              }}
            />
            <span>589</span>
          </div>
          {muted ? (
            <VolumeOffIcon
              sx={{
                cursor: "pointer",
                alignSelf: "flex-end",

                "&:hover": {
                  color: "red",
                },
              }}
              onClick={handleMuteUnmute}
            />
          ) : (
            <VolumeUpIcon
              sx={{
                cursor: "pointer",
                alignSelf: "flex-end",
                "&:hover": {
                  color: "red",
                },
              }}
              onClick={handleMuteUnmute}
            />
          )}

          <RestartAltIcon
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "red",
              },
            }}
            onClick={handleRestart}
          />
        </div>

        <div
          className={
            playVideo
              ? `${classes.playVideoClass} ${classes.videoPlayIconDiv}`
              : `${classes.pauseVideoClass} ${classes.videoPlayIconDiv}`
          }
        >
          <PlayArrowIcon
            sx={{
              color: "white",
              height: isCompact ? "45px" : "90px",
              width: isCompact ? "45px" : "90px",
              backgroundColor: "transparent",
              backdropFilter: "blur(10px)",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
        </div>
      </div>
      <div className={classes.videoFooter}>
        <span
          className={isCompact ? classes.compactVideoTitle : classes.videoTitle}
        >
          {videoDetails.title}
        </span>
        <div className={classes.footerContainer}>
          <div className={classes.footerLeft}>
            {isCompact ? null : (
              <div className={classes.footerUser}>
                <Avatar
                  src={avatarUrl}
                  sx={{ height: 35, width: 35, cursor: "pointer" }}
                  onClick={() => {
                    navigation(`/profile/${username}`);
                  }}
                />
                <p
                  onClick={() => {
                    navigation(`/profile/${username}`);
                  }}
                >
                  {username}
                </p>
                {isVerified === 1 ? (
                  <CheckCircleIcon
                    sx={{
                      color: "blue",
                      height: "15px",
                      width: "15px",
                      marginTop: "2px",
                      backgroundColor: "transparent",
                      borderRadius: "25px",
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
          <div className={classes.footerRight}>
            {isCompact ? null : <SubscribeButton isSubscribed={isSubscribed} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
