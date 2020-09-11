import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import NoteworthyProjects from "./NoteworthyProjects";
import { Container } from "@material-ui/core";

const Work = () => {
  return (
    <Container id="work">
      <FeaturedProjects />
      <NoteworthyProjects />
    </Container>
  );
};

export default Work;
