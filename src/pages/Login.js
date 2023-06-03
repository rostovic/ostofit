import { Form, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { loginUser } from "../backend/helpers";
const ERRORS = {
  USERNAME: {
    BLANK: "Empty username!",
  },
  PASSWORD: {
    BLANK: "Empty password!",
  },
  USER: {
    BLANK: "User does not exist!",
  },
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorUsername, setErrorUsername] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorUser, setErrorUser] = useState(null);
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");

  const resetErrors = () => {
    setErrorUsername(null);
    setErrorPassword(null);
    setErrorUser(null);
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (username.length === 0) {
      setErrorUsername(ERRORS.USERNAME.BLANK);
    }

    if (password.length === 0) {
      setErrorPassword(ERRORS.PASSWORD.BLANK);
    }

    if (!username || !password) {
      return;
    }

    const userData = await loginUser(username, password);

    if (userData === "User does not exist!") {
      setErrorUser(ERRORS.USER.BLANK);
      return;
    }

    ctx.login(userData);
    navigate("/home");

    return;
  };

  const renderError = (errorType) => {
    if (errorType === "username") {
      if (!errorUsername) {
        return;
      }

      return (
        <div>
          <span>{errorUsername}</span>
        </div>
      );
    }

    if (errorType === "password") {
      if (!errorPassword) {
        return;
      }

      return (
        <div>
          <span>{errorPassword}</span>
        </div>
      );
    }

    if (errorType === "User does not exist!")
      if (!errorUser) {
        return;
      }

    return (
      <div>
        <span>{errorUser}</span>
      </div>
    );
  };

  return (
    <main>
      <div className={classes.wrapper}>
        <div className={classes.imageDiv}>
          <img src="https://media.istockphoto.com/id/1322158059/photo/dumbbell-water-bottle-towel-on-the-bench-in-the-gym.jpg?s=612x612&w=0&k=20&c=CIdh6LPGwU6U6lbvKCdd7LcppidaYwcDawXJI-b0yGE="></img>
        </div>
        <div className={classes.loginContainer}>
          <Form onSubmit={formSubmissionHandler}>
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
            {renderError("User does not exist!")}
            <button className={`${classes.button}`}>Log In</button>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Login;
