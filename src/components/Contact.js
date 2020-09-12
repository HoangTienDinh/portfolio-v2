import React from "react";
import Image from "../assets/newWest.jpg";
import { Box, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "inherit",
  },
  media: {
    height: "100vh",
  },
  headline: {
    position: "absolute",
    color: "white",
    top: "50%",
    left: "5%",
  },
  name: {
    position: "absolute",
    color: "white",
    top: "40%",
    left: "5%",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id="contact">
      <CardMedia
        className={classes.media}
        image={Image}
        title="Landing Page"
      ></CardMedia>
    </Box>
  );
};

export default Contact;
