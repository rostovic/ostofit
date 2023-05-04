import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import { getAllRequests } from "../backend/users";
import Follower from "./Follower";
import classes from "./Requests.module.css";

const Requests = () => {
  const { userData } = useContext(AuthContext);
  const allRequests = getAllRequests(userData.id);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.followersDiv}>
        {allRequests.map((user) => (
          <Follower
            name={user.firstName + " " + user.lastName}
            id={user.id}
            key={user.id}
            avatarUrl={user.profilePicUrl}
            action="requests"
            username={user.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Requests;
