import React from 'react';
import './TechStack.css';

interface Technology {
  _id: string;
  name: string;
  image: string;
}



function TechCard({ technology }: { technology: Technology }) {
  return (
    <div className="tech-card">
      <img src={technology.image} alt={technology.name} className="tech-card-image" />
      <p>{technology.name}</p>
    </div>
  );
}

function TechStack( technologyData : {courses:Technology[]}) {

  if(!technologyData.courses){
    return(<div></div>)
  }
  return (
    <div style={{ margin: '10px',top:'40px',position:'relative' }}>
      <p style={{ fontSize: '40px' }}>My Technologies</p>
      <div className="tech-stack">
        <div className="grid-container">
          {technologyData.courses.map((tech, index: number) => (
            <div key={tech._id} className="grid-item">
              <TechCard technology={tech} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
