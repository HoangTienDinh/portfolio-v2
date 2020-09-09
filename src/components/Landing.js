import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../assets/newWest.jpg";
import Typography from "@material-ui/core/Typography";
import Reveal from "react-reveal/Reveal";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "100vh",
    width: "100vw",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Reveal duration='2000' effect='fadeInUp'>
      <Card>
        <CardMedia className={classes.media} image={Image} title="Landing Page">
          <Typography>Hello</Typography>
        </CardMedia>
      </Card>
    </Reveal>
  );
};

export default Landing;
