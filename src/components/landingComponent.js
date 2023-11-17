import * as React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  mainContainer: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "95vh",
    flexDirection: "column",
  },
  headingBold: {
    fontWeight: 600,
    "@media (min-width: 768px)": {
      fontSize: 50
    },
    "@media (min-width: 1024px)": {
     fontSize: 60
    },
  },
  headingLight: {
    fontSize: 40,
    fontWeight: 500,
    marginTop: 5,
  },
  content: {
    fontSize: 22,
    fontWeight: 400,
    marginTop: 75,
    maxWidth: 640,
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "15%",
    marginTop: 40,
    "@media (min-width: 768px)": {
      width: "30%",
    },
    "@media (min-width: 1024px)": {
      width: "15%",
    },
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    border: "1px solid white",
    background: "transparent",
    color: "white",
    padding: 20,
    width: 100,
    fontSize: 16,
    cursor: "pointer",
  },
});

export default function LandingComponent() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.mainContainer}>
      <span className={classes.headingBold}>
        Break free of digital addiction.
      </span>
      <span className={classes.headingLight}>
        Sleep better. Explore your sub-conscious.
      </span>
      <span className={classes.content}>
        Cosmation is on a mission to provide tools for humans to sleep better,
        leading to cognitive reset and better long-term mental health.
      </span>
      <span className={classes.content}>
        Sounds interesting? Join our alpha trials!
      </span>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => navigate("/register")}>
          Sign up
        </button>
        <button className={classes.button} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
}
