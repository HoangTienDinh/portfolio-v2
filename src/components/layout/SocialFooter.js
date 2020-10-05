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
    "@media (max-width: 600px)": {
      bottom: theme.spacing(10),
    },
  },
  icons: {
    fontSize: "10rem",
    marginBottom: "150px",
    color: "#6699CC",
    "&:hover": {
      color: "#FF9900",
    },
    "@media (max-width: 960px)": {
      marginBottom: "2rem",
      fontSize: "5rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "4rem",
    },
  },
  text: {
    color: "white",
    "@media (max-width: 960px)": {
      fontSize: "1rem",
    },
  },
}));

const SocialFooter = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="space-evenly">
      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Link href={social.github} target="_blank">
          <Typography variant='h5' className={classes.text}>Code</Typography>
          <Typography variant='h5' className={classes.text}>With Me</Typography>
          <GitHubIcon className={classes.icons} />
        </Link>
      </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Link href={social.linkedIn} target="_blank">
          <Typography variant='h5' className={classes.text}>Connect</Typography>
          <Typography variant='h5' className={classes.text}>With Me</Typography>
          <LinkedInIcon className={classes.icons} />
        </Link>
      </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Link href={social.instagram} target="_blank">
          <Typography variant='h5' className={classes.text}>Follow</Typography>
          <Typography variant='h5' className={classes.text}>Me</Typography>
          <InstagramIcon className={classes.icons} />
        </Link>
      </Grid>

      <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Link href={social.email} target="_blank">
          <Typography variant='h5' className={classes.text}>Email</Typography>
          <Typography variant='h5' className={classes.text}>Me</Typography>
          <EmailIcon className={classes.icons} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SocialFooter;
