import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imageContainer: {
    display: "flex",
    width: "90%",
    height: "90%",
    objectFit: "contain"
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
      open={open}
      onClick={handleClose}
    >
      <img className={classes.imageContainer} src={imageLink} alt="img" />
    </Backdrop>
  );
};

export default ImageBackdrop;
