import { useNavigate } from "react-router-dom";
import { getAllFollowers } from "../backend/users";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { Avatar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import classes from "./Followers.module.css";

const Followers = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);
  const { firstName, lastName } = userData;
  const allFollowers = getAllFollowers(userData.id);

  return (
    <>
      <p onClick={() => navigate(-1)}>Back</p>
      <div style={{ height: "100px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            border: "2px solid black",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div
              style={{
                width: "400px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "2px solid black",
              }}
            >
              <Avatar />
              <p style={{ flex: 1 }}>Matko Crkva</p>
              <div className={classes.followerDiv}>
                <p>Following you!</p>
                <CheckIcon
                  sx={{
                    color: "white",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "2px solid black",
              }}
            >
              <Avatar />
              <p style={{ flex: 1 }}>Mateo Lukavac</p>
              <div className={classes.followerDiv}>
                <p>Following you!</p>
                <CheckIcon
                  sx={{
                    color: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Followers;
