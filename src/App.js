import React from "react";
import Layout from "./components/layout/Layout";
import Landing from "./components/Landing";
import About from "./components/About";
import Work from "./components/work/Work";
import Contact from "./components/Contact";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#d1d3d4",
    width: "inherit",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Layout />
      <Landing />
      <About />
      <Work />
      <Contact />
    </Box>
  );
}

export default App;
