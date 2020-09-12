import React, { useState, useEffect } from "react";
import {
  Grid,
  CardMedia,
  Container,
  makeStyles,
  Typography,
  Link,
} from "@material-ui/core";
import Reveal from "react-reveal/Reveal";
import data from "../../data/data";

const { featuredProj } = data.portfolio;

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  gridLeft: {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "repeat(12, 1fr)",
    alignItems: "center",
    backgroundColor: "blue",
    marginBottom: "100px",
  },
  right: {
    backgroundColor: "red",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  title: {
    textAlign: (side) => (side ? "right" : "left"),
  },
  content: {
    gridColumn: "7 / -1",
    textAlign: "right",
    gridArea: "1 / 1 / -1 / 7",
    position: "relative",
  },
  image: {
    gridColumn: "1 / 8",
    boxShadow: "0 10px 30px -15px black",
    transition: "var(--transtion)",
    gridArea: "1 / 6 / -1 / -1",
    position: "relative",
    zIndex: "1",
  },
}));

const FeaturedProjects = () => {
  const [side, setSide] = useState(true);
  const classes = useStyles(side);
  const preventDefault = (event) => event.preventDefault();

  // write a conditional using i % 2 in className for the element to render it left or right side
  const handleSide = (project, index) => {
    if (index === 0 || index % 2 === 0) {
      // HOW DO I HANDLE STATE AND FLIP !SIDE TO RENDER THE CORRECT CSS

      return (
        <Grid Container key={index} className={classes.gridLeft}>
          <Grid item className={classes.image}>
            <Link
              href={project.website ? project.website : project.github}
              onClick={preventDefault}
            >
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.title}
              />
            </Link>
          </Grid>
          <Grid item className={classes.content}>
            <Link
              href={project.website ? project.website : project.github}
              onClick={preventDefault}
            >
              <Typography className={classes.title}>{project.title}</Typography>
            </Link>
            <Typography>{project.description}</Typography>
            {project.technology.map((tech, i) => (
              <Typography key={i}>{tech}</Typography>
            ))}
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid Container key={index} className={classes.right}>
          <Grid item>
            <Link
              href={project.website ? project.website : project.github}
              onClick={preventDefault}
            >
              <Typography className={classes.title}>{project.title}</Typography>
            </Link>
            <Typography>{project.description}</Typography>
            {project.technology.map((tech, i) => (
              <Typography key={i}>{tech}</Typography>
            ))}
          </Grid>

          <Grid item>
            <Link
              href={project.website ? project.website : project.github}
              onClick={preventDefault}
            >
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.title}
              />
            </Link>
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <Container>
      {featuredProj.map((proj, ind) => (
        <Reveal key={ind} duration="2000" effect="fadeInUp">
          {handleSide(proj, ind)}
        </Reveal>
      ))}
    </Container>
  );
};

export default FeaturedProjects;
