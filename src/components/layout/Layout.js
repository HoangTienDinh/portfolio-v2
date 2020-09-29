import React from "react";
import Header from "./Header";
import SocialSideBar from "./SocialSideBar";
import { Hidden } from "@material-ui/core";

const Layout = () => {
  return (
    <div>
      <Header />
      <Hidden only={["xs", "sm", "md"]}>
        <SocialSideBar />
      </Hidden>
    </div>
  );
};

export default Layout;
