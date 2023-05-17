import { useParams } from "react-router-dom";
import classes from "./Profile.module.css";
import { Avatar } from "@mui/material";
import VideoCard from "../components/VideoCard";
import SubscribeButton from "../components/SubscribeButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { getProfileData } from "../backend/helpers";

const Profile = () => {
  const { userData } = useContext(AuthContext);
  const param = useParams();
  const [profileData, setProfileData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProfileUserData = async (username) => {
      const profileUserData = await getProfileData(username, userData.id);
      setProfileData(profileUserData.userData);
      setIsLoading(false);
    };
    getProfileUserData(param.username);
  }, [param.username]);

  const isSubscribedToUser = profileData.isSubscribed === 1 ? true : false;

  if (isLoading) {
    return (
      <div className={classes.loaderSpinnerWrapper}>
        <div className={classes.loaderSpinner}></div>
      </div>
    );
  }

  if (profileData.length === 0) {
    return (
      <div className={classes.errorDiv}>
        <div className={classes.errorDivBorder}>
          <p>Error! User not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.mainDiv}>
        <Avatar
          src={profileData.profile_pic}
          sx={{ height: 150, width: 150 }}
        />
        <div className={classes.userDiv}>
          <p className={classes.nameText}>{profileData.username}</p>
          {profileData.isVerified === 1 ? (
            <div className={classes.tooltip}>
              <CheckCircleIcon
                sx={{
                  color: "blue",
                  position: "absolute",
                  right: "-30px",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
              />
              <span className={classes.tooltiptext}>Verified user!</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div style={{ marginTop: "10px" }}>
          <SubscribeButton isSubscribed={isSubscribedToUser} />
        </div>
      </div>
      <div className={classes.contentDiv}>
        {profileData.videos.map((video) => (
          <div key={video.url} className={classes.videoCardDiv}>
            <VideoCard videoDetails={video} isCompact={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
