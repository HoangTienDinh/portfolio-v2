import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../assets/newWest.jpg";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'inherit'
  },
  media: {
    height: "100vh",
    width: "inherit",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
      <Box className={classes.root}>
        <CardMedia className={classes.media} image={Image} title="Landing Page">
          <Typography>Hello</Typography>
        </CardMedia>
      </Box>
  );
};

export default Landing;
