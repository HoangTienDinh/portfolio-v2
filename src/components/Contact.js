import React from "react";
import Image from "../assets/contact.jpg";
import { Box, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./layout/Footer";
import SocialFooter from "./layout/SocialFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "inherit",
    position: "relative",
  },
  media: {
    height: "100vh",
  },
  headline: {
    position: "absolute",
    top: "100px",
    left: "100px",
    "@media (max-width: 960px)": {
      top: "100px",
      left: "55px",
    },
  },
  text: {
    fontSize: "4rem",
    "@media (max-width: 960px)": {
      fontSize: "1.5rem",
    },
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id="contact">
      <CardMedia className={classes.media} image={Image} title="Landing Page">
        <Box className={classes.headline}>
          <Typography className={classes.text}>Let's Start Chatting Today!</Typography>
          <Typography className={classes.text}>Use any of the links below.</Typography>
        </Box>
        <SocialFooter />
        <Footer />
      </CardMedia>
    </Box>
  );
};

export default Contact;
