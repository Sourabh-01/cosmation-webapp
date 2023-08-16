import React from "react";
import Backdrop from "@mui/material/Backdrop";

const ImageBackdrop = ({ imageLink, setImage }) => {
  console.log(imageLink, "......");
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
      <img src={imageLink} alt="image" />
    </Backdrop>
  );
};

export default ImageBackdrop;
