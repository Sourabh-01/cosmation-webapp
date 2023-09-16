import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

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
});

const AboutUs = () => {
  const classes = useStyles();
  const defaultTheme = createTheme();
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
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              Cosmation AB is a Swedish startup, providing devices, software and
              services in the domain of sleep wellness. We focus on
              psychological wellness and curing digital fatigue through our
              solutions.
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              fontWeight={"bold"}
              paragraph
              marginLeft={2.75}
              gutterBottom
            >
              The company provides:
            </Typography>
            <Typography component="div">
              <ul>
                <li>Device to recording feelings and dream recalls.</li>
                <li>Service to transcribe and visualize user’s voice notes.</li>
              </ul>
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              Our vision is to provide tools for humans to explore their psyche
              – both at an individual and collective level, enable this
              exploration to be shared in communities for learning, empathy and
              solidarity. We would like to provide objective and subjective
              measurements and records of human psychological evolution over
              large swaths of time, and in turbulent times of rapid
              environmental, societal and economic changes.
            </Typography>
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

export default AboutUs;
