import React from "react";

interface InterestProps {
  data: {
    interests: Array<{
      id: number;
      name: string;
      description: string;
      image: string;
      // Add other properties as needed
    }>;
    // Add other properties of 'data' if any
  };
}

function Interest({ data }: InterestProps) {
  if (!data || !data.interests) {
    return <div>Loading...</div>;
  }

  const interests = data.interests;

  return (
    <div>
      {/* Use Bootstrap classes to create a 2-column grid layout */}
      <div className="container">
        <div className="row">
          {interests.map((interest) => (
            <div
              className="col-md-6 mb-4"
              key={interest.id}
              style={{
                // Apply inline styles for the card and add a transition effect
                transition: "opacity 0.3s ease-in-out",
                opacity: 1,
              }}
              onMouseEnter={(e) => {
                // When the mouse enters, reduce the opacity for the hover effect
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                // When the mouse leaves, restore the original opacity
                e.currentTarget.style.opacity = "1";
              }}
            >
              <div className="card">
                <img
                  src={interest.image}
                  className="card-img-top"
                  alt="Interest Image"
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
