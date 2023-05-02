import classes from "./MyProfilePage.module.css";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import { Avatar } from "@mui/material";
import VideoCard from "../components/VideoCard";
import { getAllVideosForUser } from "../backend/userVideos";

const MyProfilePage = () => {
  const authContext = useContext(AuthContext);
  const { firstName, lastName, id, profilePicUrl } = authContext.userData;
  const userVideos = getAllVideosForUser(id);

  return (
    <div>
      <div className={classes.mainDiv}>
        <Avatar src={profilePicUrl} sx={{ height: 150, width: 150 }} />
        <p className={classes.nameText}>{firstName + " " + lastName}</p>
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
