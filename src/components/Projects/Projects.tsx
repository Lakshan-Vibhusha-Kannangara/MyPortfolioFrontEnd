import React from "react";
import "./Projects.css";
import Post from "../Post/Post";
import { MDBCardText } from "mdb-react-ui-kit";
import { withRouter, RouteComponentProps } from "react-router-dom"; // Import withRouter and RouteComponentProps

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

function Projects({ data, history }: ProjectsProps & RouteComponentProps) {
  const handleClick = (path: string) => {
    history.push(path); // This changes the route to the specified path
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const projects = data.projects;
  const chunkedProjects: Project[][] = [];
  for (let i = 0; i < projects.length; i += 3) {
    chunkedProjects.push(projects.slice(i, i + 3));
  }

  return (
    <div className="mb-4 mb-lg-0" style={{ margin: "40px" }}>
      <MDBCardText style={{ fontSize: "40px" }}>Projects</MDBCardText>
      <div>
        {chunkedProjects.map((projectChunk, chunkIndex) => (
          <div key={chunkIndex} className="row mb-4">
            {projectChunk.map((project, projectIndex) => (
              <div
                onClick={() => handleClick(`/project/${projectIndex+chunkIndex*3}`)} // Pass the path to handleClick
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

export default withRouter(Projects); // Use withRouter to access the history object
