import React from "react";
import "./Projects.css";
import Post from "../Post/Post";




// Define the type for a single project
interface Project {
  id: number;
  image: string;
  name: string;
  information: string;
}

// Define the type for the data prop
interface ProjectsProps {
  data: {
    projects: Project[];
  };
}

function Projects({ data }: ProjectsProps) {

  if (!data) {
    return <div>Loading...</div>;
  }

  const projects = data.projects;
  const chunkedProjects: Project[][] = [];
  for (let i = 0; i < projects.length; i += 3) {
    chunkedProjects.push(projects.slice(i, i + 3));
  }

  return (
    <div className="mb-4 mb-lg-0" style={{margin:"40px"}}>
      <p className="large text-muted mb-3 h1">My Projects</p>
      <div>
        {chunkedProjects.map((projectChunk, chunkIndex) => (
          <div key={chunkIndex} className="row mb-4">
            
            {projectChunk.map((project, projectIndex) => (
              <div
                key={project.id} // Add a unique key here
                className="col-lg-4 fade-in-animation"
                style={{
                  animationDelay: `${chunkIndex * 0.2 + projectIndex * 0.1}s`,
                }}
              >
                <Post
                  image={project.image}
                  name={project.name}
                  information={project.information}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
