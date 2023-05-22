import classes from "./Comments.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { Avatar } from "@mui/material";

const Comments = ({ comment }) => {
  return (
    <div className={classes.singleComment}>
      <div className={classes.divAvatar}>
        <Avatar src={comment.profile_pic} />
      </div>
      <div className={classes.divUserComment}>
        <div className={classes.usernameDate}>
          <span className={classes.textUsername}>@{comment.username}</span>
          <span className={classes.textDate}>{comment.comment_date}</span>
        </div>

        <span className={classes.textForComment}>{comment.comment}</span>
        <span className={classes.textIcons}>
          <span>125k</span>
          <ThumbUpIcon
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: "green",
              },
            }}
          />
          <ThumbDownAltIcon
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: "red",
              },
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Comments;
