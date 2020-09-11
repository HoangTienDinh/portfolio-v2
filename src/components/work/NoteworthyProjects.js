import React from "react";
import data from "../../data/data";
import Reveal from "react-reveal";

const { noteworthyProj } = data.portfolio;

const NoteworthyProjects = () => {
  return (
    <div>
      {noteworthyProj.map((project, i) => (
        <Reveal duration={i * 1000} effect="fadeInUp">
          <div key={i}>{project.title}</div>
        </Reveal>
      ))}
    </div>
  );
};

export default NoteworthyProjects;
