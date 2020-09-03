import React from "react";
import Layout from "./components/layout/Layout";
import Landing from "./components/Landing";
import About from "./components/About";
import Work from "./components/work/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Layout />
      <Landing />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
