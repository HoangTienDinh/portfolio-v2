import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import Slider from "react-slick";

import imageOne from "../assets/flatlay1.jpg";
import imageTwo from "../assets/flatlay3.jpg";
import imageThree from "../assets/flatlay2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "inherit",
  },
  mediaContainer: {
  },
  media: {
    height: "calc(100vh - 56px)",
    objectFit: "contain",
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
  textBox: {
    position: "absolute",
    height: "15%",
    top: "43%",
    textAlign: "center",
  },
  text: {
    color: "#FF9900",
  }
}));

const Landing = () => {
  const classes = useStyles();

  const settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    top: 0,
  };

  return (
    <Box className={classes.root}>
      <Grid item className={classes.mediaContainer}>
        <Slider {...settings}>
          <CardMedia
            className={classes.media}
            image={imageOne}
          />
          <CardMedia
            className={classes.media}
            image={imageTwo}
          />
          <CardMedia
            className={classes.media}
            image={imageThree}
          />
        </Slider>
      </Grid>
      <Grid
        container
        className={classes.textBox}
        justify="space-between"
        direction="row"
      >
        <Grid item xs={12}>
          <Typography className={classes.text} variant="h3">Hoang Dinh</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} variant="h3">Web Developer</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
