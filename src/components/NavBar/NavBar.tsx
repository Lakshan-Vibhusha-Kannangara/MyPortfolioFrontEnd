import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://picsum.photos/50"
            alt="Logo"
            className="rounded-circle"
            style={{ width: "50px", height: "50px", padding: "5px" }}
          />
          My Blog
        </a>
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
            <li className="nav-item active">
              <Link to="/home">
                {" "}
                <a className="nav-link"></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                {" "}
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">
                {" "}
                <a className="nav-link">Projects</a>
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
