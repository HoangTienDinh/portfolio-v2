import React from "react";
import { Box, Typography, CardMedia, Grid } from "@material-ui/core";
import profilePicture from "../assets/profilePic.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Reveal from "react-reveal/Reveal";
import data from "../data/data";

const { headline, description, currentTech } = data.portfolio.aboutMe;

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
    marginBottom: theme.spacing(5),
  },
  description: {
    color: "#E6E6CC",
    marginBottom: theme.spacing(3),
  },
  te: {
    color: "#E6E6CC",
  },
  technology: {},
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

        <Grid
          container
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          justify="space-between"
        >
          <Reveal right>
            <Typography className={classes.headline} variant="h3">
              {headline}
            </Typography>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </Reveal>
          <Reveal up>
            <Typography className={classes.te}>
              Here are a few Technologies I've been working with:
            </Typography>
            <Grid container>
              {currentTech.map((tech, i) => (
                <Typography key={i}>-{tech}</Typography>
              ))}
            </Grid>
          </Reveal>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
