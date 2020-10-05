import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, Typography } from "@material-ui/core";

import data from "../../data/data";

const { social } = data.portfolio;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    position: "absolute",
    bottom: theme.spacing(20),

    // width: "calc(100% - 80px)",
  },
  icons: {
    fontSize: "100px",
  },
  text: {
    // maxWidth: "100px",
    color: "white",
    fontSize: "20px",
  },
}));

const SocialFooter = () => {
  const classes = useStyles();

  // xs={6} sm={6} md={3} lg={3} xl={3}

  return (
    <Grid container className={classes.root} justify="space-evenly">
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Typography className={classes.text}>Code</Typography>
        <Typography className={classes.text}>With Me</Typography>
        <Grid item>
          <Link href={social.github} target="_blank">
            <GitHubIcon className={classes.icons} />
          </Link>
        </Grid>
      </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Typography className={classes.text}>Connect</Typography>
        <Typography className={classes.text}>With Me</Typography>
        <Grid item>
          <Link href={social.linkedIn} target="_blank">
            <LinkedInIcon className={classes.icons} />
          </Link>
        </Grid>
      </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Typography className={classes.text}>Follow</Typography>
        <Typography className={classes.text}>Me</Typography>
        <Grid item>
          <Link href={social.instagram} target="_blank">
            <InstagramIcon className={classes.icons} />
          </Link>
        </Grid>
      </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Typography className={classes.text}>Email</Typography>
        <Typography className={classes.text}>Me</Typography>
        <Grid item>
          <Link href={social.email} target="_blank">
            <EmailIcon className={classes.icons} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SocialFooter;
