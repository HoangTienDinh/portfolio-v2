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
    display: "flex",
    "@media (max-width: 960px)": {
      justifyContent: "center",
    },
  },
  headline: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "6%",
  },
  text: {
    fontSize: "4rem",
    "@media (max-width: 960px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} id="contact">
      <CardMedia className={classes.media} image={Image} title="Landing Page">
        <Box className={classes.headline}>
          <Typography className={classes.text}>
            Let's Start Chatting Today!
          </Typography>
          <Typography className={classes.text}>
            Use any of the links below.
          </Typography>
        </Box>
        <SocialFooter />
        <Footer />
      </CardMedia>
    </Box>
  );
};

export default Contact;
