import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingRight: 1, color: "white" }}
    >
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
  mainContainer: {
    padding: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
  },
  partition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function Footer() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.mainContainer} component="footer">
      <Copyright />
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ cursor: "pointer", color: "white" }}
      >
        |
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        margin={1}
        sx={{ cursor: "pointer", color: "white" }}
        onClick={() => navigate("/disclaimer")}
      >
        Disclaimer
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ cursor: "pointer", color: "white" }}
      >
        |
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        margin={1}
        sx={{ cursor: "pointer", color: "white" }}
        onClick={() => navigate("/privacy-policy")}
      >
        Privacy Policy
      </Typography>
    </Box>
  );
}

export default Footer;
