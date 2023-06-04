import { TextField } from "@mui/material";
import classes from "./CreateAccount.module.css";
import { useEffect, useRef, useState } from "react";
import { checkIfUsernameIsNotTaken } from "../backend/helpers";

const CreateAccount = () => {
  const [checkUsername, setCheckUsername] = useState("");
  const [usernameValidInfo, setUsernameValidInfo] = useState(false);
  const [fieldsEmpty, setFieldsEmpty] = useState(null);
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const resetErrors = () => {
    if (fieldsEmpty === null) {
      return;
    }
    setFieldsEmpty(null);
  };

  const createAccount = () => {
    if (
      firstNameRef.current.value === "" ||
      lastNameRef.current.value === "" ||
      usernameRef.current.value === "" ||
      passwordRef.current.value === ""
    ) {
      setFieldsEmpty(true);
    }
  };

  useEffect(() => {
    if (checkUsername === "") {
      setUsernameValidInfo("");
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

  return (
    <div className={classes.mainDiv}>
      <div className={classes.navigation}></div>
      <div className={classes.contentDiv}>
        <div className={classes.signUpDiv}>
          <div className={classes.inputsDiv}>
            <span className={classes.textCreate}>Create a new account!</span>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              type="text"
              name="first_name"
              inputRef={firstNameRef}
              onFocus={resetErrors}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              type="text"
              name="last_name"
              inputRef={lastNameRef}
              onFocus={resetErrors}
            />
            <TextField
              required
              id="outlined-required"
              label="Username"
              onChange={(e) => setCheckUsername(e.target.value)}
              helperText={usernameValidInfo === "" ? "" : usernameValidInfo}
              FormHelperTextProps={{
                style: {
                  color:
                    usernameValidInfo === "Username is taken!"
                      ? "red"
                      : "green",
                },
              }}
              inputRef={usernameRef}
              onFocus={resetErrors}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              inputRef={passwordRef}
              onFocus={resetErrors}
            />
            {fieldsEmpty === true ? (
              <span style={{ color: "red" }}>Please fill out every field!</span>
            ) : null}
            <button
              className={classes.buttonCreate}
              style={{
                cursor:
                  usernameValidInfo === "Username is taken!" ||
                  usernameValidInfo === ""
                    ? "not-allowed"
                    : "pointer",
              }}
              disabled={
                usernameValidInfo === "Username is taken!" ||
                usernameValidInfo === ""
                  ? true
                  : false
              }
              onClick={createAccount}
            >
              Create account!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
