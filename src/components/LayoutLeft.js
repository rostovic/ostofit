import { Avatar } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import classes from "./LayoutLeft.module.css";
import {
  getNumberOfFollowers,
  getNumberOfFollowing,
  getNumberOfRequests,
} from "../backend/users";

const LayoutLeft = () => {
  const navigation = useNavigate();
  const authContext = useContext(AuthContext);
  const { firstName, lastName, id, profilePicUrl } = authContext.userData;
  const followers = getNumberOfFollowers(id);
  const following = getNumberOfFollowing(id);
  const requests = getNumberOfRequests(id);

  return (
    <div className={classes.mainLayout}>
      <div className={classes.contentDiv}>
        <div
          className={classes.userDiv}
          onClick={() => {
            navigation(`profile`);
          }}
        >
          <Avatar src={profilePicUrl} sx={{ height: 35, width: 35 }} />
          <p style={{ fontWeight: 500 }}>{firstName + " " + lastName}</p>
        </div>
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div className={classes.followersDiv}>
            <p
              className={classes.followerNumber}
              onClick={() => {
                navigation("requests");
              }}
            >
              {requests}
            </p>
            <p className={classes.followerText}>requests</p>
          </div>
          <div className={classes.followersDiv}>
            <p
              className={classes.followerNumber}
              onClick={() => {
                navigation("followers");
              }}
            >
              {followers}
            </p>
            <p className={classes.followerText}>followers</p>
          </div>
          <div className={classes.followersDiv}>
            <p
              className={classes.followerNumber}
              onClick={() => {
                navigation("following");
              }}
            >
              {following}
            </p>
            <p className={classes.followerText}>following</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LayoutLeft;
