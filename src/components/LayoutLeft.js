import { Avatar } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const LayoutLeft = () => {
  const navigation = useNavigate();
  const authContext = useContext(AuthContext);
  const { firstName, lastName } = authContext.userData;

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: "#fafafa",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: "24px",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar sx={{ height: 35, width: 35 }} />
          <p>{firstName + " " + lastName}</p>
        </div>
        <p
          onClick={() => {
            navigation("/followers");
          }}
        >
          Pratitelji
        </p>
        <p>Zahtjevi</p>
      </div>
    </div>
  );
};
export default LayoutLeft;
