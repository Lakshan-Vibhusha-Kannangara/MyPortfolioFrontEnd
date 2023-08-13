import React, { useState, useEffect } from 'react';
import './TechStack.css'; // Import the CSS file

// TechCard component
const TechCard: React.FC<{ technology: { name: string; image: string } }> = ({ technology }) => (
  <div className="tech-card">
    <img src={technology.image} alt={technology.name} />
    <p>{technology.name}</p>
  </div>
);

// TechStack component
const TechStack: React.FC = () => {
  const [technologyData, setTechnologyData] = useState<{ name: string; image: string }[]>([]);

  useEffect(() => {
    // Fetch technology data from the backend
    fetch('http://52.65.35.114:4002/technologies') // Assuming the API endpoint is '/api/technologyData'
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // If the response indicates success, set the technologyData state with the technology array
          setTechnologyData(data.technology);
        } else {
          console.error('Failed to fetch technology data:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching technology data:', error);
      });
  }, []); // The empty array as the second argument ensures this effect runs once, similar to componentDidMount

  return (
   <div style={{margin:'10px'}}>
     <div className="tech-stack">
      <div className="grid-container">
        {technologyData.map((tech, index) => (
          <div key={index} className="grid-item">
            <TechCard technology={tech} />
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default TechStack;
