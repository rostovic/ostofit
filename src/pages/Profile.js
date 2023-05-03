import { useParams } from "react-router-dom";
import classes from "./Profile.module.css";
import { getUserDetailsByUsername } from "../backend/userDetails";
import { getAllVideosForUser } from "../backend/userVideos";
import { Avatar } from "@mui/material";
import VideoCard from "../components/VideoCard";
import { getUserImage } from "../backend/userImage";
import SubscribeButton from "../components/SubscribeButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Profile = () => {
  const param = useParams();
  const userDetails = getUserDetailsByUsername(param.username);
  if (!userDetails) {
    return;
  }
  const { firstName, lastName, id: idUser } = userDetails;
  const userVideos = getAllVideosForUser(+idUser);
  const userImageUrl = getUserImage(+idUser);

  return (
    <div>
      <div className={classes.mainDiv}>
        <Avatar src={userImageUrl} sx={{ height: 150, width: 150 }} />
        <div className={classes.userDiv}>
          <p className={classes.nameText}>{firstName + " " + lastName}</p>
          <CheckCircleIcon
            sx={{ color: "blue", position: "absolute", right: "-30px" }}
          />
        </div>

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
