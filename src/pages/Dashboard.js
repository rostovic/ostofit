import classes from "./Dashboard.module.css";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";

const Dashboard = () => {
  const ctx = useContext(AuthContext);
  console.log("dashboard");
  return;
  return (
    <div>
      <div className={classes.test}>
        <p className={classes.text_center}>{ctx.userData.firstName}</p>
      </div>
      <div>
        <p className={classes.text_center}>{ctx.userData.lastName}</p>
      </div>
    </div>
  );
};

export default Dashboard;
