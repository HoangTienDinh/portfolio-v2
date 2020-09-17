import React from "react";
import { Box, Typography, CardMedia, Grid, Link } from "@material-ui/core";
import profilePicture from "../assets/profilePic.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Reveal from "react-reveal/Reveal";

const aboutMe = {
  headline: "A Little Bit About Me",
  currentTech: ["React", "MUI", "Firebase", "Javascript", "Python", "Node"],
};

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
          </Reveal>
          <Reveal up>
            <Typography className={classes.te}>
              Here are a few Technologies I've been working with:
            </Typography>
            <Grid container spacing={12}>
              {aboutMe.currentTech.map((tech, i) => (
                <Grid item xs={4} key={i}>
                  <Typography className={classes.te}>- {tech}</Typography>
                </Grid>
              ))}
            </Grid>
          </Reveal>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
