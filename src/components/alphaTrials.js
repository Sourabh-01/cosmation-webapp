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
import { AudioRecorder } from "react-audio-voice-recorder";
const useStyles = makeStyles({
  mainContainer: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    flexDirection: "column",
    marginBottom: 40,
    padding: 40,
  },
  highlight: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
  },
  headingLight: {
    fontSize: 40,
    fontWeight: 500,
    marginTop: 5,
  },
  content: {
    fontSize: 30,
    fontWeight: 200,
    marginTop: 40,
    maxWidth: 640,
    textAlign: "center",
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
    borderRadius: 30,
    border: "1px solid black",
    background: "transparent",
    color: "black",
    padding: 20,
    width: "auto",
    fontSize: 16,
    margin: 10,
    marginBottom: 30,
  },
  submitButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    background: "#1C5666",
    border: "none",
    color: "white",
    padding: 15,
    width: "auto",
    fontSize: 14,
    cursor: "pointer",
  },

  messageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "white",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    width: "auto",
    marginBottom: 30,
    border: "1px dashed #707070",
  },
  shadowContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    width: 450,
    marginBottom: 30,
  },
  file: {
    width: 87,
    border: "none",
    outline: "none",
    backgroundColor: "white !important",
  },
});

const AlphaTrials = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const changeHandler = (event) => {
    setSelectedFile(event?.target?.files[0]);
  };

  const addAudioElement = async (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    await submitFile(audio, true);
  };

  const submitFile = async (file, isRecorderd) => {
    setLoading(true);
    try {
      let req = {};
      if (isRecorderd) {
        req.isRecorded = true;
        req.file = file;
        req.name = file?.name;
      } else {
        req.file = selectedFile;
        req.name = selectedFile?.name;
      }
      // console.log("asdsadasd", req);
      let response = await upload(req);
      // setImage(
      //   "https://cdn.discordapp.com/attachments/1143979505271193653/1144702689809268798/newcosmo2023_picture_baby_fairy_e304f198-cc81-4af1-8013-703e9399b095.png"
      // );

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
    <div>
      {loading && <ErrorModal loading={loading} />}
      {image && <ImageBackdrop imageLink={image} setImage={setImage} />}
      <main className={classes.main}>
        {/* Hero unit */}
        {user ? (
          <Container maxWidth="sm">
            <div className={classes.mainContainer}>
              <span className={classes.headingLight}>Get started</span>
              <span className={classes.content}>
                Ready to explore your subconscious?
              </span>
              <div className={classes.shadowContainer}>
                <div className={classes.messageContainer}>
                  <input
                    type="file"
                    onChange={changeHandler}
                    className={classes.file}
                    hidden={selectedFile != null}
                  />
                  {selectedFile && (
                    <div className={classes.button}>{selectedFile?.name}</div>
                  )}
                  <Typography
                    component="div"
                    sx={{ marginTop: 2, color: "#123B47", fontSize: 12 }}
                  >
                    Files supported: MP3, MP4, MP2, AAC, WAV, FLAC, PCM, M4A,
                    Ogg, Opus WebM
                    <br /> Maximum file size: 15 MB <br />
                    Languages Supported: English <br />
                    Note: For optimal performance, keep the audio files of 1
                    minute max
                  </Typography>
                </div>
                <div className={classes.buttonContainer}>
                  <button
                    className={classes.submitButton}
                    disabled={selectedFile === null}
                    onClick={submitFile}
                  >
                    Let's do this!
                  </button>
                </div>
              </div>
            </div>

            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
              className={classes.uploader}
            >
              {/* <Button
                variant="contained"
                className={classes.button}
                disabled={selectedFile === null}
                onClick={submitFile}
              >
                Upload file
              </Button>
              <AudioRecorder
                onRecordingComplete={addAudioElement}
                downloadFileExtension="webm"
              /> */}
            </Stack>
          </Container>
        ) : (
          <Container>
            <div className={classes.mainContainer}>
              <span className={classes.content}>
                We all start this journey{" "}
                <span className={classes.highlight}>together</span>.
                <br />
                We start this revolution{" "}
                <span className={classes.highlight}>today</span> . We agree to
                be pioneers on the frontier of human sleep wellness. We sign up
                for{" "}
                <span className={classes.highlight}>
                  {" "}
                  Cosmation Alpha Trials
                </span>
                .
              </span>
            </div>
            <Typography
              variant="h5"
              color="text.secondary"
              fontWeight={"bold"}
              paragraph
              marginLeft={2.75}
              gutterBottom
              sx={{ color: "white", padding: 1 }}
            >
              What does it mean for me?
            </Typography>
            <Typography component="div" sx={{ color: "white", padding: 1 }}>
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
                  Agree to share the select recordings by uploading them on your
                  alpha trial account page
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
              sx={{ color: "white", padding: 1 }}
            >
              What do I get out of it?
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
              sx={{ color: "white", padding: 1, maxWidth: "550px" }}
            >
              We like to think that it will be a lot of fun! Imagine being able
              to visualize your dreams and see them come alive as pictures and
              drawings!. The first-time experience of seeing your dreams on the
              screen is special. It may even be disconcerting for some, but
              always sparks a lot of interesting conversations and insights.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
              sx={{ color: "white", padding: 1, maxWidth: "550px" }}
            >
              Long-term dream recall has been scientifically proven to promote
              better sleep, better relationships and improved mental health.
              This trial helps you start the habit of recording your dreams in
              the most efficient way, without the clutches of an addictive phone
              near your place of sleep, to aid digital detox.
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              fontWeight={"bold"}
              paragraph
              marginLeft={2.75}
              gutterBottom
              sx={{ color: "white", padding: 1 }}
            >
              What does it cost me?
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
              sx={{ color: "white", padding: 1, maxWidth: "550px" }}
            >
              As an alpha trial participant, it costs you nothing except your
              time and attention. We provide the free device on loan, for the
              duration of the trial. You do need an internet connection and a
              computer/phone to access your trial account, upload the recordings
              and receive the visualization. We also need your email address to
              send you links to images of your dreams, so you can share them
              with family, friends and healthcare providers at your discretion.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ color: "white", padding: 1 }}
            >
              I’m game.
            </Typography>
            <div className={classes.buttonContainer}>
              <button
                className={classes.button}
                onClick={() => navigate("/register")}
              >
                Sign up
              </button>
              <button
                className={classes.button}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </Container>
        )}
      </main>
      {/* Footer */}
      {/* End footer */}
    </div>
  );
};

export default AlphaTrials;
