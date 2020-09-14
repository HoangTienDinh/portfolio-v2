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

const useStyles = makeStyles(() => ({
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
    gridColumn: "1 / -1",
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
}));

const FeaturedProjects = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  // write a conditional using i % 2 in className for the element to render it left or right side
  const handleSide = (project, index) => {
    let contentContainer;
    let imageContainer;

    if (index === 0 || index % 2 === 0) {
      contentContainer = classes.contentRight;
      imageContainer = classes.imageLeft;
    } else {
      contentContainer = classes.contentLeft;
      imageContainer = classes.imageRight;
    }

    // if (index === 0 || index % 2 === 0) {

    //   contentContainer = classes.contentLeft
    //   imageContainer = classes.imageLeft

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
            <Typography>{project.title}</Typography>
          </Link>
          <Typography>{project.description}</Typography>
          {project.technology.map((tech, i) => (
            <Typography key={i}>{tech}</Typography>
          ))}
        </Grid>
      </Grid>
    );
    // }

    // else {
    //   return (
    //     <Grid Container key={index} className={classes.right}>
    //       <Grid item>
    //         <Link
    //           href={project.website ? project.website : project.github}
    //           onClick={preventDefault}
    //         >
    //           <Typography>{project.title}</Typography>
    //         </Link>
    //         <Typography>{project.description}</Typography>
    //         {project.technology.map((tech, i) => (
    //           <Typography key={i}>{tech}</Typography>
    //         ))}
    //       </Grid>

    //       <Grid item>
    //         <Link
    //           href={project.website ? project.website : project.github}
    //           onClick={preventDefault}
    //         >
    //           <CardMedia
    //             className={classes.media}
    //             image={project.image}
    //             title={project.title}
    //           />
    //         </Link>
    //       </Grid>
    //     </Grid>
    //   );
    // }
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
