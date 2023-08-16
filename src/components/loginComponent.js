import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { loginUser } from "../services";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://cosmation.ai/">
        Cosmation AB
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
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
  logo: {
    backgroundColor: "white !important",
  },
});

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const classes = useStyles();
  const handleNavigate = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const login = async (data) => {
    let requestData = {
      emailId: data.get("email"),
      password: data.get("password"),
    };
    try {
      let response = await loginUser(requestData);
      if (!response?.data?.success) {
        return toast.error(response?.data?.message, {
          duration: 2000,
          position: "top-center",
        });
      }
      toast.success("Login success", {
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
    login(data);
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
