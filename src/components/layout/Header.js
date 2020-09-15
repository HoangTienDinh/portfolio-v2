import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Slide,
  Button,
  Link,
  Hidden,
  IconButton,
  Popper,
  Paper,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Grow,
  useScrollTrigger,
} from "@material-ui/core";

import Resume from "../../assets/Hoang Dinh Resume.pdf";

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
    background: "#003366",
  },
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function HideOnScroll({ children, window }) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const classes = useStyles();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.layout}>
            <Typography variant="h6">Hoang Dinh</Typography>
            <Hidden only={["xs"]}>
              <Toolbar className={classes.navigation}>
                <Link href="#about">
                  <Button className={classes.buttons}>About</Button>
                </Link>

                <Link href="#work">
                  <Button className={classes.buttons}>Work</Button>
                </Link>

                <Link href="#contact">
                  <Button className={classes.buttons}>Contact</Button>
                </Link>

                <Link href={Resume} target="blank">
                  <Button className={classes.buttons}>Resume</Button>
                </Link>
              </Toolbar>
            </Hidden>

            <Hidden only={["sm", "md", "lg", "xl"]}>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <MenuIcon />
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <Link href="#about">
                            <MenuItem onClick={handleClose}>About</MenuItem>
                          </Link>
                          <Link href="#work">
                            <MenuItem onClick={handleClose}>Work</MenuItem>
                          </Link>
                          <Link href="#contact">
                            <MenuItem onClick={handleClose}>Contact</MenuItem>
                          </Link>
                          <Link href={Resume} target="blank">
                            <MenuItem onClick={handleClose}>Resume</MenuItem>
                          </Link>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
};

export default Header;
