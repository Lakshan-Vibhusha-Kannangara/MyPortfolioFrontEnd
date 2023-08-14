import React, { useState, useEffect } from "react";
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
  <div className="col-md-6 mb-4">
    <div className="card h-100">
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
            <h5 className="card-title">{technology.name}</h5>
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
            <p className="card-text">
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
    return <p>No technologies available.</p>;
  }

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
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
