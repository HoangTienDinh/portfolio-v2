import React from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  projectContainer: {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "repeat(12, 1fr)",
    alignItems: "center",
    marginBottom: "100px",
    border: "2px solid black",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  contentRight: {
    gridColumn: "7 / -1",
    textAlign: "right",
    gridArea: "1 / 1 / -1 / 7",
    position: "relative",
    zIndex: "1",
  },
  contentLeft: {
    gridColumn: "1 / -4",
    textAlign: "left",
    gridArea: "1 / 1 / -1 / 7",
    position: "relative",
    zIndex: "1",
  },
  imageLeft: {
    gridColumn: "1 / 8",
    boxShadow: "0 10px 30px -15px black",
    transition: "var(--transtion)",
    gridArea: "1 / 6 / -1 / -1",
    position: "relative",
  },
  imageRight: {
    gridColumn: "48 / 8",
    boxShadow: "0 10px 30px -15px black",
    transition: "var(--transtion)",
    gridArea: "1 / 6 / -1 / -1",
    position: "relative",
  },
  techWrapperRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  techWrapperLeft: {
    display: "flex",
  },
  titleRight: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  titleLeft: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  descriptionRight: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    color: '#8BADC1',
    background: '#102a44',
  },
  descriptionLeft: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    color: '#8BADC1',
    background: '#102a44',
  },
  styledTechRight: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    border: "2px solid black",
    marginBottom: theme.spacing(1),
  },
  styledTechLeft: {
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
    border: "2px solid black",
    marginBottom: theme.spacing(1),
  },
}));

const FeaturedProjects = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const handleSide = (project, index) => {
    let contentContainer;
    let imageContainer;
    let techWrapper;
    let styledTech;
    let title;
    let description;
    let linkWrapper;

    if (index === 0 || index % 2 === 0) {
      imageContainer = classes.imageLeft;
      contentContainer = classes.contentRight;
      techWrapper = classes.techWrapperRight;
      styledTech = classes.styledTechRight;
      title = classes.titleRight;
      description = classes.descriptionRight;

    } else {
      imageContainer = classes.imageRight;
      contentContainer = classes.contentLeft;
      techWrapper = classes.techWrapperLeft;
      styledTech = classes.styledTechLeft;
      title = classes.titleLeft;
      description = classes.descriptionLeft;
    }

    return (
      <Grid Container key={index} className={classes.projectContainer}>
        <Grid item className={imageContainer}>
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
        <Grid item className={contentContainer}>
          <Link
            href={project.website ? project.website : project.github}
            onClick={preventDefault}
          >
            <Typography className={title}>{project.title}</Typography>
          </Link>
          <Typography className={description}>{project.description}</Typography>
          <Grid item className={techWrapper}>
            {project.technology.map((tech, i) => (
              <Typography key={i} className={styledTech}>
                {tech}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
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
