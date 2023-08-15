import React from "react";

function SideBar() {
  return (
    <div className="col-md-40 mb-4">
      <section className="sticky-top" style={{ top: "80px" ,left:"50px"}}>
        <section className="text-center border-bottom pb-4 mb-4">
          <div className="bg-image hover-overlay ripple mb-4" style={{left:0,right:0,position:"relative"}}>
            <img
              src="https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?height=456&width=711&fit=bounds"
              className="img-fluid"
              style={{ width: "100%", height: "auto", maxHeight: "300px",left:"50px" }} // Increased max height for larger image
              alt="AI Article"
            />
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
              ></div>
            </a>
          </div>
          <h5>What's New on AI</h5>

          <a
            role="button"
            className="btn btn-primary"
            href="https://mdbootstrap.com/docs/standard/"
            target="_blank" rel="noopener noreferrer"
          >
            Download for Free<i className="fas fa-download ms-2"></i>
          </a>
        </section>

        <section className="text-center">
          <h5 className="mb-4">How AI Could Empower Your Business</h5>

          <div className="embed-responsive embed-responsive-16by9 shadow-4-strong">
            <iframe
              width="500px"
              height="320px" // Increased height for larger video
              src="https://www.youtube.com/embed/reUZRyXxUs4"
              title="How AI Could Empower Any Business | Andrew Ng | TED"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export default SideBar;
