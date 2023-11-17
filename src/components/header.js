import { AppBar } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import toast, { Toaster } from "react-hot-toast";
import Home from "../assets/home.jpg";
import About from "../assets/about.jpg";
import Alpha from "../assets/alpha-trials.jpg";
import Contact from "../assets/contact.jpg";
import Upload from "../assets/upload.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setBackground } from "../redux/globalState";
import { useContext } from "react";
import { UserContext } from "../redux/userContext";

const useStyles = makeStyles((props) => ({
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
    overflow: "auto",
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
  userIcon: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0b4199",
    cursor: "pointer",
    color: "white",
    borderRadius: "50%",
    margin: 5,
    marginLeft: 10,
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user") ?? undefined;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out", {
      duration: 1000,
      position: "top-center",
    });
    handleClose();
    navigate("/");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const backgrounds = {
    HOME: Home,
    ABOUT: About,
    ALPHA: Alpha,
    CONTACT: Contact,
    UPLOAD: Upload,
  };
  const pathname = window.location.pathname;
  const globalState = useSelector((state) => state.globalState);
  const { setBackground } = useContext(UserContext);
  const dispath = useDispatch();

  useEffect(() => {
    let backgroundValue = Object.keys(backgrounds).filter((el) => {
      if (pathname.includes(String(el).toLowerCase())) {
        return el;
      }
    });
    setBackground(backgrounds[backgroundValue]);
    // dispath(setBackground(backgrounds[backgroundValue]));
  }, [pathname]);

  return (
    <AppBar position="relative" className={classes.header}>
      <Toaster />
      <div className={classes.logoContainer}>
        <div style={{ width: 100 }}>
          <Logo className="logo" />
        </div>
        <div className={classes.rightContent}>
          <div className={classes.menuItems}>
            <div onClick={() => navigate("/")}>Home</div>
            <div onClick={() => navigate("/about-us")}>About Us</div>
            <div onClick={() => navigate("/alpha-trials")}>Alpha Trials</div>
            <div onClick={() => navigate("/contact-us")}>Contact Us</div>
          </div>
          <div className={classes.profileContainer}>
            {!user ? (
              <Profile className="profile" />
            ) : (
              <div className={classes.userIcon} onClick={user && handleClick}>
                {String(localStorage.getItem("user").charAt(0))}
              </div>
            )}
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>Welcome, {user}</Typography>
            <Typography
              sx={{ p: 2, cursor: "pointer" }}
              textAlign="center"
              onClick={handleLogout}
            >
              Sign Out
            </Typography>
          </Popover>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
