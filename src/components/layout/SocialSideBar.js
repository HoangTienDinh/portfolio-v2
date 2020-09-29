import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";

import data from "../../data/data";

const { social } = data.portfolio;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40px",
    bottom: 0,
    right: theme.spacing(3),
    position: "fixed",
    zIndex: "10",
  },
  links: {
    height: "40px",
    maxWidth: "fit-content",
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
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
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="flex-end"
    >
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
  );
};

export default Social;
