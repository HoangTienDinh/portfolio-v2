import React from "react";
import { Card, CardMedia, Container, makeStyles, Typography } from "@material-ui/core";
import Reveal from "react-reveal/Reveal";
import data from "../../data/data";

const { featuredProj } = data.portfolio;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  left: {
    backgroundColor: "blue",
  },
  right: {
    backgroundColor: "red",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));
// write a conditional using i % 2 in className for the element to render it left or right side

const FeaturedProjects = () => {
  const classes = useStyles();

  const handleSide = (index) => {
    if (index === 1 || index % 2 === 1) {
      return classes.left;
    } else {
      return classes.right;
    }
  };

  return (
    <Container>
      {featuredProj.map((project, i) => (
        <Reveal duration="2000" effect="fadeInUp">
          <Card key={i} className={handleSide(i)}>
            <Typography>{project.title}</Typography>
            <Typography>{project.description}</Typography>
            <CardMedia
              className={classes.media}
              image={project.image}
              title="Project Image"
            />
            {project.technology.map((tech) => (
              <Typography>{tech}</Typography>
            ))}
          </Card>
        </Reveal>
      ))}
    </Container>
  );
};

export default FeaturedProjects;
