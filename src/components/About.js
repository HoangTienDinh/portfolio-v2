import React from "react";
import { Box, Typography, CardMedia, Grid } from "@material-ui/core";
import profilePicture from "../assets/profilePic.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Reveal from "react-reveal/Reveal";
import data from "../data/data";

const { headline, description } = data.portfolio.aboutMe;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "inherit",
  },
  media: {
    height: 200,
    width: 200,
  },
  grid: {
    height: "inherit",
  },
  headline: {
    color: "#cccccc",
  },
  description: {
    color: "#E6E6CC",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Box id="about" className={classes.root}>
      <Grid
        className={classes.grid}
        container
        justify="space-evenly"
        alignItems="center"
      >
        <Reveal left>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardMedia
              className={classes.media}
              image={profilePicture}
              title="Profile Picture"
            />
          </Grid>
        </Reveal>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Reveal right>
            <Typography className={classes.headline} variant="h3">
              {headline}
            </Typography>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </Reveal>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
