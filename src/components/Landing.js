import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../assets/newWest.jpg";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Typist from "react-typist";

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

const Landing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CardMedia className={classes.media} image={Image} title="Landing Page">
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
