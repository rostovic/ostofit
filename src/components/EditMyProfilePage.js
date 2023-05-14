import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import classes from "./EditMyProfilePage.module.css";

const EditMyProfilePage = () => {
  const authContext = useContext(AuthContext);
  const { profile_pic, username } = authContext.userData;

  return (
    <div className={classes.container}>
      <div className={classes.contentDiv}>
        <p>kek</p>
      </div>
    </div>
  );
};

export default EditMyProfilePage;
