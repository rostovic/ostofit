import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/auth-context";
import classes from "./EditMyProfilePage.module.css";
import { Avatar, TextField } from "@mui/material";
import {
  checkIfUsernameIsNotTaken,
  updateUserData,
  updateUserDataWithoutUsername,
} from "../backend/helpers";

const EditMyProfilePage = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [checkUsername, setCheckUsername] = useState("");
  const [usernameValidInfo, setUsernameValidInfo] = useState(false);
  const authContext = useContext(AuthContext);
  const logout = authContext.logout;
  const { profile_pic, username, firstName, lastName, dateCreated, id } =
    authContext.userData;

  const usernameRef = useRef("");
  const profilePicRef = useRef("");

  useEffect(() => {
    if (checkUsername === "" || checkUsername === username) {
      setUsernameValidInfo(false);
      return;
    }

    const checkTimeout = setTimeout(() => {
      const checkIfValid = async (username) => {
        const response = await checkIfUsernameIsNotTaken(username);
        if (response === "success") {
          setUsernameValidInfo("Username is available!");
        } else {
          setUsernameValidInfo("Username is taken!");
        }
      };
      checkIfValid(checkUsername);
    }, 500);

    return () => clearTimeout(checkTimeout);
  }, [checkUsername]);

  const saveNewData = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    const usernameNewValue = usernameRef.current.value;
    const profilePicNewValue = profilePicRef.current.value;
    if (usernameNewValue.length === 0 || profilePicNewValue.length === 0) {
      setIsSaving(false);
      return;
    }

    if (username === usernameNewValue && profile_pic === profilePicNewValue) {
      setIsSaving(false);
      return;
    }
    if (username === usernameNewValue) {
      const response = await updateUserDataWithoutUsername(
        profilePicNewValue,
        id
      );
      authContext.userData.profile_pic = profilePicRef.current.value;
      authContext.refreshData(authContext.userData);
      setIsSaving(false);
      window.location.reload();
      return;
    }
    const response = await updateUserData(
      usernameNewValue,
      profilePicNewValue,
      id
    );
    setIsSaving(false);
    logout();
  };

  return (
    <div
      className={classes.container}
      style={{ cursor: isSaving ? "wait" : "auto" }}
    >
      <div className={classes.contentDiv}>
        <div className={classes.pictureDiv}>
          <Avatar src={profile_pic} sx={{ height: 150, width: 150 }} />
        </div>
        <TextField
          required
          id="outlined-required"
          label="Profile picture url"
          defaultValue={profile_pic}
          multiline
          inputRef={profilePicRef}
        />
        <TextField
          error={
            checkUsername != username &&
            usernameValidInfo === "Username is taken!"
              ? true
              : false
          }
          required
          id="outlined-required"
          label="Username"
          defaultValue={username}
          inputRef={usernameRef}
          onChange={(e) => setCheckUsername(e.target.value)}
          helperText={usernameValidInfo === "" ? "" : usernameValidInfo}
          FormHelperTextProps={{
            style: {
              color:
                usernameValidInfo === "Username is taken!" ? "red" : "green",
            },
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="firstName"
          defaultValue={firstName}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="lastName"
          defaultValue={lastName}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Account created:"
          defaultValue={dateCreated}
          InputProps={{
            readOnly: true,
          }}
        />

        <div className={classes.buttonDiv}>
          <button
            className={classes.buttonSave}
            style={{
              cursor:
                usernameValidInfo === "Username is taken!"
                  ? "not-allowed"
                  : "pointer",
            }}
            onClick={saveNewData}
            disabled={usernameValidInfo === "Username is taken!" ? true : false}
          >
            {isSaving ? (
              <div className={classes.loaderSpinnerWrapper}>
                <div className={classes.loaderSpinner}></div>
              </div>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMyProfilePage;
