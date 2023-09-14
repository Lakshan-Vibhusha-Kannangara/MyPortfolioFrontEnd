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

  return (
    <div >
       <div  style={{backgroundColor:'green',zIndex:1}}></div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1800,
            properties: [
              {
                startValue: 1.1, // Start with no scaling (normal size)
                endValue: 1.25, // End with full scaling (normal size)
                property: "scale",
              },
              {
                startValue: 0, // Start with no horizontal shift
                endValue: 140, // End with a 100px rightward shift
                property: "translateX",
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
          style={{
            width: "10%",
            opacity: 1,
            left: "90px",
            position: "relative",
            top: "200px",
          }}
          src="HiRobot.gif"
          alt="background"
        />
      </Plx>
          
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.6, 0.8, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -10, // End with a 100px rightward shift
                property: "translateY",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "40vw",
          top: "10vh",
          width: "30vw",
          height: "30vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,backgroundColor:`linear-gradient(180deg, rgba(54,42,88,1) 0%, rgba(107,69,116,1) 12%, rgba(183,119,152,1) 30%, rgba(255,202,172,1) 67%)`
        }}
      >
       <div>
        <h1 style={{fontSize:'4vw'}}>My Projects</h1>
       </div>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -10, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "10vw",
          top: "10vh",
          width: "30vw",
          height: "30vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="bg_planet01.svg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -10, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "70vw",
          top: "20vh",
          width: "8vw",
          height: "8vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="bg_planet02.svg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -30, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "-25vh",
          width: "100vw",
          height: "2vh",
          margin: "auto",
          scale: "1.1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="BG-Layered_cropped-1-01.svg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -60, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100vw",
          height: "2vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="BG-Layered_cropped-1-02.svg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -80, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "20vw",
          top: 0,
          width: "100vw",
          height: "2vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="BG-Layered_cropped-1-03.svg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -100, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "2vw",
          top: 0,
          width: "110vw",
          height: "12vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="BG-Layered_cropped-1-04.svg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -120, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "40vw",
          top: 0,
          width: "100vw",
          height: "2vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="BG-Layered_cropped-1-05.svg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end:1000,

            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -140, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "10vw",
          top: "50vh",
          width: "100vw",
          height: "2vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="fg-02.svg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -140, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "10vw",
          top: "50vh",
          width: "100vw",
          height: "2vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="fg-03.svg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,

            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -180, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "25vw",
          top: "50vh",
          width: "100vw",
          height: "2vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="fg-04.svg"
          alt="background"
        />
      </Plx>
      <div className="mb-4 mb-lg-0" style={{ margin: "40px" }}>
        <MDBCardText
          style={{ fontSize: "40px", color: "white", margin: "10px" }}
        >
          Projects
        </MDBCardText>
        <div>
          {chunkedProjects.map((projectChunk, chunkIndex) => (
            <div key={chunkIndex} className="row mb-4">
              {projectChunk.map((project, projectIndex) => (
                <div  
                  onClick={() =>
                    handleClick(`/project/${projectIndex + chunkIndex * 3}`)
                  } // Pass the path to handleClick
                  key={project.id} // Add a unique key here
                  className="col-lg-4 fade-in-animation hoverable-div"
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
    </div>
  );
}

export default withRouter(Projects); // Use withRouter to access the history object



