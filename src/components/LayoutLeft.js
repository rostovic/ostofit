import { Avatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import classes from "./LayoutLeft.module.css";
import { getAllDataNumbers } from "../backend/helpers";

const LayoutLeft = () => {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();
  const authContext = useContext(AuthContext);
  const { id, profile_pic, username, isVerified } = authContext.userData;

  useEffect(() => {
    const getNumbersForProfile = async (id) => {
      const numberData = await getAllDataNumbers(id);
      setData(numberData);
      setIsLoading(false);
    };
    getNumbersForProfile(id);
  }, []);

  const { followers, following, requests } = data || ["", "", ""];

  if (isLoading) {
    return (
      <div className={classes.loaderSpinnerWrapper}>
        <div className={classes.loaderSpinner}></div>
      </div>
    );
  }

  return (
    <div className={classes.mainLayout}>
      <div className={classes.contentDiv}>
        <div
          className={classes.userDiv}
          onClick={() => {
            navigation(`profile`);
          }}
        >
          <Avatar src={profile_pic} sx={{ height: 35, width: 35 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <p style={{ fontWeight: 500 }}>{username}</p>

            {isVerified === 1 ? (
              <div className={classes.tooltip}>
                <CheckCircleIcon
                  sx={{
                    color: "blue",
                    marginTop: "6px",
                    height: "20px",
                    width: "20px",
                  }}
                />
                <span className={classes.tooltiptext}>Verified user!</span>
              </div>
            ) : (
              ""
            )}
          </div>
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
