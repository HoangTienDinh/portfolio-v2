import React from "react";
import Image from "../assets/newWest.jpg";
import { Box, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./layout/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "inherit",
    position: "relative",
  },
  media: {
    height: "100vh",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id="contact">
      <CardMedia className={classes.media} image={Image} title="Landing Page">
        <Footer />
      </CardMedia>
    </Box>
  );
};

export default Contact;
