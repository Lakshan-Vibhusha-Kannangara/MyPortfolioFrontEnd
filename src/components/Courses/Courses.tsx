import React from "react";
import "./Courses.css"; // Import the CSS file

// TechnologyCard component
const TechnologyCard: React.FC<{
  technology: {
    name: string;
    image: string;
    description: string;
    lastUpdated: string;
  };
  progress: number;
}> = ({ technology, progress }) => (
  <div className="col-md-5 mb-0">
    <div className="card h-80">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={technology.image}
            alt={technology.name}
            className="img-fluid p-3 card-image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" style={{fontSize:"15px"}}>{technology.name}</h5>
            <p className="card-text">{technology.description}</p>
            <div className="progress mb-3">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {progress}% Complete
              </div>
            </div>
            <p className="card-text" style={{fontSize:"15px",margin:"0"}}>
              <small className="text-muted">
                Last updated {technology.lastUpdated}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Courses component
const Courses: React.FC<{ courses: any[] }> = ({ courses }) => {

  if (!courses || courses.length === 0) {
    return <p>Loading......</p>;
  }

  return (

    <div style={{margin:'8px',top:'30px',left:"14%",position:"relative",width:'85%'}}>
      <h1>Courses that I've Followed</h1>
      <div className="row row-cols-1 row-cols-md g-4">
        {courses.map((tech, index) => (
          
          <TechnologyCard
            key={index}
            technology={{
              name: tech.name,
              image: tech.image,
              description: tech.information,
              lastUpdated: tech.lastupdated,
            }}
            progress={tech.width}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
