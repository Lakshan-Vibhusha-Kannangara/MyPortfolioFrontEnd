import React from "react";

interface Project {
  image: string;
  name: string;
  information: string;
}

function Post(project: Project) {
  return (
    <div className="col">
      <div className="card h-80" style={{background:'transparent',color:'white',width:'20vw',height:'30vh',margin:'4vw'}}>
        <img src={project.image} className="card-img-top" alt="Skyscrapers" />
        <div className="card-body" style={{background:'transparent'}}>
          <p className="card-title">{project.name}</p>
       
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 1 day ago</small>
        </div>
      </div>
    </div>
  );
}

export default Post;
