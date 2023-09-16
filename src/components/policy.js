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

const Policy = () => {
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
              Cosmation shall treat the trust placed in us by our users, our
              communities and our regulators with utmost responsibility and
              sincerity. We will not misuse the user data ourselves for
              commercial purposes. We will invest in and ensure the deployment
              of best available security mechanisms to protect collective and
              individual data.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              What is shared with us will <strong> never</strong> be shared with
              anyone else, unless on explicit and specific user instruction.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              We will comply with all EU laws regarding user data once the
              product and offerings are made commercially available. For the
              purposes of current trials, the users agree to indemnify us from
              any such compliance, even though we try our level best to include
              them in our trial scope.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              Any change to the privacy policy or usage of data will be
              communicated in advance to all the users.
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

export default Policy;
