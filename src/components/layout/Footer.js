import React from "react";
import { Typography, Link, Hidden, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    position: 'absolute',
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
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignContent="center" className={classes.root}>
      <Hidden only={["lg", "xl"]}>
        <Grid item >
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
