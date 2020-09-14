import React from "react";
import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    bottom: 0,
    left: 0,
    position: 'fixed',
    width: '100%'
  },
  footer: {
    
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="https://github.com/HoangTienDinh/portfolio-v2" target="blank">
        <Typography>Designed & built by Hoang Dinh</Typography>
      </Link>
    </div>
  );
};

export default Footer;
