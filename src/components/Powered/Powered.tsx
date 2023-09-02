import React from "react";
import "./Powered.css";
import Plx from "react-plx";
import {
  MDBCard,
  
  MDBCardImage,

  MDBRipple,
} from "mdb-react-ui-kit";

const parallaxData = [
  {
    start: 0,
    duration: "80%",
    properties: [
      {
        startValue: 0,
        endValue: -100,
        property: "translateX",
        unit: "%",
      },
    ],
  },
];

const Power = () => (
  <div>
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
        {
          start: 1000,
          end: 1800,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity",
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
      <img style={{ width: "100%" }} src="background.jpg" alt="background" />
    </Plx>

    <Plx
      parallaxData={[
        {
          start: 1000,
          end: 1100,
          properties: [
            {
              startValue: 1,
              endValue: 1,
              property: "opacity",
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
        opacity: "0",
      }}
    >
      <img style={{ width: "100%" }} src="daytime.jpg" alt="background" />
    </Plx>
    <div style={{ height: 1000, top: "100vh", position: "relative" }}>
      <Plx parallaxData={parallaxData} className="wrapper">
        <div
          className="box"
          style={{
            height: "60vh",
            top: "10vh",
            position: "relative",
            borderRadius: "20px",
            backgroundColor: "transparent",
          }}
        >
          <MDBCard style={{ borderRadius: "20px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                style={{ borderRadius: "20px" }}
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png"
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>
        <div
          className="box"
          style={{
            height: "60vh",
            top: "10vh",
            position: "relative",
            borderRadius: "20px",
            backgroundColor: "transparent",
          }}
        >
          <MDBCard style={{ borderRadius: "20px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                style={{ borderRadius: "20px" }}
                src="https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png"
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>
        <div
          className="box"
          style={{
            height: "60vh",
            top: "10vh",
            position: "relative",
            borderRadius: "20px",
            backgroundColor: "transparent",
          }}
        >
          <MDBCard style={{ borderRadius: "20px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                style={{ borderRadius: "20px" }}
                src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>
        
        <div
          className="box"
          style={{
            height: "60vh",
            top: "10vh",
            position: "relative",
            borderRadius: "20px",
            backgroundColor: "transparent",
          }}
        >
          <MDBCard style={{ borderRadius: "20px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                style={{ borderRadius: "20px" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png"
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>
        <div
          className="box"
          style={{
            height: "60vh",
            top: "10vh",
            position: "relative",
            borderRadius: "20px",
            backgroundColor: "transparent",
          }}
        >
          <MDBCard style={{ borderRadius: "20px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                style={{ borderRadius: "20px" }}
                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253504/aws-icon-sm.png"
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>
        <div
          className="box"
          style={{
            height: "60vh",
            top: "10vh",
            position: "relative",
            borderRadius: "20px",
            backgroundColor: "transparent",
          }}
        >
          <MDBCard style={{ borderRadius: "20px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                style={{ borderRadius: "20px" }}
                src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>
      </Plx>
    </div>
    
  </div>
);

export default Power;
