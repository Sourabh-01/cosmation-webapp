import { AppBar } from "@mui/material";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
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
  rightContent: {
    display: "flex",
    alignItems: "center",
    marginRight: 10,

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
    "& .logo": {
      margin: 5,
      width: 60,
      height: 60,
    },
  },
  profileContainer: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    marginLeft: 10,
    "& .profile": {
      margin: 5,
      width: 40,
      height: 40,
    },
  },
  menuItems: {
    color: "black",
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "330px",
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
  const user = localStorage.getItem("user");
  return (
    <AppBar position="relative" className={classes.header}>
      <div className={classes.logoContainer}>
        <Logo className="logo" />
        <div className={classes.rightContent}>
          <div className={classes.menuItems}>
            <div onClick={() => navigate("/")}>Home</div>
            <div onClick={() => navigate("/about-us")}>About Us</div>
            <div onClick={() => navigate("/alpha-trials")}>Alpha Trials</div>
            <div onClick={() => navigate("/contact-us")}>Contact Us</div>
          </div>
          {user && (
            <div className={classes.profileContainer}>
              <Profile className="profile" />
            </div>
          )}
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
