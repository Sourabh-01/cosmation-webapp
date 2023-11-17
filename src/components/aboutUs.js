import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    height: "auto",
    flexDirection: "column",
    padding: 45,
  },
  heading: {
    fontSize: 60,
    fontWeight: 500,
    marginTop: 60,
  },
  content: {
    fontSize: 20,
    fontWeight: 400,
    marginTop: 25,
    maxWidth: 550,
    textAlign: "justify",
  },
});

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <span className={classes.heading}>What is Cosmation?</span>
      <span className={classes.content}>
        Cosmation AB is a Swedish startup, providing devices, software and
        services in the domain of sleep wellness. We focus on psychological
        wellness and curing digital fatigue through our solutions.
      </span>
      <span className={classes.heading}>How does it work?</span>
      <span className={classes.content}>
        We offer a service to transcribe and visualize user’s voice notes. With
        the help of a device, you will be able to record your dreams and
        feelings.
      </span>
      <span className={classes.heading}>What is our vision?</span>
      <span className={classes.content}>
        Our vision is to provide tools for humans to explore their psyche – both
        at an individual and collective level, enable this exploration to be
        shared in communities for learning, empathy and solidarity. We would
        like to provide objective and subjective measurements and records of
        human psychological evolution over large swaths of time, and in
        turbulent times of rapid environmental, societal and economic changes.
      </span>
    </div>
  );
};

export default AboutUs;
