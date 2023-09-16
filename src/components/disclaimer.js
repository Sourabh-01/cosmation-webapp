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

const Disclaimer = () => {
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
              Welcome to a website of Cosmation AB, a limited liability company
              under Swedish law, with registered office at number 0436.323.915
              By using this website and our services (hereinafter referred to as
              the "Website" and “Service”), you accept these general terms and
              conditions of use (hereinafter referred to as the "Terms &
              Conditions"). Please read these Terms & Conditions, which apply to
              the entire Website, carefully.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              We reserve the right, in our sole discretion, to change, modify,
              add or remove portions of these Terms & Conditions at any time.
              You should check these Terms & Conditions periodically for
              changes. By using this Website and our Service, after we post any
              changes to these Terms & Conditions, you agree to accept those
              changes, whether or not you have reviewed them. If you do not
              agree to these Terms & Conditions, you should no longer use our
              Website and Service.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              Unless otherwise specified, we grant you a non-exclusive,
              non-transferable, limited right to access, use and display this
              Website and the material provided hereon for your personal,
              non-commercial use, provided that you comply fully with the
              provisions of these Terms & Conditions.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              You acknowledge that this Website contains information, software,
              photographs, text, graphics, messages, comments, feedback, ideas,
              notes, articles and other materials (hereinafter collectively
              referred to as the "Content") that are protected by copyrights,
              data base rights, patents, trademarks, trade secrets and/or other
              proprietary rights. You also acknowledge that these rights apply
              to both current forms, media and technologies, as well as to those
              that would be developed later. The entire Content is protected by
              applicable copyright laws and we own a copyright in the choice,
              coordination, formatting and improvement of such Content.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              Any modification of the Content or use of the Content for any
              other purpose than your personal use in compliance with the
              provisions of these Terms & Conditions, including, but not limited
              to, use of any Content in printed form or on any other website or
              networked computer environment, is strictly prohibited unless you
              receive the prior written consent of Cosmation AB. By using this
              Website you agree not to use any robot, spider, other automatic
              device, or manual process to monitor or copy web pages from our
              Website or any content contained herein without Cosmation AB's
              prior expressed written consent. You undertake not to use any
              device, nor software to interfere or attempt to interfere with the
              proper working of this Website. You further undertake not to take
              any action that imposes an unreasonable or disproportionately
              large load on the infrastructure of the Website.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              Cosmation AB is committed to the protection of your privacy and
              security. It will process all personal data it collects from you
              in accordance with its Privacy Policy (a copy of which can be
              found on this Website).
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              The data and information that are made available on this Website
              and via our Service can under no circumstances replace your
              personal judgement or that of a licensed medical professional. It
              is in no way to be considered a medical advice, but is to be
              simply treated as entertainment and inspiration only.
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              fontWeight={"bold"}
              paragraph
              marginLeft={2.75}
              gutterBottom
            >
              Except in case of any malicious intent or gross negligence of
              Cosmation AB, it shall not be liable for:
            </Typography>
            <Typography component="div">
              <ul>
                <li>
                  any damage resulting from technical problems encountered on
                  this Website and our Service, including those caused by
                  viruses, system interruptions, third party websites referred
                  to or referring to this Website.
                </li>
                <li>
                  any damage caused to your IT infrastructure and any loss of
                  information resulting from the downloading of elements of the
                  Website and our Service.
                </li>
                <li>any damage resulting from interactive applications.</li>
                <li>
                  any damage relating to your use of this Website and Service,
                  of which the main cause is an act of God, facts or third
                  parties which are not under the control of Cosmation AB.
                </li>
                <li>
                  any damage resulting, insofar as the financial or medical
                  information section is concerned, from material errors in the
                  data and information on the Website and Service, and insofar
                  the other sections are concerned, from any error in the data
                  and information on the Website;.
                </li>
                <li>
                  any damage resulting from errors you commit when using this
                  Website.
                </li>
                <li>
                  any damage resulting from your (erroneous) assessment of the
                  data and information on this Website.
                </li>
              </ul>
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              You agree to indemnify Cosmation AB and its representatives from
              any and all damages they suffer arising from your improper use of
              this Website and our Service, your violation of these Terms &
              Conditions, or any other infringement in relation with this
              Website.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              These Terms & Conditions shall always be governed by and construed
              in accordance with the laws of Sweden, without giving effect to
              any principles of conflicts of law (Private International Law).
              You agree that any action arising out of or relating to your use
              of this Website and our Service or these Terms & Conditions shall
              be filed only before the Courts of the Stockholm, Sweden and you
              hereby consent and submit to the personal jurisdiction of such
              court for the purposes of litigating any such action.
            </Typography>
            <Typography
              component="p"
              color="text.primary"
              marginBottom={2}
              marginLeft={2.75}
            >
              If you have any questions or concerns, you may contact Cosmation
              AB by email at <a>info@cosmation.ai</a>
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

export default Disclaimer;
