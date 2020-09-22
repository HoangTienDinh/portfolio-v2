import React, { useState, useEffect } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Typist from "react-typist";
import { useTransition, animated, config } from "react-spring";

import imageOne from "../assets/flatlay1.jpg";
import imageTwo from "../assets/flatlay2.jpg";
import imageThree from "../assets/flatlay3.jpg";

const slides = [
  { id: 0, image: imageOne },
  { id: 1, image: imageTwo },
  { id: 2, image: imageThree },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "inherit",
  },
  media: {
    height: "calc(100vh - 56px)",
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

const Landing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CardMedia className={classes.media} image={imageOne} title="Landing Page">
        <Typist>
          <Typography className={classes.name} variant="h3">
            Hoang Dinh
          </Typography>
          <Typist.Delay ms={200} />
          <Typography className={classes.headline} variant="h3">
            Photographer
          </Typography>
          <Typist.Backspace count={12} delay={200} />
          <Typography className={classes.headline} variant="h3">
            Web Developer
          </Typography>
        </Typist>
      </CardMedia>
    </Box>
  );
};

export default Landing;
