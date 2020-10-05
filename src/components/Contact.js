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
    fontSize: "30px",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id="contact">
      <CardMedia className={classes.media} image={Image} title="Landing Page">
          <Typography className={classes.headline}>
            Let's Start Chatting Today!
          </Typography>
          <Typography className={classes.headline}>
            Use any of the links below.
          </Typography>
          <SocialFooter />
          <Footer />
      </CardMedia>
    </Box>
  );
};

export default Contact;
