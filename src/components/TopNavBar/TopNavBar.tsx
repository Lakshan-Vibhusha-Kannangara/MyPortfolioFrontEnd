import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  Plx  from 'react-plx';
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
  <Plx parallaxData={[
    {
      start: 0,
      end: 200,
        easing:'ease',
      properties: [
        {
          startValue: 1,
          endValue: 1,
          property: "scale"
        }
      ]
    }
  ]}
  style={{
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: 6
  }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  style={{opacity:'0.9'}}>
      <div className="container">
      <img src="https://picsum.photos/50" alt="Logo" className="rounded-circle" style={{ width: '50px', height: '50px', padding: '0px' }} />
      
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
                <Link to='/home' style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link" href="##">Home</a></Link>
              </div>
            </li>
          
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/projects'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link" href="##">Projects</a></Link>
              </div>
            </li>
        
          

            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/techstack'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link" href='##'>Tech-Stack</a></Link>
              </div>
            </li>
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/courses'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link" href="##">Courses</a></Link>
              </div>
            </li>


            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/blog'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link" href="##">Blog</a></Link>
              </div>
            </li>

            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/powered'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link" href='##'>Powered By</a></Link>
              </div>
            </li>
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
                <Link to='/login'  style={{ textDecoration: 'none', color: 'black' }}><a className="nav-link" href="##">Login</a></Link>
              </div>
            </li>
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
             <a className="nav-link" href='https://drive.google.com/file/d/136ku4DX8MCp3ZrF4shbVTT73k4UDlN6x/view?usp=sharing' target="_blank" rel='noreferrer'>Résumé</a>
              </div>
            </li>
            <li className={navItemClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div style={containerStyle}>
             <a className="nav-link" href='https://drive.google.com/file/d/1-q-6zJ1NkXNy6nrrMkMUVNYd_7WF91Wp/view?usp=drive_link' target="_blank" rel='noreferrer'>Research Paper</a>
              </div>
            </li>
         
          
            
          </ul>
          
          <button type="button" className="btn btn-primary" style={{left:'200px',position:'relative',background:'orange',borderColor:'orange'}}> <a className="nav-link" target="_blank" href='https://github.com/Lakshan-Vibhusha-Kannangara?tab=repositories' rel='noreferrer'>Source Code</a>
           </button>
        </div>
      </div>
    </nav>
  </Plx>
  );
};

export default TopNavbar;
