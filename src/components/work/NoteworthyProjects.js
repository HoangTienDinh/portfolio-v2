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
  grid: {
    display: "grid",
    gridGap: "15px",
    position: "relative",
    marginTop: "50px",
    border: "solid 1px black",
    padding: "5%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {},
  description: {},
  tech: {
    display: "flex",
  },
  technology: {
    marginRight: "3%",
  },
  links: {
    maxWidth: "fit-content",
    margin: theme.spacing(0.5),
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
      <Typography variant="h3" align="center">
        Noteworthy Projects
      </Typography>
      <Grid
        className={classes.container}
        container
        justify="space-evenly"
        alignItems="center"
      >
        {noteworthyProj.map((project, i) => (
          <Reveal duration={i * 1000} effect="fadeInUp">
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
                {project.technology.map((tech) => (
                  <Typography className={classes.technology}>{tech}</Typography>
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
