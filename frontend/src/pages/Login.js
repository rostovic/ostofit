import { Form, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { loginUser } from "../backend/helpers";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import picture_1 from "../images/picture_1.jpg";
import picture_3 from "../images/picture_3.jpg";
import picture_4 from "../images/picture_4.jpg";

const sliderData = [picture_1, picture_3, picture_4];

const ERRORS = {
  USERNAME: {
    BLANK: "Empty username!",
  },
  PASSWORD: {
    BLANK: "Empty password!",
  },
  USER: {
    BLANK: "Invalid credentials!",
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChangeSlide = (action) => {
    if (action === "previous") {
      if (currentSlide === 0) {
        return;
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
    if (action === "next") {
      if (currentSlide === 2) {
        return;
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

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

    if (userData === "Invalid credentials!") {
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

    if (errorType === "Invalid credentials!")
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
          <NavigateBeforeIcon
            sx={{
              height: "200px",
              width: "200px",
              color: "grey",
              transition: "all 0.5s",
              "&:hover": {
                color: "black",
                cursor: "pointer",
                scale: "1.1",
              },
            }}
            onClick={() => handleChangeSlide("previous")}
          />
          <img src={sliderData[currentSlide]} alt="test" />

          <NavigateNextIcon
            sx={{
              height: "200px",
              width: "200px",
              color: "grey",
              transition: "all 0.5s",
              "&:hover": {
                color: "black",
                cursor: "pointer",
                scale: "1.1",
              },
            }}
            onClick={() => handleChangeSlide("next")}
          />
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
            <button className={classes.buttonLogIn} type="submit">
              Log In
            </button>
            <button
              className={classes.createAccountButton}
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create account!
            </button>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Login;
