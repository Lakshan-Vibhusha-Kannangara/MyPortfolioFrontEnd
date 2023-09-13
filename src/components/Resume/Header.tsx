import React from "react";
import "./header.css";
import About from "./About";
import Typewriter from "typewriter-effect";


const Header = () => {
  return (
    <header>
      <div className="container header__container" style={{top:'5vh',position:'relative'}}>
        <h1 style={{fontSize:'4vw',color:'whitesmoke'}}>Hello I'm Vibhusha Kannangara.</h1>
    
  <div style={{fontSize:'3vw',color:'white'}}>
  <Typewriter 
              options={{
                strings: ["Full Stack Engineer","Machine Learning Enthusiast","Robotics Enginner", "Tech Enthusiast", "Nature Lover"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
             
            />
  </div>

      <About/>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
