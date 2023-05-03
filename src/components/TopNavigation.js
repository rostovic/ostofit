import { Avatar, Button, List } from "@mui/material";
import { useNavigate } from "react-router-dom";
import classes from "./TopNavigation.module.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useContext, useEffect, useRef, useState } from "react";
import { getAllUsersThatStartWith } from "../backend/userDetails";
import ListItemDropdown from "./ListItemDropdown";
import { AuthContext } from "../context/auth-context";

const TopNavigation = () => {
  const { userData } = useContext(AuthContext);
  const navigation = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const [users, setUsers] = useState("");

  const closeSearchDropdownList = (e) => {
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
        <Button
          variant="contained"
          onClick={() => {
            navigation("home");
          }}
        >
          Home
        </Button>
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
          onBlur={() => setIsSearching(false)}
        />

        {users.length > 0 && isSearching ? (
          <div
            style={{
              left: 0,
              top: 50,
              position: "absolute",
              width: "300px",
              zIndex: 1,
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid grey",
                borderRadius: "25px",
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  gap: 10,
                }}
              >
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
        ) : (
          ""
        )}
      </div>
      <div className={classes.rightDiv}></div>
    </div>
  );
};
export default TopNavigation;
