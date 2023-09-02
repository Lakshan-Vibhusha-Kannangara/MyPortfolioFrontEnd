import React from "react";
import "./Projects.css";
import Post from "../Post/Post";
import { MDBCardText } from "mdb-react-ui-kit";
import { withRouter, RouteComponentProps } from "react-router-dom"; // Import withRouter and RouteComponentProps
import Plx from "react-plx";
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

  return (<div>
    <Plx
  parallaxData={[
    {
      start: 0,
      end: 1800,
      properties: [
        {
          startValue: 1.1, // Start with no scaling (normal size)
          endValue: 1.25,   // End with full scaling (normal size)
          property: "scale",
        },
        {
          startValue: 0, // Start with no horizontal shift
          endValue: 100, // End with a 100px rightward shift
          property: "translateY",
        },
      ],
    },
  ]}
  style={{
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: -1,
  }}
>
  <img
    style={{ width: "100%" ,opacity:0.45}}
    src="back.jpg"
    alt="background"
  />
</Plx>
<Plx
  parallaxData={[
    {
      start: 0,
      end: 1800,
      properties: [
        {
          startValue: 1.1, // Start with no scaling (normal size)
          endValue: 1.25,   // End with full scaling (normal size)
          property: "scale",
        },
        {
          startValue: 0, // Start with no horizontal shift
          endValue: 100, // End with a 100px rightward shift
          property: "translateY",
        },
      ],
    },
  ]}
  style={{
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: 1,
  }}
>
  <img
    style={{ width: "10%" ,opacity:1,left:'90px',position:'relative',top:'200px'}}
    src="HiRobot.gif"
    alt="background"
  />
</Plx>
    <div className="mb-4 mb-lg-0" style={{ margin: "40px" }}>
      <MDBCardText style={{ fontSize: "40px" ,color:'white',margin:'10px'}}>Projects</MDBCardText>
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
    </div></div>
  );
}

export default withRouter(Projects); // Use withRouter to access the history object
