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
    textAlign: "center",
    marginBottom: theme.spacing(5),
  },
  project: {
    border: "solid 1px black",
    padding: "5%",
  },
  title: {
    color: "#E6E6CC",
  },
  description: {
    color: "#6699CC",
  },
  technology: {
    marginRight: theme.spacing(1),
    color: "#4060bf",
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
          Noteworthy Projects
        </Typography>
      </Reveal>

      <Grid container justify="center" spacing={4}>
        {noteworthyProj.map((project, i) => (
            <Grid
              container
              item
              key={i}
              xs={12}
              sm={8}
              md={8}
              lg={4}
              direction="column"
              className={classes.project}
            >
              <Reveal duration={i * 500} effect="fadeInUp">
                <Grid container item justify="space-between">
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
                  <Typography className={classes.title} variant="h6">
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
