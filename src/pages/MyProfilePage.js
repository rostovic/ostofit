import classes from "./MyProfilePage.module.css";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import { Avatar } from "@mui/material";
import VideoCard from "../components/VideoCard";
import { getAllVideosForUser } from "../backend/userVideos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getUsername } from "../backend/users";

const MyProfilePage = () => {
  const authContext = useContext(AuthContext);
  const { firstName, lastName, id, profilePicUrl } = authContext.userData;
  const userVideos = getAllVideosForUser(id);
  const username = getUsername(id);

  return (
    <div>
      <div className={classes.mainDiv}>
        <Avatar src={profilePicUrl} sx={{ height: 150, width: 150 }} />
        <div className={classes.userDiv}>
          <p className={classes.nameText}>{username}</p>
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
        </div>
      </div>
      <div className={classes.contentDiv}>
        {userVideos.map((video) => (
          <div key={video.url} className={classes.videoCardDiv}>
            <VideoCard videoDetails={video} name={"kek"} isCompact={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfilePage;
