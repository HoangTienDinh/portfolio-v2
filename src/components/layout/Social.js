import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: theme.spacing(3),
    bottom: 0,
    right: 0,
    position: 'fixed',
  },
  links: {
    maxWidth: "fit-content",
    margin: theme.spacing(0.5),
  },
}));

const Social = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link
        className={classes.links}
        href="https://github.com/HoangTienDinh"
        target="blank"
      >
        <GitHubIcon />
      </Link>
      <Link
        className={classes.links}
        href="https://www.linkedin.com/in/hoangdinh90/"
        target="blank"
      >
        <LinkedInIcon />
      </Link>
      <Link
        className={classes.links}
        href="https://www.instagram.com/hohohoang/"
        target="blank"
      >
        <InstagramIcon />
      </Link>
      <Link
        className={classes.links}
        href="mailto:hoangdinh90@gmail.com"
        target="blank"
      >
        <EmailIcon />
      </Link>
    </div>
  );
};

export default Social;
