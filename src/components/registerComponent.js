import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { registerUser } from "../services";
import { toast, Toaster } from "react-hot-toast";
import { ReactComponent as Logo } from "../assets/logo.svg";

// TODO remove, this demo shouldn't need to reset the theme.
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
  logo: {
    backgroundColor: "white !important",
  },
});

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const classes = useStyles();
  const handleNavigate = () => {
    setTimeout(() => {
      navigate("/alpha-trials");
    }, 1000);
  };

  const register = async (data) => {
    let requestData = {
      name: data.get("firstName") + " " + data.get("lastName"),
      emailId: data.get("email"),
      password: data.get("password"),
    };
    try {
      let response = await registerUser(requestData);
      if (!response?.data?.success) {
        return toast.error(response?.data?.message, {
          duration: 2000,
          position: "top-center",
        });
      }
      toast.success("User registered", {
        duration: 1000,
        position: "top-center",
      });
      localStorage.setItem(
        "user",
        String(response?.data?.user).slice(0, 1).toUpperCase() +
          String(response?.data?.user).slice(1).toLowerCase()
      );
      localStorage.setItem("token", response?.data?.token);
      handleNavigate();
    } catch (error) {
      toast.error(error, {
        duration: 2000,
        position: "top-center",
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    register(data);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Toaster />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main" }}
            className={classes.logo}
          >
            <Logo />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
