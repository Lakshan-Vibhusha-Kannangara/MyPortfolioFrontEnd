import React from "react";

interface Project {
  image: string;
  name: string;
  information: string;
}

function Post(project: Project) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={project.image} className="card-img-top" alt="Skyscrapers" />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.information}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 1 day ago</small>
        </div>
      </div>
    </div>
  );
}

export default Post;
