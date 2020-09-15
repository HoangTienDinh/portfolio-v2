import React from "react";
import Header from "./Header";
import Social from "./Social";
import Footer from "./Footer";
import { Hidden } from "@material-ui/core";

const Layout = () => {
  return (
    <div>
      <Header />
      <Hidden only={["xs", "sm", "md"]}>
        <Social />
      </Hidden>
      <Footer />
    </div>
  );
};

export default Layout;
