import React from "react";
import { Typography, Link, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SocialFooter from './SocialFooter';

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
      <SocialFooter />
      
      <Grid item>
        <Link
          href="https://github.com/HoangTienDinh/portfolio-v2"
          target="_blank"
          className={classes.footer}
        >
          <Typography>
            Designed & built by Hoang Dinh
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
