import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import NoteworthyProjects from "./NoteworthyProjects";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Reveal from "react-reveal/Reveal";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#cccccc",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
}));
const Work = () => {
  const classes = useStyles();

  return (
    <Container id="work">
      <Reveal duration={2000} effect="fadeInUp">
        <Container>
          <Typography className={classes.title} variant="h3">
            Some Things I've Built.{" "}
          </Typography>
        </Container>
      </Reveal>
      <FeaturedProjects />
      <NoteworthyProjects />
    </Container>
  );
};

export default Work;
