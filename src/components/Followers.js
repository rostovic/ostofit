import { useNavigate } from "react-router-dom";
import { getAllFollowers } from "../backend/users";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import Follower from "./Follower.js";

const Followers = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);
  const allFollowers = getAllFollowers(userData.id);

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <div
          style={{
            display: "flex",
            padding: "24px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              justifyContent: "center",
              border: "3px solid lightblue",
              borderRadius: "25px",
              padding: 24,
            }}
          >
            {allFollowers.map((user) => (
              <Follower
                name={user.firstName + " " + user.lastName}
                id={user.id}
                key={user.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Followers;
