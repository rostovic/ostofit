import { Avatar } from "@mui/material";
import classes from "./VideoCard.module.css";
import SubscribeButton from "./SubscribeButton";
import { useState, useEffect, useRef } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";

const VideoCard = ({
  videoDetails,
  name,
  id,
  observerRef,
  avatarUrl,
  isCompact = false,
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
      <div style={{ display: "flex", flex: 1, position: "relative" }}>
        <video
          className={classes.videoClip}
          loop
          onClick={handlePlayVideo}
          ref={videoRef}
          muted
        >
          <source src={videoDetails.url} type="video/mp4" />
        </video>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
          className={
            playVideo
              ? `${classes.playVideoClass}`
              : `${classes.pauseVideoClass}`
          }
        >
          <PlayArrowIcon
            sx={{
              color: "white",
              height: isCompact ? "25px" : "100px",
              width: isCompact ? "25px" : "100px",
              backgroundColor: "transparent",
              backdropFilter: "blur(10px)",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
        </div>
      </div>
      <div className={classes.videoFooter}>
        <div className={classes.footerContainer}>
          <div className={classes.footerLeft}>
            <p
              className={
                isCompact ? classes.compactVideoTitle : classes.videoTitle
              }
            >
              {videoDetails.title}
            </p>
            {isCompact ? null : (
              <div className={classes.footerUser}>
                <Avatar
                  src={avatarUrl}
                  sx={{ height: 35, width: 35, cursor: "pointer" }}
                />
                <p
                  onClick={() => {
                    navigation(`/profile/${id}`);
                  }}
                >
                  {name}
                </p>
              </div>
            )}
          </div>
          <div className={classes.footerRight}>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <RestartAltIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "red",
                  },
                }}
                onClick={handleRestart}
              />
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
              )}{" "}
            </div>
            {isCompact ? null : <SubscribeButton />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
