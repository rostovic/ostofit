import { useNavigate } from "react-router-dom";
import classes from "./CommunityVideoCard.module.css";
const CommunityVideoCard = ({ videoDetails }) => {
  const navigation = useNavigate();

  return (
    <div
      className={classes.videoCard}
      onClick={() => {
        navigation(`/video/${videoDetails.videoID}`);
      }}
    >
      <video className={classes.videoClip} loop autoPlay muted>
        <source
          className={classes.videoClip}
          src={`http://localhost:5000/video?videoID=${videoDetails.videoID}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default CommunityVideoCard;
