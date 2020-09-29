import React from "react";
import { Typography, Link, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item>
        <Link
          href="https://github.com/HoangTienDinh/portfolio-v2"
          target="_blank"
          className={classes.footer}
        >
          <Typography>Designed & built by Hoang Dinh</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
