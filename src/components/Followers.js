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
      <p onClick={() => navigate(-1)}>Back</p>
      <div style={{ height: "100px", width: "100%" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {allFollowers.map(
              (user) => (
                console.log(user),
                (
                  <Follower
                    name={user.firstName + " " + user.lastName}
                    id={user.id}
                    key={user.id}
                  />
                )
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Followers;
