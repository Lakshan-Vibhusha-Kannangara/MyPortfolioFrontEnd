import React from "react";
import "./Courses.css"; // Import the CSS file

import Plx from "react-plx";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBProgress,
  MDBProgressBar,MDBCardTitle
} from "mdb-react-ui-kit";
import {
	FaScroll,FaArrowDown
  }from "react-icons/fa";
// Courses component

// TechnologyCard component

const Courses: React.FC<{ courses: any[] }> = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return <p>Loading......</p>;
  }

  return (
    <div style={{ top: "0", position: "relative" }}>
      <Plx
        parallaxData={[
          {
            start: -1,
            end: 2000,
            easing: "ease",
            properties: [
              {
                startValue: 0.14,
                endValue: 0.14,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "18vw",
          top: "-30vh",
          width: "100%",
          zIndex: 0,
        }}
      >
        <img style={{ width: "100%" ,rotate:'-20deg'}} src="mouse.png" alt="foreground" />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1800,
            properties: [
              {
                startValue: 1.1,
                endValue: 1.17,
                property: "scale",
              },
            ],
          },
		  {
            start: 0,
            end: 1200,
            properties: [
              {
                startValue: 0.88,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "-4vw",
          top: "-20vh",
          width: "100%",
          zIndex: -1,
        }}
      >
        <img style={{ width: "100%" ,opacity:'0.92'}} src="lap.jpg" alt="background" />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1800,
            properties: [
              {
                startValue: 0.31, // Start with no scaling (normal size)
                endValue: 0.31, // End with full scaling (normal size)
                property: "scale",
              },
              {
                startValue: 0, // Start with no horizontal shift
                endValue: -3, // End with a 100px rightward shift
                property: "translateY",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "-3vw",
          top: "-12vh",
          width: "100%",
          zIndex: -1,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1,rotate:'-22deg' }}
          src="keyboard.png"
          alt="background"
        />
      </Plx>
   
      <Plx
        style={{ zIndex: 0 }}
        parallaxData={[
          {
            start: 50,
            end: 100,
            easing: "ease",
            properties: [
              {
                startValue: 0,
                endValue: -200,
                property: "translateY",
              },
            ],
          },
        ]}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "transparent",
          }}
        > <MDBCardTitle style={{left:'40vw',top:'20vw',position:'relative',fontSize:'60px',color:'gray'}}>My Courses</MDBCardTitle>
		<FaScroll  style={{width:'20vh',height:'auto',left:'27vw',position:'relative',top:'28vh'}}/>
		<MDBCardTitle style={{left:'40vw',top:'20vw',position:'relative',fontSize:'45px',color:'white'}}>Scroll Down</MDBCardTitle>
		<FaArrowDown  style={{width:'20vh',height:'auto',left:'56vw',position:'relative',top:'28vh',color:'wheat'}}/></div>
      </Plx>

      <Plx
        style={{ zIndex: 1 }}
        parallaxData={[
          {
            start: 300 + 300,
            end: 500 + 300,
            easing: "ease",
            properties: [
              {
                startValue: 0,
                endValue: -200,
                property: "translateY",
              },
            ],
          },
        ]}
      >
        <div
          style={{
            width: "100vw",
            height: "80vh",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              width: "20vw",
              height: "60vh",
              backgroundColor: "transparent",
              top: "10vh",
              position: "relative",
              justifyContent: "center",
              left: "20vw",
              display: "flex",
            }}
          >
            <Plx
              parallaxData={[
                {
                  start: 200,
                  end: 300,
                  easing: "ease",
                  properties: [
                    {
                      startValue: 0,
                      endValue: -100,
                      property: "translateX",
                    },
                  ],
                },
              ]}
              style={{
                zIndex: 1,
                position: "relative",
                justifyContent: "center",
                left: "10vw",
                width: "30vw",
              }}
            >
              <div
                style={{
                  margin: "3vw",
                  width: "20vw",
                  height: "20vh",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <MDBCard
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <MDBCardImage
                    style={{ objectFit: "cover" }}
                    src={courses[0].image}
                    alt="..."
                    position="top"
                  />

                  <MDBCardBody>
                    <MDBCardText>{courses[0].name}</MDBCardText>
                    <MDBProgress height="10">
                      <MDBProgressBar
                        width={courses[0].width}
                        valuemin={0}
                        valuemax={100}
                      >
                        {courses[0].width}
                      </MDBProgressBar>
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </Plx>
            <Plx
              parallaxData={[
                {
                  start: 200,
                  end: 300,
                  easing: "ease",
                  properties: [
                    {
                      startValue: 0,
                      endValue: 100,
                      property: "translateX",
                    },
                  ],
                },
              ]}
              style={{
                zIndex: 1,
                position: "relative",
                justifyContent: "center",
                left: "24vw",
                width: "30vw",
                top: "10vh",
              }}
            >
              <div
                style={{
                  margin: "3vw",
                  width: "20vw",
                  height: "20vh",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <MDBCard
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <MDBCardImage
                    style={{ objectFit: "cover" }}
                    src={courses[1].image}
                    alt="..."
                    position="top"
                  />

                  <MDBCardBody>
                    <MDBCardText>{courses[0].name}</MDBCardText>
                    <MDBProgress height="10">
                      <MDBProgressBar
                        width={courses[0].width}
                        valuemin={0}
                        valuemax={100}
                      >
                        {courses[0].width}
                      </MDBProgressBar>
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </Plx>
          </div>
        </div>
      </Plx>

      <Plx
        style={{ zIndex: 0 }}
        parallaxData={[
          {
            start: 300 + 500,
            end: 500 + 500,
            easing: "ease",
            properties: [
              {
                startValue: 0,
                endValue: -200,
                property: "translateY",
              },
            ],
          },
          {
            start: 750 + 500,
            end: 900 + 200,
            easing: "ease",
            properties: [
              {
                startValue: 0,
                endValue: -200,
                property: "translateY",
              },
            ],
          },
        ]}
      >
        <div
          style={{
            width: "100vw",
            height: "80vh",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              width: "20vw",
              height: "60vh",
              backgroundColor: "transparent",
              top: "10vh",
              position: "relative",
              justifyContent: "center",
              left: "20vw",
              display: "flex",
            }}
          >
            <Plx
              parallaxData={[
                {
                  start: 200,
                  end: 300,
                  easing: "ease",
                  properties: [
                    {
                      startValue: 0,
                      endValue: -100,
                      property: "translateX",
                    },
                  ],
                },
              ]}
              style={{
                zIndex: 1,
                position: "relative",
                justifyContent: "center",
                left: "10vw",
                width: "30vw",
              }}
            >
              <div
                style={{
                  margin: "3vw",
                  width: "20vw",
                  height: "20vh",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <div style={{ width: "300px", height: "400px" }}>
                  <MDBCard
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <MDBCardImage
                      style={{ objectFit: "cover" }}
                      src={courses[2].image}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardText>{courses[2].name}</MDBCardText>
                      <MDBProgress height="10">
                        <MDBProgressBar
                          width={courses[2].width}
                          valuemax={100}
                          valuemin={0}
                        >
                          {courses[2].width}
                        </MDBProgressBar>
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </Plx>
            <Plx
              parallaxData={[
                {
                  start: 200,
                  end: 300,
                  easing: "ease",
                  properties: [
                    {
                      startValue: 0,
                      endValue: 100,
                      property: "translateX",
                    },
                  ],
                },
              ]}
              style={{
                zIndex: 1,
                position: "relative",
                justifyContent: "center",
                left: "20vw",
                width: "30vw",
                top: "10vh",
              }}
            >
              <div
                style={{
                  margin: "3vw",
                  width: "20vw",
                  height: "20vh",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <div style={{ width: "300px", height: "400px" }}>
                  <MDBCard
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <MDBCardImage
                      style={{ objectFit: "cover" }}
                      src={courses[3].image}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardText>{courses[3].name}</MDBCardText>
                      <MDBProgress height="10">
                        <MDBProgressBar
                          width={courses[3].width}
                          valuemax={100}
                          valuemin={0}
                        >
                          {courses[3].width}
                        </MDBProgressBar>
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </Plx>
          </div>
        </div>
      </Plx>
      <Plx
        style={{ zIndex: 0 }}
        parallaxData={[
          {
            start: 900 + 300,
            end: 100 + 300,
            easing: "ease",
            properties: [
              {
                startValue: 1,
                endValue: 1,
                property: "scale",
              },
              {
                startValue: 0,
                endValue: -200,
                property: "translateY",
              },
            ],
          },
        ]}
      >
        <div
          style={{
            width: "100vw",
            height: "120vh",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              width: "20vw",
              height: "60vh",
              backgroundColor: "transparent",
              top: "10vh",
              position: "relative",
              justifyContent: "center",
              left: "20vw",
              display: "flex",
            }}
          >
            <Plx
              parallaxData={[
                {
                  start: 200,
                  end: 300,
                  easing: "ease",
                  properties: [
                    {
                      startValue: 0,
                      endValue: -100,
                      property: "translateX",
                    },
                  ],
                },
              ]}
              style={{
                zIndex: 1,
                position: "relative",
                justifyContent: "center",
                left: "10vw",
                width: "30vw",
              }}
            >
              <div
                style={{
                  margin: "3vw",
                  width: "20vw",
                  height: "20vh",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <div style={{ width: "300px", height: "400px" }}>
                  <MDBCard
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <MDBCardImage
                      style={{ objectFit: "cover" }}
                      src={courses[4].image}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardText>{courses[4].name}</MDBCardText>
                      <MDBProgress height="10">
                        <MDBProgressBar
                          width={courses[4].width}
                          valuemax={100}
                          valuemin={0}
                        >
                          {courses[4].width}
                        </MDBProgressBar>
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </Plx>
            <Plx
              parallaxData={[
                {
                  start: 200,
                  end: 300,
                  easing: "ease",
                  properties: [
                    {
                      startValue: 0,
                      endValue: 100,
                      property: "translateX",
                    },
                  ],
                },
              ]}
              style={{
                zIndex: 1,
                position: "relative",
                justifyContent: "center",
                left: "24vw",
                width: "30vw",
                top: "10vh",
              }}
            >
              <div
                style={{
                  margin: "3vw",
                  width: "20vw",
                  height: "20vh",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <div style={{ width: "300px", height: "400px" }}>
                  <MDBCard
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <MDBCardImage
                      style={{ objectFit: "cover" }}
                      src={courses[5].image}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardText>{courses[5].name}</MDBCardText>
                      <MDBProgress height="10">
                        <MDBProgressBar
                          width={courses[5].width}
                          valuemax={100}
                          valuemin={0}
                        >
                          {courses[5].width}
                        </MDBProgressBar>
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </Plx>
          </div>
        </div>
      </Plx>
      <Plx
        style={{ zIndex: 0 }}
        parallaxData={[
          {
            start: 900 + 300,
            end: 1200 + 300,
            easing: "ease",
            properties: [
              {
                startValue: 0,
                endValue: -200,
                property: "translateY",
              },
            ],
          },
          {
            start: 1200 + 300,
            end: 1300 + 300,
            easing: "ease",
            properties: [
              {
                startValue: 0,
                endValue: -200,
                property: "translateY",
              },
            ],
          },
        ]}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              width: "20vw",
              height: "60vh",
              backgroundColor: "transparent",
              top: "10vh",
              position: "relative",
              justifyContent: "center",
              left: "20vw",
              display: "flex",
            }}
          >
            <Plx
              parallaxData={[
                {
                  start: 200,
                  end: 300,
                  easing: "ease",
                  properties: [
                    {
                      startValue: 0,
                      endValue: -100,
                      property: "translateX",
                    },
                  ],
                },
              ]}
              style={{
                zIndex: 1,
                position: "relative",
                justifyContent: "center",
                left: "10vw",
                width: "30vw",
              }}
            >
              <div
                style={{
                  margin: "3vw",
                  width: "20vw",
                  height: "20vh",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <div style={{ width: "300px", height: "400px" }}>
                  <MDBCard
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <MDBCardImage
                      style={{ objectFit: "cover" }}
                      src={courses[6].image}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardText>{courses[6].name}</MDBCardText>
                      <MDBProgress height="10">
                        <MDBProgressBar
                          width={courses[6].width}
                          valuemax={100}
                          valuemin={0}
                        >
                          {courses[6].width}
                        </MDBProgressBar>
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </Plx>
            <Plx
              parallaxData={[
                {
                  start: 200,
                  end: 300,
                  easing: "ease",
                  properties: [
                    {
                      startValue: 0,
                      endValue: 100,
                      property: "translateX",
                    },
                  ],
                },
              ]}
              style={{
                zIndex: 1,
                position: "relative",
                justifyContent: "center",
                left: "24vw",
                width: "30vw",
                top: "10vh",
              }}
            >
              <div
                style={{
                  margin: "3vw",
                  width: "20vw",
                  height: "20vh",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <div style={{ width: "300px", height: "400px" }}>
                  <MDBCard
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <MDBCardImage
                      style={{ objectFit: "cover" }}
                      src={courses[7].image}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardText>{courses[7].name}</MDBCardText>
                      <MDBProgress height="10">
                        <MDBProgressBar
                          width={courses[7].width}
                          valuemax={100}
                          valuemin={0}
                        >
                          {courses[7].width}
                        </MDBProgressBar>
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </Plx>
          </div>
        </div>
      </Plx>
    </div>
  );
};

export default Courses;
