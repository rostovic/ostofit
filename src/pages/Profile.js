import { useParams } from "react-router-dom";
import classes from "./Profile.module.css";
import { getUserDetailsById, isSubscribed } from "../backend/userDetails";
import { getAllVideosForUser } from "../backend/userVideos";
import { Avatar } from "@mui/material";
import VideoCard from "../components/VideoCard";
import { getUserImage } from "../backend/userImage";
import SubscribeButton from "../components/SubscribeButton";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const Profile = () => {
  const param = useParams();
  const { firstName, lastName } = getUserDetailsById(+param.id);
  const userVideos = getAllVideosForUser(+param.id);
  const userImageUrl = getUserImage(+param.id);
  const authContext = useContext(AuthContext);
  const { id } = authContext.userData;

  return (
    <div>
      <div className={classes.mainDiv}>
        <Avatar src={userImageUrl} sx={{ height: 150, width: 150 }} />
        <p className={classes.nameText}>{firstName + " " + lastName}</p>
        <div style={{ marginTop: "10px" }}>
          <SubscribeButton />
        </div>
      </div>
      <div className={classes.contentDiv}>
        {userVideos.map((video) => (
          <div key={video.url} className={classes.videoCardDiv}>
            <VideoCard videoDetails={video} isCompact={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
