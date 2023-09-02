import React, { useState, useEffect } from "react";
import Interest from "../Interest/Interest";

import Footer from "../Footer/Footer";
import Load from "./Load";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaDatabase,
  FaServer,
  FaReact,
  FaNodeJs,FaScroll
} from "react-icons/fa";
import "./Home.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard } from "mdb-react-ui-kit";
import Plx from "react-plx";
function Home(essential: any) {
  const [scrollToBottomClicked, setScrollToBottomClicked] = useState(false);
  const [data, setData] = useState({ interests: [] }); // Initialize with an empty array

  const essentialData = essential.essential || {
    name: "",
    image: "",
    address: "",
    title: "",
    about: "",
    images: [],
  };





  const fetchData = async (
    url: string,
    setStateCallback: (data: any) => void
  ) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setStateCallback(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch essential data
    fetchData("http://52.65.35.114:4002/interests", (essentialData) => {
      // Set isLoading to false when essential data is loaded
      setData(essentialData);
    });

    // Fetch additional data (if needed)

    if (scrollToBottomClicked) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [scrollToBottomClicked]);

  const handleScrollToBottom = () => {
    setScrollToBottomClicked(true);
  };

  if (essential.essential.name === undefined) {
    return <Load />;
  }

  return (
    <div>
      <div style={{ zIndex: 4, top: "30px", position: "relative" }}>
        <div style={{ zIndex: 2 }}>
          <div
            id="intro-example"
            className="p-5 text-center bg-image"
            style={{backgroundColor:'transparent'}}
          >
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <div className="text-white">
                    <h1 className="mb-3">Hello There!</h1>
                    <h5 className="mb-4">
                      Welcome to my Professional Portfolio. I created this
                      personal web app from scratch using MERN Stack. If you
                      want to get to know me more please don't hesitate to reach
                      out to me.
                    </h5>
                    <div style={{ bottom: "10px", position: "relative" }}>
                      <FaDatabase /> MongoDB (Database)
                      <FaServer /> Express.js (Server)
                      <FaReact /> React (Frontend)
                      <FaNodeJs /> Node.js (Server)
                    </div>
                    <button style={{color:'white'}}
                      type="button"
                      className="btn btn-outline-primary btn-lg"
                      onClick={handleScrollToBottom}
                    >
                      Let's get started
                    </button>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>

        <section>
          <div >
            <MDBContainer className="py-5 h-5">
              <MDBRow>
                <MDBCol>
                  <MDBCard style={{backgroundColor:'transparent'}}>
                    <div
                      className="rounded-top  d-flex flex-row"
                      style={{
                        backgroundColor: "transparent",
                        height: "200px",
                        fontSize: "25px",opacity:'1'
                      }}
                    >
                      <div className="ms-4 mt-5 d-flex flex-column">
                        <img
                          src={essentialData.image}
                          alt=""
                          className="img-fluid img-thumbnail mt-4 mb-2"
                          style={{
                            width: "200px",
                            zIndex: 1,
                            top: "0px",
                            position: "relative",opacity:'1'
                          }}
                        />
                      </div>
                      <div className="ms-3" style={{ marginTop: "40px" }}>
                        <p style={{ fontSize: "60px", color: "white" }}>
                          Vibhusha Kannangara
                        </p>
                        <p
                          style={{
                            fontSize: "30px",
                            left: "30px",
                            position: "relative",
                            color: "white",
                            top: 0,
                          }}
                        >
                          Aluthgama, Sri Lanka
                        </p>
                        <div
                          style={{
                            left: "700px",
                            position: "relative",
                            bottom: "100px",
                          }}
                        >
                          <a
                            className="btn btn-primary"
                            style={{
                              
                              margin: "10px",
                            }}
                            href="https://linkedin.com/in/vibhoosha-kannangara"
                            role="button"
                          >
                            <FaLinkedinIn />
                          </a>
                          <a
                            className="btn btn-primary"
                            style={{
                              backgroundColor: "#333333",
                              margin: "10px",
                            }}
                            href="https://github.com/Lakshan-Vibhusha-Kannangara"
                            role="button"
                          >
                            <FaGithub />
                          </a>

                          <a
                            className="btn btn-primary"
                            style={{
                              backgroundColor: "#3b5998",
                              margin: "10px",
                            }}
                            href="https://www.facebook.com/vibusha.kannangara"
                            role="button"
                          >
                            <FaFacebookF />
                          </a>

                          <a
                            className="btn btn-primary"
                            style={{
                              backgroundColor: "#ac2bac",
                              margin: "10px",
                            }}
                            href="https://www.instagram.com/lakshank_97/"
                            role="button"
                          >
                            <FaInstagram />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="p-4 text-black"
                      style={{ backgroundColor: "wheat",opacity:'0.4' }}
                    >
                      <div className="d-flex justify-content-end text-center py-1">
                        <div>
                          <p style={{fontSize:'24px',color:'black'}}>
                            Bsc(Hons) Engineering | Department of Electrical
                            Engineering | University of Moratuwa
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-4 text-black">
                      <div className="mb-5">
                        <p className="large text mb-3 h1" style={{color:'white'}}>About Me</p>
                        <div
                          className="p-4"
                          style={{ backgroundColor: "#f8f9fa" ,opacity:'0.6'}}
                        >
                          <p className="font-italic mb-1">
                            {essentialData.about}
                          </p>
                        </div>
                      </div>

                      <div className="row g-2">
                        <p className="large text mb-3 h1" style={{color:'white'}}>My Interests</p>
                      </div>

                      <Interest data={data} />
                    </div>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </section>

        <div></div>
      </div>
      <div>
        <div style={{ zIndex: 5, position: "relative" ,margin:'30px'}}>
          {" "}
          <Footer></Footer>
        </div>

        <Plx
          parallaxData={[
            {
              start: 0,
              end: 2000,
              easing: "ease",
              properties: [
                {
                  startValue: 1.6,
                  endValue: 3,
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
            zIndex: 0,
            
          }}
        >
          <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
        </Plx>

        <Plx
          parallaxData={[
            {
              start: 0,
              end: 1800,
              properties: [
                {
                  startValue: 1.3,
                  endValue: 1.8,
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
            zIndex: -1,
          }}
        >
          <img
            style={{ width: "100%" }}
            src="background.jpg"
            alt="background"
          />
        </Plx>
        
        <Plx
  parallaxData={[
    {
      start: 0,
      end: 800,
      properties: [
        {
          startValue: 1.0, // Start with no scaling (normal size)
          endValue: 1.2,   // End with full scaling (normal size)
          property: "scale",
        },
        {
          startValue: 0, // Start with no horizontal shift
          endValue: 100, // End with a 100px rightward shift
          property: "translateY",
        },
      ],
    },
  ]}
  style={{
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: -1,
  }}
>
  <img
    style={{ width: "100%" ,opacity:0.09}}
    src="raindrops.png"
    alt="background"
  />
</Plx>
<Plx
  parallaxData={[
    {
      start: 0,
      end: 1800,
      properties: [
        {
          startValue: 1.1, // Start with no scaling (normal size)
          endValue: 1.25,   // End with full scaling (normal size)
          property: "scale",
        },
        {
          startValue: 0, // Start with no horizontal shift
          endValue: 100, // End with a 100px rightward shift
          property: "translateY",
        },
      ],
    },
  ]}
  style={{
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: -1,
  }}
>
  <img
    style={{ width: "100%" ,opacity:0.45}}
    src="lightning.jpg"
    alt="background"
  />
</Plx>
      </div>
    </div>
  );
}

export default Home;
