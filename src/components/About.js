import React from "react";
import { Container, Typography, CardMedia, Grid } from "@material-ui/core";
import profilePicture from "../assets/profilePic.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  media: {
    height: 200,
    width: 200,
  },
  grid: {
    height: "inherit",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container id="about" className={classes.root}>
      <Grid
        className={classes.grid}
        container
        justify="space-evenly"
        alignItems="center"
      >
        <Fade left>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardMedia
              className={classes.media}
              image={profilePicture}
              title="Profile Picture"
            />
          </Grid>
        </Fade>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Fade right>
            <Typography variant="h3">TITLE OF THE BLURB</Typography>
            <Typography>BLURB BLURB BLURB</Typography>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
