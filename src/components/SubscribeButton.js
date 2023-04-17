import { Button } from "@mui/material";

const SubscribeButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "black",
        color: "white",
        fontSize: "10px",
        boxShadow: "none",
        borderRadius: "20px",
        ":hover": {
          backgroundColor: "red",
        },
      }}
    >
      SUBSCRIBE
    </Button>
  );
};
export default SubscribeButton;
