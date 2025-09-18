import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section className="projects-list">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <a
            key={project.link || idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h2>{project.title || project.link}</h2>
            <p>{project.description || ""}</p>
          </a>
        ))}
      </div>
    </section>
  );
}