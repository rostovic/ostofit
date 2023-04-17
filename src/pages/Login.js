import { Form, redirect, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
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

const Login = () => {
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
    <main>
      <div className={classes.loginMainDiv}>
        <div className={classes.imageDiv}>
          <img src="https://media.istockphoto.com/id/1322158059/photo/dumbbell-water-bottle-towel-on-the-bench-in-the-gym.jpg?s=612x612&w=0&k=20&c=CIdh6LPGwU6U6lbvKCdd7LcppidaYwcDawXJI-b0yGE="></img>
        </div>
        <div className={`${classes.loginContainer}`}>
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
      </div>
    </main>
  );
};

export default Login;
