function ProjectCard({ title, description, image, demo, code }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;