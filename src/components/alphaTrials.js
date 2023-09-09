import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { upload } from "../services";
import { toast } from "react-hot-toast";
import ErrorModal from "./errorModal";
import ImageBackdrop from "./imageBackdrop";

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
  footer: {
    width: "100%",
    "& svg": {
      width: 20,
      height: 20,
    },
  },
});

const AlphaTrials = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const defaultTheme = createTheme();
  const user = localStorage.getItem("user");
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

      if (!response.data || !response?.Success) {
        setLoading(false);
        return toast.error("Error", {
          duration: 1000,
          position: "top-center",
        });
      }
      setImage(response?.data);
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
      <main className={classes.main}>
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
            <Container>
              <Typography
                component="p"
                color="text.primary"
                marginBottom={2}
                marginLeft={2.75}
              >
                We all start this journey together. We start this revolution
                today. We agree to be pioneers on the frontier of human sleep
                wellness. We sign up for Cosmation Alpha Trials.
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                fontWeight={"bold"}
                paragraph
                marginLeft={2.75}
                gutterBottom
              >
                What does it mean for me?
              </Typography>
              <Typography component="div">
                <ul>
                  <li>Agree to be an alpha trial candidate for Cosmation AB</li>
                  <li>
                    Accept the trial device on loan and take care of it for the
                    duration of the trial
                  </li>
                  <li>
                    Agree to leave your phone outside your place of sleeping at
                    night
                  </li>
                  <li>
                    Agree to record dreams and feelings first thing upon waking
                    up, when you feel like it
                  </li>
                  <li>
                    Agree to share the select recordings by uploading them on
                    your alpha trial account page
                  </li>
                  <li>
                    Agree to answer periodic and eventual feedback questions
                    regarding your experience with the Cosmation Research team.
                  </li>
                </ul>
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                fontWeight={"bold"}
                paragraph
                marginLeft={2.75}
                gutterBottom
              >
                What do I get out of it?
              </Typography>
              <Typography
                component="p"
                color="text.primary"
                marginBottom={2}
                marginLeft={2.75}
              >
                We like to think that it will be a lot of fun! Imagine being
                able to visualize your dreams and see them come alive as
                pictures and drawings!. The first-time experience of seeing your
                dreams on the screen is special. It may even be disconcerting
                for some, but always sparks a lot of interesting conversations
                and insights.
              </Typography>
              <Typography
                component="p"
                color="text.primary"
                marginBottom={2}
                marginLeft={2.75}
              >
                Long-term dream recall has been scientifically proven to promote
                better sleep, better relationships and improved mental health.
                This trial helps you start the habit of recording your dreams in
                the most efficient way, without the clutches of an addictive
                phone near your place of sleep, to aid digital detox.
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                fontWeight={"bold"}
                paragraph
                marginLeft={2.75}
                gutterBottom
              >
                What does it cost me?
              </Typography>
              <Typography
                component="p"
                color="text.primary"
                marginBottom={2}
                marginLeft={2.75}
              >
                As an alpha trial participant, it costs you nothing except your
                time and attention. We provide the free device on loan, for the
                duration of the trial. You do need an internet connection and a
                computer/phone to access your trial account, upload the
                recordings and receive the visualization. We also need your
                email address to send you links to images of your dreams, so you
                can share them with family, friends and healthcare providers at
                your discretion.
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                I’m in game.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="outlined" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </Stack>
            </Container>
          )}
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

export default AlphaTrials;
