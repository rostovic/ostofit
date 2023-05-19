import classes from "./MyProfilePage.module.css";
import { AuthContext } from "../context/auth-context";
import { useContext, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import VideoCard from "../components/VideoCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getMyProfileData } from "../backend/helpers";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const MyProfilePage = () => {
  const navigation = useNavigate();
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const authContext = useContext(AuthContext);
  const { profile_pic, username, isVerified } = authContext.userData;
  useEffect(() => {
    const getData = async (username) => {
      const data = await getMyProfileData(username);
      setVideoData(data.videos);
      setIsLoading(false);
    };
    getData(username);
  }, []);

  if (isLoading) {
    return (
      <div className={classes.loaderSpinnerWrapper}>
        <div className={classes.loaderSpinner}></div>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.mainDiv}>
        <div className={classes.avatarDiv}>
          <Avatar src={profile_pic} sx={{ height: 150, width: 150 }} />
          <EditIcon
            sx={{
              position: "absolute",
              marginTop: "25px",
              marginLeft: "160px",
              "&:hover": {
                height: "30px",
                width: "30px",
                transition: "all 0.35s ease",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              navigation(`/profile/edit`);
            }}
          />
        </div>
        <div className={classes.userDiv}>
          <p className={classes.nameText}>{username}</p>
          {isVerified === 1 ? (
            <div className={classes.tooltip}>
              <CheckCircleIcon
                sx={{
                  color: "blue",
                  position: "absolute",
                  right: "-30px",
                  marginTop: "5px",
                }}
              />
              <span className={classes.tooltiptext}>Verified user!</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={classes.contentDiv}>
        {videoData.map((video) => (
          <div key={video.url} className={classes.videoCardDiv}>
            <VideoCard videoDetails={video} isCompact={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfilePage;