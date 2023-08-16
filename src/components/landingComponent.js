import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { useNavigate } from "react-router-dom";
import { upload } from "../services";
import { toast } from "react-hot-toast";
import errorModal from "./errorModal";
import ErrorModal from "./errorModal";
import ImageBackdrop from "./imageBackdrop";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © Cosmation AB "}
      {new Date().getFullYear()}{" "}
    </Typography>
  );
}

const defaultTheme = createTheme();

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
    height: 60,
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
      width: 60,
      height: 60,
    },
  },
  menuItems: {
    color: "black",
    display: "flex",
    alignItems: "center",
    marginRight: 50,
    justifyContent: "space-between",
    width: "10%",
  },
  footer: {
    width: "100%",
    "& svg": {
      width: 20,
      height: 20,
    },
  },
});

export default function LandingComponent() {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const [selectedFile, setSelectedFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const changeHandler = (event) => {
    setSelectedFile(event?.target?.files[0]);
  };

  const submitFile = async () => {
    setLoading(true);
    try {
      let response = await upload({
        file: selectedFile,
        name: selectedFile?.name,
      });
      if (!response) {
        return toast.error("Error", {
          duration: 1000,
          position: "top-center",
        });
      }
      setImage(response?.data[0]?.url);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {loading && <ErrorModal loading={loading} />}
      {image && <ImageBackdrop imageLink={image} setImage={setImage} />}
      <AppBar position="relative" className={classes.header}>
        <div className={classes.logoContainer}>
          <Logo />
          {user ? (
            <div className="userField">Welcome, {user}</div>
          ) : (
            <div className={classes.menuItems}>
              <div>About</div>
              <div>Home</div>
            </div>
          )}
        </div>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          {user ? (
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Get started
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="column"
                spacing={2}
                justifyContent="center"
                className={classes.uploader}
              >
                <input
                  type="file"
                  onChange={changeHandler}
                  className={classes.file}
                />
                <Button
                  variant="contained"
                  className={classes.button}
                  disabled={selectedFile === null}
                  onClick={submitFile}
                >
                  Upload file
                </Button>
              </Stack>
            </Container>
          ) : (
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Break free of digital addiction. Sleep better. Explore your
                sub-conscious.
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Cosmation is on a mission to provide tools for humans to sleep
                better, leading to cognitive reset and better long-term mental
                health.
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Sounds interesting?
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" onClick={handleLogin}>
                  Login
                </Button>
                <Button variant="outlined" onClick={handleRegister}>
                  Register
                </Button>
              </Stack>
            </Container>
          )}
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
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
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          className={classes.footer}
        >
          Made with <Heart /> in Sweden.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
