import { getAllFollowing } from "../backend/users";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import classes from "./Followers.module.css";
import Follower from "./Follower";

const Following = () => {
  const { userData } = useContext(AuthContext);
  const allFollowing = getAllFollowing(userData.id);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.followersDiv}>
        {allFollowing.map((user) => (
          <Follower
            name={user.firstName + " " + user.lastName}
            id={user.id}
            key={user.id}
            action="following"
          />
        ))}
      </div>
    </div>
  );
};

export default Following;
