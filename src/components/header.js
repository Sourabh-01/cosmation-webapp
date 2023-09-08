import { AppBar } from "@mui/material";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  header: {
    height: "auto",
    backgroundColor: "white !important",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
    "& .userField": {
      color: "black",
      display: "flex",
      alignItems: "center",
      marginRight: 50,
    },
    "& svg": {
      margin: 5,
      width: 60,
      height: 60,
    },
  },
  menuItems: {
    color: "black",
    display: "flex",
    alignItems: "center",
    marginRight: 50,
    width: "100%",
    maxWidth: "300px",
    justifyContent: "space-between",
    "& > div": {
      whiteSpace: "nowrap",
      fontSize: 14,
      cursor: "pointer",
      padding: 10,
      "&:hover": {
        backgroundColor: "#a7a8a9",
        borderRadius: 20,
        color: "white",
      },
    },
  },
});

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.header}>
      <div className={classes.logoContainer}>
        <Logo />
        <div className={classes.menuItems}>
          <div onClick={() => navigate("/")}>Home</div>
          <div onClick={() => navigate("/about-us")}>About Us</div>
          <div onClick={() => navigate("/alpha-trials")}>Alpha Trials</div>
          <div onClick={() => navigate("/contact-us")}>Contact Us</div>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
