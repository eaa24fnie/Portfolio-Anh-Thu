import { useEffect, useState } from "react";    
import Projects from "../components/MyWork";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/webprojects.json");
      const data = await response.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div className="container">
      <h1>Projects</h1>
      <section className="grid">
        {projects.map(project => (
          <Projects
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
