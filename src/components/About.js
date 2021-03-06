import React from "react";
import { Box, Typography, CardMedia, Grid, Link } from "@material-ui/core";
import profilePicture from "../assets/profilePic.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const aboutMe = {
  headline: "A Little Bit About Me",
  currentTech: ["React", "MUI", "Firebase", "Javascript", "Java", "Node"],
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "inherit",
    "@media (max-width: 600px)": {
      height: "inherit",
    },
  },
  mediaContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  media: {
    height: 300,
    width: 300,
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
  links: {
    textDecoration: "none",
    color: "#FF9900",
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
        <Fade left>
          <Grid
            className={classes.mediaContainer}
            item
            xs={10}
            sm={10}
            md={4}
            lg={3}
          >
            <CardMedia
              className={classes.media}
              image={profilePicture}
              title="Profile Picture"
            />
          </Grid>
        </Fade>

        <Grid
          container
          item
          xs={10}
          sm={10}
          md={4}
          lg={3}
          justify="space-between"
          direction="column"
        >
          <Fade right>
            <Typography className={classes.headline} variant="h3">
              {aboutMe.headline}
            </Typography>
            <Typography className={classes.description}>
              A little about me, I'm a Full-Stack Web Developer, that enjoys
              manipulating the Front-End. Graduating from{" "}
              <Link
                className={classes.links}
                href="https://www.lighthouselabs.ca/"
                target="blank"
              >
                Lighthouse Labs
              </Link>{" "}
              Web Development Bootcamp program in March, a 12-week all day
              program, full of lectures, mentors, projects, and guest speakers.
              Before this program I was freelancing as a{" "}
              <Link
                className={classes.links}
                href="https://hoangdinh90.wixsite.com/hoangdinhphotography"
                target="blank"
              >
                Photographer
              </Link>{" "}
              and running a{" "}
              <Link
                className={classes.links}
                href="https://www.instagram.com/pasteisdevancouver/?igshid=1fxpbu1zhd7hc"
                target="blank"
              >
                bakery
              </Link>{" "}
              off instagram. I have a driven curiosity that keeps me constantly
              learning, to provide amazing products and services with every
              project.
            </Typography>
          </Fade>
          <Fade up>
            <Typography className={classes.te}>
              Here are a few Technologies I've been working with:
            </Typography>
            <Grid container>
              {aboutMe.currentTech.map((tech, i) => (
                <Grid item xs={4} sm={3} md={4} key={i}>
                  <Typography className={classes.te}>▹ {tech}</Typography>
                </Grid>
              ))}
            </Grid>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
