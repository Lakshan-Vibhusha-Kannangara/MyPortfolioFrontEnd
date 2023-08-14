import React, { useState, useEffect } from "react";

const CarouselPage = (props: { data: string[] }) => {
  const [index, setIndex] = useState(0);
  const interval = 6000;
  const images = props.data || [];

  useEffect(() => {
    if (images.length === 0) {
      return; // No images, no need to set up the interval
    }

    const timer = setInterval(() => {
      const nextIndex = (index + 1) % images.length;
      setIndex(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [index, images.length]);

  if (images.length === 0) {
    return (
      <div>
        <p>No images to display.</p>
      </div>
    );
  }

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-mdb-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((imageUrl, idx) => (
          <div
            className={`carousel-item${index === idx ? " active" : ""}`}
            key={idx}
          >
            <img
              src={imageUrl}
              className="d-block w-100"
              alt={`Image ${idx + 1}`}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>{idx === 1 ? "EXMO 2023" : "Final Year Project"}</h1>

              <p></p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <style>
        {`
          /* Apply smooth transitions to carousel items */
          .carousel-inner {
            transition: transform 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default CarouselPage;
