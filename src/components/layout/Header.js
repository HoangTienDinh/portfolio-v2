import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  navigation: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  buttons: {
    color: "white",
  },
  layout: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function HideOnScroll({ children, window }) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.layout}>
            <Typography variant="h6">Hoang Dinh</Typography>
            {/* Update links later when you build out the page */}
            <Toolbar className={classes.navigation}>
              <Link href="#">
                <Button className={classes.buttons}>About</Button>
              </Link>

              <Link href="#">
                <Button className={classes.buttons}>Work</Button>
              </Link>

              <Link href="#">
                <Button className={classes.buttons}>Contact</Button>
              </Link>

              <Link href="#">
                <Button className={classes.buttons}>Resume</Button>
              </Link>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
};

export default Header;
