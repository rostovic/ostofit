import { Avatar } from "@mui/material";
import classes from "./VideoCard.module.css";
import SubscribeButton from "./SubscribeButton";
import { useState, useEffect, useRef } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const VideoCard = ({ videoDetails, name, observerRef }) => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const [muted, setMuted] = useState(true);
  const handlePlayVideo = () => {
    videoRef.current.muted = !muted;
    setPlayVideo((current) => !current);
    setMuted((current) => !current);
  };
  const handleMuteUnmute = () => {
    videoRef.current.muted = !muted;
    setMuted((current) => !current);
  };

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
    if (!observerRef.current) {
      return;
    }
    observerRef.current.observe(videoRef.current);
  }, [observerRef.current]);

  return (
    <div className={classes.videoCard}>
      <div style={{ display: "flex", flex: 1 }}>
        <video
          className={classes.videoClip}
          loop
          onClick={handlePlayVideo}
          ref={videoRef}
          muted
        >
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
            <SubscribeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
