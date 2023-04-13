import { Form, useNavigate } from "react-router-dom";
import classes from "./HomePage.module.css";
import { useRef, useState } from "react";
import { login } from "../backend/users";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
const ERRORS = {
  USERNAME: {
    BLANK: "Empty username!",
  },
  PASSWORD: {
    BLANK: "Empty password!",
  },
};

const HomePage = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorUsername, setErrorUsername] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");

  const resetErrors = () => {
    setErrorUsername(null);
    setErrorPassword(null);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const userName = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (userName.length === 0) {
      setErrorUsername(ERRORS.USERNAME.BLANK);
    }

    if (password.length === 0) {
      setErrorPassword(ERRORS.PASSWORD.BLANK);
    }

    if (!userName || !password) {
      return;
    }

    const loginResponse = login(userName, password);

    if (!loginResponse.data.isValidCredentials) {
      return;
    }

    ctx.setIsLoggedIn(true);
    ctx.setUserData(loginResponse.data.userDetails);

    navigate(loginResponse.data.redirect);
  };

  const renderError = (errorType) => {
    if (errorType === "username") {
      if (!errorUsername) {
        return;
      }

      return (
        <div>
          <p>{errorUsername}</p>
        </div>
      );
    }

    if (errorType === "password") {
      if (!errorPassword) {
        return;
      }

      return (
        <div>
          <p>{errorPassword}</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className={`${classes.wrap}`}>
        <Form onSubmit={formSubmissionHandler} className={classes.login_form}>
          <input
            className={classes.input}
            ref={usernameInputRef}
            id="email"
            type="text"
            name="email"
            placeholder="Username or email..."
            onFocus={resetErrors}
          ></input>
          {renderError("username")}
          <input
            className={classes.input}
            ref={passwordInputRef}
            id="password"
            type="password"
            name="password"
            placeholder="Password..."
            onFocus={resetErrors}
          ></input>
          {renderError("password")}
          <button className={`${classes.button}`}>Log In</button>
        </Form>
      </div>
    </>
  );
};

export default HomePage;
