import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TopNavigation = () => {
  const navigation = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "75px",
        width: "100%",
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          navigation("home");
        }}
      >
        Home
      </Button>
    </div>
  );
};
export default TopNavigation;
