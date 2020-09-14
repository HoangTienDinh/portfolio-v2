import React from "react";
import data from "../../data/data";
import Reveal from "react-reveal";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Link,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import FolderIcon from "@material-ui/icons/Folder";

const { noteworthyProj } = data.portfolio;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    marginTop: "10%",
    marginBottom: "10%",
  },
  noteworthy: {
    color: "#cccccc",
    textAlign: 'center',
  },
  grid: {
    display: "grid",
    gridGap: "15px",
    position: "relative",
    marginTop: "50px",
    border: "solid 1px black",
    padding: "5%",
    maxWidth: 345,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "#E6E6CC",
  },
  description: {
    color: "#6699CC",
  },
  tech: {
    display: "flex",
  },
  technology: {
    marginRight: "3%",
    color: "#4060bf",
  },
  links: {
    maxWidth: "fit-content",
    margin: theme.spacing(0.5),
    "&:hover": {
      color: "#FF9900",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const NoteworthyProjects = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Reveal duration={2000} effect="fadeInUp">
        <Typography variant='h3' className={classes.noteworthy}>
          Noteworthy Projects
        </Typography>
      </Reveal>
      <Grid
        className={classes.container}
        container
        justify="space-evenly"
        alignItems="center"
        spacing={3}
      >
        {noteworthyProj.map((project, i) => (
          <Reveal key={i} duration={i * 500} effect="fadeInUp">
            <Grid className={classes.grid} item>
              <Grid className={classes.header} item>
                <FolderIcon />
                <Grid item>
                  {project.github && (
                    <Link
                      className={classes.links}
                      href={project.github}
                      target="blank"
                    >
                      <GitHubIcon />
                    </Link>
                  )}
                  {project.website && (
                    <Link
                      className={classes.links}
                      href={project.website}
                      target="blank"
                    >
                      <OpenInNewIcon />
                    </Link>
                  )}
                </Grid>
              </Grid>
              <Typography className={classes.title} variant="h6">
                {project.title}
              </Typography>
              <Typography className={classes.description}>
                {project.description}
              </Typography>
              <Grid className={classes.tech} item>
                {project.technology.map((tech, i) => (
                  <Typography key={i} className={classes.technology}>
                    {tech}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Reveal>
        ))}
      </Grid>
    </Container>
  );
};

export default NoteworthyProjects;
