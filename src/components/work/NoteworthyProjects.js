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
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  noteworthy: {
    color: "#cccccc",
    textAlign: "center",
    marginBottom: theme.spacing(5),
  },
  project: {
    margin: theme.spacing(2),
    border: "solid 5px black",
    borderRadius: "10px",
    transition: "transform .3s ease-out",
    "&:hover": {
      transform: "translate(0, -15px)",
      boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    },
    "@media (min-width: 1600px)": {
      maxWidth: "30%",
    },
  },
  header: {
    paddingBottom: theme.spacing(1),
  },
  title: {
    color: "#E6E6CC",
    paddingBottom: theme.spacing(1),
  },
  description: {
    color: "#6699CC",
    paddingBottom: theme.spacing(1),
  },
  technology: {
    paddingRight: theme.spacing(2),
    color: "#4060bf",
    fontStyle: "italic",
  },
  links: {
    margin: theme.spacing(0.5),
    "&:hover": {
      color: "#FF9900",
    },
  },
}));

const NoteworthyProjects = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Reveal duration={2000} effect="fadeInUp">
        <Typography variant="h3" className={classes.noteworthy}>
          Other Noteworthy Projects
        </Typography>
      </Reveal>

      <Grid container justify="center" spacing={6}>
        {noteworthyProj.map((project, i) => (
          <Grid
            container
            item
            key={i}
            xs={10}
            sm={8}
            md={8}
            lg={4}
            direction="column"
            className={classes.project}
          >
            <Reveal duration={i * 500} effect="fadeInUp">
              <Grid
                container
                className={classes.header}
                justify="space-between"
              >
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

              <Grid item>
                <Typography className={classes.title} variant="h5">
                  {project.title}
                </Typography>
              </Grid>

              <Grid item>
                <Typography className={classes.description}>
                  {project.description}
                </Typography>
              </Grid>

              <Grid container>
                {project.technology.map((tech, i) => (
                  <Grid item key={i} className={classes.technology}>
                    <Typography>{tech}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NoteworthyProjects;
