import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import classes from "./ListItemDropdown.module.css";

const ListItemDropdown = ({ avatarUrl, username, closeSearchDropdownList }) => {
  const navigation = useNavigate();
  return (
    <li
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        paddingLeft: 10,
      }}
      onMouseDown={() => {
        navigation(`/profile/${username}`);
        closeSearchDropdownList();
      }}
    >
      <Avatar style={{ cursor: "pointer" }} src={avatarUrl} />
      <p className={classes.usernameTextStyle}>{username}</p>
    </li>
  );
};

export default ListItemDropdown;
