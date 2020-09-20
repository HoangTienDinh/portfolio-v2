import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    right: theme.spacing(3),
    position: "fixed",
    zIndex: "10",
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
}));

const Social = () => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="flex-end"
    >
      <Link
        className={classes.links}
        href="https://github.com/HoangTienDinh"
        target="_blank"
      >
        <GitHubIcon />
      </Link>
      <Link
        className={classes.links}
        href="https://www.linkedin.com/in/hoangdinh90/"
        target="_blank"
      >
        <LinkedInIcon />
      </Link>
      <Link
        className={classes.links}
        href="https://www.instagram.com/hohohoang/"
        target="_blank"
      >
        <InstagramIcon />
      </Link>
      <Link
        className={classes.links}
        href="mailto:hoangdinh90@gmail.com"
        target="_blank"
      >
        <EmailIcon />
      </Link>
    </Grid>
    // </div>
  );
};

export default Social;
