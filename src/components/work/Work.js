import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import NoteworthyProjects from "./NoteworthyProjects";
import { Container, Typography } from "@material-ui/core";
import Reveal from "react-reveal/Reveal";

const Work = () => {
  return (
    <Container id="work">
      <Reveal duration="2000" effect="fadeInUp">
        <Container>
          <Typography variant="h3">Some Things I've Built. </Typography>
        </Container>
      </Reveal>
      <FeaturedProjects />
      <NoteworthyProjects />
    </Container>
  );
};

export default Work;
