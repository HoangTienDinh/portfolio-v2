import React from "react";
import Landing from "./Landing";
import { Container, Typography, CardMedia, Card } from "@material-ui/core";
import profilePicture from "../assets/profilePic.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container id="about" className={classes.root}>
        <CardMedia
          className={classes.media}
          image={profilePicture}
          title="Profile Picture"
        />
      <Typography>BLURB BLURB BLURB</Typography>
    </Container>
  );
};

export default About;
