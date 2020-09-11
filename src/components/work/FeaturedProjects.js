import React from "react";
import data from "../../data/data";

const { featuredProj } = data.portfolio;

const FeaturedProjects = () => {
  return (
    <div>
      {featuredProj.map((project, i) => (
        <div key={i}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
