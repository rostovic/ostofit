import { ClassNames } from "@emotion/react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import classes from "./ListItemDropdown.module.css";

const ListItemDropdown = ({
  id,
  avatarUrl,
  username,
  closeSearchDropdownList,
}) => {
  const navigation = useNavigate();
  return (
    <li
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Avatar
        style={{ cursor: "pointer" }}
        src={avatarUrl}
        onClick={() => {
          navigation(`/profile/${id}`);
        }}
      />
      <p
        className={classes.usernameTextStyle}
        onClick={() => {
          navigation(`/profile/${id}`);
          closeSearchDropdownList();
        }}
      >
        {username}
      </p>
    </li>
  );
};

export default ListItemDropdown;
