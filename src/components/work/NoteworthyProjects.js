import React from "react";
import data from "../../data/data";
import Reveal from "react-reveal";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    width: "25vw",
    height: "25vh",
  },
}));
const { noteworthyProj } = data.portfolio;

const NoteworthyProjects = () => {
  return (
    <Container>
      <Typography variant='h3' align='center'>Noteworthy Projects</Typography>
      {noteworthyProj.map((project, i) => (
        <Reveal duration={i * 1000} effect="fadeInUp">
          <Grid container>
            <Grid item></Grid>
          </Grid>
        </Reveal>
      ))}
    </Container>
  );
};

export default NoteworthyProjects;
