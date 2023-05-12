import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import classes from "./TopNavigation.module.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useContext, useState } from "react";
import { getAllUsersThatStartWith } from "../backend/userDetails";
import ListItemDropdown from "./ListItemDropdown";
import { AuthContext } from "../context/auth-context";

const TopNavigation = () => {
  const { userData } = useContext(AuthContext);
  const navigation = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const [users, setUsers] = useState("");

  const closeSearchDropdownList = () => {
    setIsSearching(false);
    setUsers("");
    document.getElementById("search-bar").value = "";
  };

  const handleSearch = (e) => {
    if (e.target.value.length === 0) {
      setIsSearching(false);
      setUsers("");
      return;
    }
    setUsers(getAllUsersThatStartWith(e.target.value, userData.id));
    setIsSearching(true);
  };

  return (
    <div className={classes.mainDiv}>
      <div className={classes.buttonDiv}>
        <button
          className={classes.buttonHomeStyle}
          onClick={() => {
            navigation("home");
          }}
        >
          Home
        </button>
      </div>
      <div className={classes.searchDiv}>
        <TextField
          sx={{ height: 50 }}
          fullWidth
          placeholder="Search user..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          id="search-bar"
          variant="standard"
          onChange={handleSearch}
          onBlur={() => {
            setIsSearching(false);
          }}
        />
        {users.length > 0 && isSearching && (
          <div className={classes.popUpSearchDiv}>
            <div className={classes.divList}>
              <ul className={classes.listStyle}>
                {users.map((user) => (
                  <ListItemDropdown
                    key={user.id}
                    id={user.id}
                    avatarUrl={user.profilePicUrl}
                    username={user.username}
                    closeSearchDropdownList={closeSearchDropdownList}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className={classes.rightDiv}></div>
    </div>
  );
};
export default TopNavigation;
