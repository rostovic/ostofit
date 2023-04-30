import { Avatar } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import classes from "./LayoutLeft.module.css";
import { getNumberOfFollowers, getNumberOfFollowing } from "../backend/users";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import { Badge } from "@mui/material";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";

const LayoutLeft = () => {
  const navigation = useNavigate();
  const authContext = useContext(AuthContext);
  const { firstName, lastName, id } = authContext.userData;
  const followers = getNumberOfFollowers(id);
  const following = getNumberOfFollowing(id);

  return (
    <div className={classes.mainLayout}>
      <div className={classes.contentDiv}>
        <div className={classes.userDiv}>
          <Avatar sx={{ height: 35, width: 35 }} />
          <p style={{ fontWeight: 500 }}>{firstName + " " + lastName}</p>
        </div>
        <div style={{ height: 25 }}></div>

        <button
          className={classes.buttonSidebar}
          onClick={() => {
            navigation("followers");
          }}
        >
          <Badge
            badgeContent={followers}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "red",
              },
            }}
          >
            <Groups2RoundedIcon sx={{ height: 50, width: 50 }} />
          </Badge>

          {/* <p>{"[" + followers + "]" + " " + "Followers"}</p> */}
        </button>

        <button
          className={classes.buttonSidebar}
          onClick={() => {
            navigation("following");
          }}
        >
          <Badge
            badgeContent={following}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "red",
              },
            }}
          >
            <PeopleOutlineRoundedIcon sx={{ height: 50, width: 50 }} />
          </Badge>
          {/* {"[" + following + "]" + " " + "Following"} */}
        </button>
        <button className={classes.buttonSidebar}>
          <Badge
            badgeContent={"0"}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "red",
              },
            }}
          >
            <GroupAddRoundedIcon sx={{ height: 50, width: 50 }} />
          </Badge>
        </button>
      </div>
    </div>
  );
};
export default LayoutLeft;
