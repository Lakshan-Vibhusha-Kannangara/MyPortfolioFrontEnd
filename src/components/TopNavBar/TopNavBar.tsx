import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navItemClass = isHovered ? 'nav-item active hover-animation' : 'nav-item';

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px', // Adjust the padding value as needed
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="https://picsum.photos/50" alt="Logo" className="rounded-circle" style={{ width: '50px', height: '50px', padding: '0px' }} />
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
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link">Home</a></Link>
              </div>
            </li>
          
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/projects'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link">Projects</a></Link>
              </div>
            </li>
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link">About</a></Link>
              </div>
            </li>
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
             <a className="nav-link" href='https://drive.google.com/file/d/1XAqbKIgRzrcWtusfhYyhJkX_VSoD6uzQ/view?usp=drive_link' target="_blank">Résumé</a>
              </div>
            </li>

            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/techstack'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link">Tech-Stack</a></Link>
              </div>
            </li>
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/courses'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link">Courses</a></Link>
              </div>
            </li>

            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/powered'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link">Powered By</a></Link>
              </div>
            </li>

            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/blog'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link">Blog</a></Link>
              </div>
            </li>
            
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
             <a className="nav-link" href='https://drive.google.com/file/d/1-q-6zJ1NkXNy6nrrMkMUVNYd_7WF91Wp/view?usp=drive_link' target="_blank">Research Paper</a>
              </div>
            </li>
          </ul>
          
          <button type="button" className="btn btn-primary" style={{left:'350px',position:'relative',background:'orange',borderColor:'orange'}}> <a className="nav-link" target="_blank" href='https://github.com/Lakshan-Vibhusha-Kannangara?tab=repositories' >Source Code</a>
           </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
