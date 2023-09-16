import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © Cosmation AB "}
      {new Date().getFullYear()}{" "}
    </Typography>
  );
}

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
  footer: {
    width: "100%",
    "& svg": {
      width: 20,
      height: 20,
    },
  },
});

function Footer() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        className={classes.footer}
      >
        Made with <Heart /> in Sweden.
      </Typography>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      <Copyright />
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        margin={1}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/disclaimer")}
      >
        Disclaimer
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        margin={1}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/privacy-policy")}
      >
        Privacy Policy
      </Typography>
    </Box>
  );
}

export default Footer;
