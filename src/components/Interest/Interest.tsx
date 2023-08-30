import React from "react";

interface InterestProps {
  data: {
    interests: Array<{
      id: number;
      name: string;
      description: string;
      image: string;
    }>;
  };
}

function Interest({ data }: InterestProps) {
  if (!data || !data.interests) {
    return <div>Loading...</div>;
  }

  const interests = data.interests;

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.opacity = "0.8";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.opacity = "1";
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {interests.map((interest,index) => (
            <div
              className="col-md-6 mb-4"
              key={index}
              style={{
                transition: "opacity 0.3s ease-in-out",
                opacity: 1,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card">
                <img
                  src={interest.image}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">{interest.name}</h5>
                  <p className="card-text">{interest.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interest;
