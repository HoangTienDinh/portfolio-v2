import React from "react";
import data from "../../data/data";
import { makeStyles } from "@material-ui/core/styles";
import Reveal from "react-reveal/Reveal";
import { CardMedia } from "@material-ui/core";

const { featuredProj } = data.portfolio;

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    backgroundColor: "blue",
  },
  right: {
    backgroundColor: "red",
  },
  media: {
    height: 200,
    width: 200,
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
    <div>
      {featuredProj.map((project, i) => (
        <Reveal duration="2000" effect="fadeInUp">
          <div key={i} className={handleSide(i)}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <CardMedia className={classes.media} image={project.image} title="Project Image" />
            {project.image}
            {project.technology.map((tech) => (
              <h3>{tech}</h3>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default FeaturedProjects;
