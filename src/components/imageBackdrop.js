import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { makeStyles } from "@mui/styles";
import { ReactComponent as Download } from "../assets/downloadIcon.svg";
import { ReactComponent as Close } from "../assets/crossV2.svg";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";
import {
  WhatsappShareButton,
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const useStyles = makeStyles({
  imageContainer: {
    display: "flex",
    width: "90%",
    height: "90%",
    objectFit: "contain",
    position: "relative",
  },
  backdrop: {
    "@media (min-width: 400px)": {
      display: "flex !important",
      flexFlow: "column !important",
    },
    "@media (min-width: 1024px)": {
      display: "flex !important",
      flexFlow: "row !important",
    },
  },
  optionContainer: {
    display: "flex !important",
    position: "relative",
    alignItems: "center",
    "@media (min-width: 1024px)": {
      right: "250px !important",
    },
    "@media (min-width: 400px)": {
      bottom: "100px !important",
      right: 0,
    },
  },
  downloadButton: {
    width: 40,
    height: 40,
    fill: "white",
    cursor: "pointer",
  },
  closeButton: {
    width: 25,
    fill: "white",
    cursor: "pointer",
  },
  socialMedia: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const ImageBackdrop = ({ imageLink, setImage }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    setImage(null);
  };
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      className={classes.backdrop}
      open={open}
    >
      <img className={classes.imageContainer} src={imageLink} alt="img" onClick={handleClose}/>
      <div className={classes.optionContainer}>
        <Download
          className={classes.downloadButton}
          onClick={() => saveAs(imageLink, "Glimpse")}
        />
        {/* <Button
          type="submit"
          fullWidth
          variant="text"
          sx={{ mt: 3, mb: 2, color: "white" }}
          onClick={() => saveAs(imageLink, "Glimpse")}
        >
          Download
        </Button> */}
        <div className={classes.socialMedia}>
          <FacebookShareButton
            url={imageLink}
            hashtag={"#Glimpse..."}
            style={{ marginLeft: 10 }}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={imageLink}
            hashtag={"#Glimpse..."}
            style={{ marginLeft: 10 }}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
          <TwitterShareButton
            url={imageLink}
            hashtag={"#Glimpse..."}
            style={{ marginLeft: 10 }}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </Backdrop>
  );
};

export default ImageBackdrop;
