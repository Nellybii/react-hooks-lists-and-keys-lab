import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" style={{display: "flex", flexDirection: "row"}}>{/* render ProjectItem components here */}
      {projects.map((project)=>(
        <ProjectItem key={project.id} name={project.name} technologies={project.technologies || []}/>
      ))}
      
      </div>
    </div>
  );
}

export default ProjectList;
