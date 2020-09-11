import React from "react";
import data from "../../data/data";
import Reveal from "react-reveal";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const { noteworthyProj } = data.portfolio;

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gridGap: '15px',
    position: "relative",
    marginTop: "50px",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
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
            <Grid className={classes.grid} item >
              <Typography>{project.title}</Typography>
              <Typography>{project.description}</Typography>
              {project.technology.map(tech => (
                <Typography>{tech}</Typography>
              ))}
            </Grid>
          </Reveal>
        ))}
      </Grid>
    </Container>
  );
};

export default NoteworthyProjects;
