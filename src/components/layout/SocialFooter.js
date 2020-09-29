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
    flexGrow: 1,
  },
}));

const SocialFooter = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center" spacing={10}>
      <Grid item>
        <Link href={social.github} target="_blank">
          <GitHubIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link href={social.linkedIn} target="_blank">
          <LinkedInIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link href={social.instagram} target="_blank">
          <InstagramIcon />
        </Link>
      </Grid>

      <Grid item>
        <Link href={social.email} target="_blank">
          <EmailIcon />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SocialFooter;
