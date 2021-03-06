import React from "react";
import {
  Grid,
  CardMedia,
  Container,
  makeStyles,
  Typography,
  Link,
  Hidden,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Fade from "react-reveal/Fade";
import data from "../../data/data";

const { featuredProj } = data.portfolio;

const useStyles = makeStyles((theme) => ({
  projectContainer: {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "repeat(12, 1fr)",
    alignItems: "center",
    marginBottom: "100px",
  },
  media: {
    height: "100%",
    paddingTop: "56.25%",
  },
  contentLeft: {
    gridColumn: "1 / 7",
    textAlign: "left",
    gridArea: "1 / 1 / -1 / 7",
    position: "relative",
    zIndex: "1",
  },
  contentRight: {
    gridColumn: "7 / -1",
    textAlign: "right",
    gridArea: "1 / 1 / -1 / 7",
    position: "relative",
    zIndex: "1",
  },
  imageLeft: {
    gridColumn: "1 / 9",
    boxShadow: "-20px 20px 40px black",
    transition: "var(--transtion)",
    gridArea: "1 / 6 / -1 / -1",
    position: "relative",
    filter: "opacity(0.5)",
    "&:hover": {
      filter: "none",
    },
  },
  imageRight: {
    gridColumn: "5 / 13",
    boxShadow: "20px 20px 40px black",
    transition: "var(--transtion)",
    gridArea: "1 / 6 / -1 / -1",
    position: "relative",
    filter: "opacity(0.5)",
    "&:hover": {
      filter: "none",
    },
  },
  titleLeft: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    color: "#E6E6CC",
    paddingRight: "35%",
    "&:hover": {
      color: "#FF9900",
    },
  },
  titleRight: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    color: "#E6E6CC",
    paddingLeft: "35%",
    "&:hover": {
      color: "#FF9900",
    },
  },
  headlineLeft: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    paddingRight: "35%",
    color: "#FF9900",
  },
  headlineRight: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    paddingLeft: "35%",
    color: "#FF9900",
  },
  descriptionLeft: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    color: "#8BADC1",
    background: "#102a44",
  },
  descriptionRight: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    color: "#8BADC1",
    background: "#102a44",
  },
  techWrapperLeft: {
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: theme.spacing(1),
    paddingRight: "35%",
    color: "#8BADC1",
    "@media (max-width: 600px)": {
      paddingRight: 0,
    },
  },
  techWrapperRight: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(1),
    paddingLeft: "35%",
    color: "#8BADC1",
    "@media (max-width: 600px)": {
      paddingLeft: 0,
    },
  },
  styledTechLeft: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    border: "2px solid black",
  },
  styledTechRight: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    border: "2px solid black",
  },
  linkWrapperLeft: {
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  linkWrapperRight: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(1),
  },
  styledLinkLeft: {
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "#FF9900",
    },
  },
  styledLinkRight: {
    marginRight: theme.spacing(1),
    "&:hover": {
      color: "#FF9900",
    },
  },
  mobileContentLeft: {
    gridColumn: "1 / 13",
    textAlign: "left",
    gridArea: "1 / 1 / -1 / 7",
    zIndex: 2,
  },
  mobileContentRight: {
    gridColumn: "1 / 13",
    textAlign: "right",
    gridArea: "1 / 1 / -1 / 7",
    zIndex: 2,
  },
}));

const FeaturedProjects = () => {
  const classes = useStyles();

  const handleSide = (project, index) => {
    let contentContainer;
    let imageContainer;
    let techWrapper;
    let styledTech;
    let title;
    let headline;
    let description;
    let linkWrapper;
    let styledLink;
    let mobileContentContainer;

    if (index === 0 || index % 2 === 0) {
      imageContainer = classes.imageLeft;
      contentContainer = classes.contentRight;
      techWrapper = classes.techWrapperRight;
      styledTech = classes.styledTechRight;
      title = classes.titleRight;
      headline = classes.headlineRight;
      description = classes.descriptionRight;
      linkWrapper = classes.linkWrapperRight;
      styledLink = classes.styledLinkRight;
      mobileContentContainer = classes.mobileContentRight;
    } else {
      imageContainer = classes.imageRight;
      contentContainer = classes.contentLeft;
      techWrapper = classes.techWrapperLeft;
      styledTech = classes.styledTechLeft;
      title = classes.titleLeft;
      headline = classes.headlineLeft;
      description = classes.descriptionLeft;
      linkWrapper = classes.linkWrapperLeft;
      styledLink = classes.styledLinkLeft;
      mobileContentContainer = classes.mobileContentLeft;
    }

    // try using grid system in your project
    return (
      <Grid container key={index} className={classes.projectContainer}>
        <Hidden only={["xs", "sm"]}>
          <Grid item className={imageContainer}>
            <Link
              href={project.website ? project.website : project.github}
              target="_blank"
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
              target="_blank"
            >
              <Typography className={title} variant="h4">
                {project.title}
              </Typography>
            </Link>
            <Typography className={headline} variant="h6">
              {project.headline}
            </Typography>
            <Typography className={description}>
              {project.description}
            </Typography>
            <Grid className={techWrapper} item>
              {project.technology.map((tech, i) => (
                <Typography key={i} className={styledTech}>
                  {tech}
                </Typography>
              ))}
            </Grid>
            <Grid item className={linkWrapper}>
              {project.github && (
                <Link
                  className={styledLink}
                  href={project.github}
                  target="blank"
                >
                  <GitHubIcon />
                </Link>
              )}
              {project.website && (
                <Link
                  className={styledLink}
                  href={project.website}
                  target="_blank"
                >
                  <OpenInNewIcon />
                </Link>
              )}
            </Grid>
          </Grid>
        </Hidden>

        <Hidden only={["md", "lg", "xl"]}>
          <Grid item className={mobileContentContainer}>
            <Link
              href={project.website ? project.website : project.github}
              target="_blank"
            >
              <Typography className={title} variant="h4">
                {project.title}
              </Typography>
            </Link>
            <Typography className={headline} variant="h6">
              {project.headline}
            </Typography>
            <Typography className={description}>
              {project.description}
            </Typography>
            <Grid item className={techWrapper}>
              {project.technology.map((tech, i) => (
                <Typography key={i} className={styledTech}>
                  {tech}
                </Typography>
              ))}
            </Grid>
            <Grid item className={linkWrapper}>
              {project.github && (
                <Link
                  className={styledLink}
                  href={project.github}
                  target="blank"
                >
                  <GitHubIcon />
                </Link>
              )}
              {project.website && (
                <Link
                  className={styledLink}
                  href={project.website}
                  target="_blank"
                >
                  <OpenInNewIcon />
                </Link>
              )}
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    );
  };

  return (
    <Container>
      {featuredProj.map((proj, ind) => (
        <Fade key={ind} duration={2000} bottom>
          {handleSide(proj, ind)}
        </Fade>
      ))}
    </Container>
  );
};

export default FeaturedProjects;
