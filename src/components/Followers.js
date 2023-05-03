import { getAllFollowers } from "../backend/users";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import Follower from "./Follower.js";
import classes from "./Followers.module.css";

const Followers = () => {
  const { userData } = useContext(AuthContext);
  const allFollowers = getAllFollowers(userData.id);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.followersDiv}>
        {allFollowers.map((user) => (
          <Follower
            name={user.firstName + " " + user.lastName}
            id={user.id}
            key={user.id}
            avatarUrl={user.profilePicUrl}
            action="followers"
            username={user.username}
          />
        ))}
      </div>
    </div>
  );
};
export default Followers;
