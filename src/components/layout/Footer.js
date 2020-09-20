import React from "react";
import { Typography, Link, Hidden, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

import data from "../../data/data";

const { social } = data.portfolio;

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: theme.spacing(2),
    position: "absolute",
    width: "100%",
  },
  footer: {
    "&:hover": {
      color: "#FF9900",
    },
  },
  links: {
    height: theme.spacing(4),
    maxWidth: "fit-content",
    margin: theme.spacing(0.5),
    top: 0,
    transition: "top ease 0.5s",
    position: "relative",
    color: "#cccccc",
    "&:hover": {
      color: "#FF9900",
      top: theme.spacing(-1),
    },
  },
  icons: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      className={classes.root}
    >
      <Hidden only={["lg", "xl"]}>
        <Grid item className={classes.icons}>
          <Link
            className={classes.links}
            href={social.github}
            target="_blank"
          >
            <GitHubIcon />
          </Link>
          <Link
            className={classes.links}
            href={social.linkedIn}
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            className={classes.links}
            href={social.instagram}
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link
            className={classes.links}
            href={social.email}
            target="_blank"
          >
            <EmailIcon />
          </Link>
        </Grid>
      </Hidden>
      <Grid item>
        <Link
          href="https://github.com/HoangTienDinh/portfolio-v2"
          target="blank"
        >
          <Typography className={classes.footer}>
            Designed & built by Hoang Dinh
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
