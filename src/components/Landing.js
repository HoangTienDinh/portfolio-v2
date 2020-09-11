import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../assets/newWest.jpg";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

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
    top: "45%",
    left: "5%",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CardMedia className={classes.media} image={Image} title="Landing Page">
        <Typography className={classes.headline} variant="h3">
          Web Developer
        </Typography>
      </CardMedia>
    </Box>
  );
};

export default Landing;
