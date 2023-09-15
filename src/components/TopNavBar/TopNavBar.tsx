import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Plx from "react-plx";
const TopNavbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navItemClass = isHovered
    ? "nav-item active hover-animation"
    : "nav-item";

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px", // Adjust the padding value as needed
  };

  return (
    <Plx
      parallaxData={[
        {
          start: 0,
          end: 200,
          easing: "ease",
          properties: [
            {
              startValue: 1,
              endValue: 1,
              property: "scale",
            },
          ],
        },
      ]}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 6,
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ opacity: "0.9" }}
      >
        <div className="container">
          <img
            src="https://picsum.photos/50"
            alt="Logo"
            className="rounded-circle"
            style={{ width: "50px", height: "50px", padding: "0px" }}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li
                className={navItemClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={containerStyle}>
                  <NavLink
                    to="/home"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="nav-link"> Home</div>
                  </NavLink>
                </div>
              </li>

              <li
                className={navItemClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={containerStyle}>
                  <NavLink
                    to="/projects"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="nav-link"> Projects</div>
                  </NavLink>
                </div>
              </li>

              <li
                className={navItemClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={containerStyle}>
                  <NavLink
                    to="/techstack"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="nav-link"> Tech-Stack</div>
                  </NavLink>
                </div>
              </li>
              <li
                className={navItemClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={containerStyle}>
                  <NavLink
                    to="/resume"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="nav-link"> Résumé</div>
                  </NavLink>
                </div>
              </li>
              <li
                className={navItemClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={containerStyle}>
                  <NavLink
                    to="/courses"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="nav-link"> Courses</div>
                  </NavLink>
                </div>
              </li>

              <li
                className={navItemClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={containerStyle}>
                  <NavLink
                    to="/blog"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="nav-link"> Blog</div>
                  </NavLink>
                </div>
              </li>

              <li
                className={navItemClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={containerStyle}>
                  <NavLink
                    to="/powered"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="nav-link"> Powered By</div>
                  </NavLink>
                </div>
              </li>

              <li
                className={navItemClass}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={containerStyle}>
                  <a
                    className="nav-link"
                    href="https://drive.google.com/file/d/1-q-6zJ1NkXNy6nrrMkMUVNYd_7WF91Wp/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Research Paper
                  </a>
                </div>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn-primary"
              style={{
                left: "200px",
                position: "relative",
                background: "orange",
                borderColor: "orange",
              }}
            >
              {" "}
              <a
                className="nav-link"
                target="_blank"
                href="https://github.com/Lakshan-Vibhusha-Kannangara?tab=repositories"
                rel="noreferrer"
              >
                Source Code
              </a>
            </button>
          </div>
        </div>
      </nav>
    </Plx>
  );
};

export default TopNavbar;
