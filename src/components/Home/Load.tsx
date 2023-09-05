import React from "react";
import Plx from "react-plx";
function Load() {
    return (   
      <div>
         <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -10, // End with a 100px rightward shift
                property: "translateX",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "54vw",
          top: "15vh",
          width: "30vw",
          height: "30vh",
          margin: "auto",
          scale: "1",
          zIndex: -4,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="https://s11.gifyu.com/images/Sg54H.gif"
          alt="background"
        />
      </Plx>
     
  
    
  
      <div className="d-flex justify-content-center align-items-center min-vh-100">
    
    <div className="card1 text-center">
      <div className="card1-body">
        <h1 className="card1-title">Welcome,!</h1>
        <p className="card1-text">I'm excited to have you here.</p>
   
        <p className="card1-text">Explore and enjoy my platform.</p>
        <div className="text-center">
  <div className="spinner-border" role="status">

  </div>
</div>
      </div>
    </div>
  </div></div>  );
}

export default Load;