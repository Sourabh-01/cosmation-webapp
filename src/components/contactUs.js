import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { sendQuery } from "../services";
import { toast } from "react-hot-toast";
import { FormControl, TextField } from "@mui/material";

const useStyles = makeStyles({
  mainContainer: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    flexDirection: "column",
  },
  headingLight: {
    fontSize: 40,
    fontWeight: 500,
    marginTop: 50,
  },
  content: {
    fontSize: 22,
    fontWeight: 400,
    marginTop: 75,
    maxWidth: 500,
    textAlign: "center",
  },
  messageContainer: {
    background: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    width: 450,
    marginBottom: 30,
  },
  label: {
    color: "black",
    fontSize: 18,
    margin: "20px 0px 5px 0px",
  },
  input: {
    height: 40,
    backgroundColor: "white !important",
    color: "black",
    outline: "none",
    border: "none",
    borderRadius: 10,
    width: "97%",
    paddingLeft: 10,
  },
  textArea: {
    height: 150,
    backgroundColor: "white !important",
    color: "black",
    outline: "none",
    border: "none",
    borderRadius: 10,
    width: "97%",
    paddingLeft: 10
  },
  emailId: {
    marginLeft: "0px !important",
    "@media (min-width: 780px)": {
      marginLeft: "20px !important",
    },
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 40,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    background: "#1C5666",
    border: "none",
    color: "white",
    padding: 20,
    width: 120,
    fontSize: 16,
    cursor: "pointer",
  },
});

const ContactUs = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    emailId: "",
    message: "",
  });
  const handleChange = (event) => {
    setState((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const sendEnquiry = async () => {
    try {
      let response = await sendQuery(state);
      if (!response?.data?.success) {
        return toast.error(response?.data?.message, {
          duration: 2000,
          position: "top-center",
        });
      }
      toast.success(response?.data?.message, {
        duration: 1000,
        position: "top-center",
      });
      setState((prev) => ({
        ...prev,
        name: "",
        emailId: "",
        message: "",
      }));
    } catch (error) {
      toast.error(error, {
        duration: 2000,
        position: "top-center",
      });
    }
  };

  return (
    <div className={classes.mainContainer}>
      <span className={classes.headingLight}>Something on your mind?</span>
      <span className={classes.content}>
        In case of any questions, please fill this form and we will get in touch
        as soon as possible.
      </span>
      <div className={classes.messageContainer}>
        <div className={classes.label}>Name</div>
        <input
          className={classes.input}
          id="name"
          label="Name"
          name="name"
          autoFocus
          value={state.name}
          onChange={handleChange}
        />
        <div className={classes.label}>Email</div>
        <input
          className={classes.input}
          id="emailId"
          label="Email"
          name="email"
          autoFocus
          onChange={handleChange}
        />
        <div className={classes.label}>Message</div>
        <textarea
          className={classes.textArea}
          id="message"
          label="Message"
          name="message"
          autoComplete="message"
          autoFocus
          variant="standard"
          value={state.message}
          onChange={handleChange}
        />
        <div className={classes.buttonContainer}>
          <button
            className={classes.button}
            disabled={!state.name || !state.emailId || !state.message}
            onClick={sendEnquiry}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
