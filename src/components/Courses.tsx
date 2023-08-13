import React, { useState, useEffect } from 'react';

// TechnologyCard component
const TechnologyCard: React.FC<{
  technology: { name: string; image: string; description: string; lastUpdated: string };
  progress: number;
}> = ({ technology, progress }) => (
  <div className="col-md-6 mb-4">
    <div className="card h-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={technology.image} alt={technology.name} className="img-fluid p-3" />
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
              <small className="text-muted">Last updated {technology.lastUpdated}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Courses component
const Courses: React.FC = () => {
  const [technologyData, setTechnologyData] = useState<{
    name: string;
    image: string;
    information: string;
    lastupdated: string;
    width: number;
  }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch technology data from the backend
    fetch('http://3.27.60.205:4002/courses') // Assuming the API endpoint is '/api/technologyData'
      .then((response) => response.json())
      .then((data) => {
        console.log("course data here ....",data)
        if (data.success) {
          // If the response indicates success, set the technologyData state with the technology array
          setTechnologyData(data.course);
        } else {
          console.error('Failed to fetch technology data:', data);
        }
        setLoading(false); // Data fetching completed, set loading to false
      })
      .catch((error) => {
        console.error('Error fetching technology data:', error);
        setLoading(false); // Data fetching completed, set loading to false even on error
      });
  }, []); // The empty array as the second argument ensures this effect runs once, similar to componentDidMount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!technologyData || technologyData.length === 0) {
    return <p>No technologies available.</p>;
  }

  return (
    <div style={{ margin: '40px' }}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {technologyData.map((tech, index) => (
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
