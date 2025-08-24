import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

import cat from "../../assets/cat.jpg";
import portfolio from "../../assets/portfolio.png";
import rain from "../../assets/rain.png";

function Projects() {
  const projectList = [
    {
      title: "Gallery ",
      description: "This is my Gallery.",
      image: cat,
      demo: "https://taupe-chimera-41e1f9.netlify.app/",
      code: "https://github.com/Veerawat2005/mini-ecommerce-collaboration",
    },
    {
      title: "Weather App",
      description: "You can check weather anywhere you want.",
      image: rain,
      demo: "https://veerawat2005.github.io/my-weather-app/",
      code: "https://github.com/Veerawat2005/my-weather-app",
    },
    {
      title: "Portfolio Website",
      description: "My portfolio website.",
      image: portfolio,
      demo: "https://veerawat2005.github.io/portfolio-website/",
      code: "https://github.com/Veerawat2005/portfolio-website",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
