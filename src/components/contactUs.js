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
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,

    color: "white",
    height: 48,
    padding: "0 30px",
  },
  main: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    margin: 44,
  },
  emailId: {
    marginLeft: "0px !important",
    '@media (min-width: 780px)': {
      marginLeft: "20px !important",
    }
  }
});

const ContactUs = () => {
  const classes = useStyles();
  const defaultTheme = createTheme();
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
    <ThemeProvider theme={defaultTheme}>
      <main className={classes.main}>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container>
            <Typography component="p" color="text.primary" marginBottom={2}>
              In case of any questions, please fill this form and we will get in
              touch as soon as possible.
            </Typography>
            <FormControl>
              <div className={classes.detailsContainer}>
                <TextField
                  margin="normal"
                  required
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  variant="standard"
                  value={state.name}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  id="emailId"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="standard"
                  onChange={handleChange}
                  className={classes.emailId}
                  value={state.emailId}
                  sx={{ marginLeft: 0 }}
                />
              </div>

              <TextField
                margin="normal"
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                autoComplete="message"
                autoFocus
                variant="standard"
                value={state.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, width: "100px" }}
                disabled={!state.name || !state.emailId || !state.message}
                onClick={sendEnquiry}
              >
                Submit
              </Button>
            </FormControl>
          </Container>
        </Box>
        <Container sx={{ py: 8 }}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              ></Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* End footer */}
    </ThemeProvider>
  );
};

export default ContactUs;
