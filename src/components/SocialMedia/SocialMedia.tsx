import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaDatabase,
    FaServer,
    FaReact,
    FaNodeJs,
  } from "react-icons/fa";
function SocialMedia() {
    return (       <div
        style={{
          left: "700px",
          position: "relative",
          bottom: "100px",
        }}
      >
        <a
          className="btn btn-primary"
          style={{ backgroundColor: "#0082ca", margin: "10px" }}
          href="https://linkedin.com/in/vibhoosha-kannangara"
          role="button"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="btn btn-primary"
          style={{ backgroundColor: "#333333", margin: "10px" }}
          href="https://github.com/Lakshan-Vibhusha-Kannangara"
          role="button"
        >
          <FaGithub />
        </a>

        <a
          className="btn btn-primary"
          style={{ backgroundColor: "#3b5998", margin: "10px" }}
          href="https://www.facebook.com/vibusha.kannangara"
          role="button"
        >
          <FaFacebookF />
        </a>

        <a
          className="btn btn-primary"
          style={{ backgroundColor: "#ac2bac", margin: "10px" }}
          href="https://www.instagram.com/lakshank_97/"
          role="button"
        >
          <FaInstagram />
        </a>
      </div>  );
}

export default SocialMedia;