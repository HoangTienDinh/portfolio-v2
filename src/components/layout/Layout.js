import React from "react";
import Header from "./Header";
import Social from "./Social";
import { Hidden } from "@material-ui/core";

const Layout = () => {
  return (
    <div>
      <Header />
      <Hidden only={["xs", "sm", "md"]}>
        <Social />
      </Hidden>
    </div>
  );
};

export default Layout;
