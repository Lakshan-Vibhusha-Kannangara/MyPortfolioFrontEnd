import React from "react";
import "./Powered.css";
import Plx from "react-plx";
import { MDBCard, MDBCardImage, MDBRipple,MDBCardTitle } from "mdb-react-ui-kit";
import {
	FaArrowDown
  }from "react-icons/fa";
const parallaxData = [
  {
    start: 0,
    duration: "120%",
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
    <div
    style={{
      background: "rgb(195, 231, 238)",
      backgroundImage:
        "linear-gradient(90deg, rgba(195, 231, 238, 1) 0%, rgba(213, 213, 215, 1) 28%, rgba(247, 247, 247, 0.9010197829131653) 56%, rgba(208, 247, 255, 1) 100%)",
    }}
  >
    <div style={{ height: "800vh", top: "100vh", position: "relative" }}>
      <Plx parallaxData={parallaxData} className="wrapper">
        <div
          className="box"
          style={{
            height: "60vh",
            top: "22vh",
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
            top: "22vh",
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
            top: "22vh",
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
            top: "22vh",
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
            top: "22vh",
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
            top: "22vh",
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
                src="https://cloud2data.com/wp-content/uploads/2023/01/HTML-CSS-Review.png"
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
            top: "22vh",
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
                src="https://blog.toothpickapp.com/content/images/2022/08/ts_logo.png"
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
            top: "22vh",
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
                src="https://4.bp.blogspot.com/-ou-a_Aa1t7A/W6IhNc3Q0gI/AAAAAAAAD6Y/pwh44arKiuM_NBqB1H7Pz4-7QhUxAgZkACLcBGAs/s1600/spring-boot-logo.png"
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
            top: "22vh",
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
                src="https://4.bp.blogspot.com/-ou-a_Aa1t7A/W6IhNc3Q0gI/AAAAAAAAD6Y/pwh44arKiuM_NBqB1H7Pz4-7QhUxAgZkACLcBGAs/s1600/spring-boot-logo.png"
                fluid
                alt="..."
              />
            </MDBRipple>
          </MDBCard>
        </div>

      </Plx>
      <div>		<MDBCardTitle className="MDBCardTitle" style={{left:'42vw',top:'-80vh',position:'relative',fontSize:'45px',color:'white'}}>Scroll Down</MDBCardTitle>
		<FaArrowDown  className="MDBCardTitle" style={{width:'20vh',height:'auto',left:'56vw',position:'relative',top:'-95vh',color:'wheat'}}/></div>   </div>
  </div>
  <div  style={{width:'100vw',height:'100vh',position:'relative',top:'0vh',margin:'auto',
      background: "rgb(195, 231, 238)",
      backgroundImage:
        "linear-gradient(90deg, rgba(195, 231, 238, 1) 0%, rgba(213, 213, 215, 1) 28%, rgba(247, 247, 247, 0.9010197829131653) 56%, rgba(208, 247, 255, 1) 100%)",
    }}>
   <h1 style={{top:'12vh',position:'relative',left:'40vw'}}>Overall Architecture</h1>
   <p>To be drawn</p>
   <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210204220403/Web-Application-Architecture.png" alt="" style={{left:'18vw',position:'relative',margin:'auto',width:'60vw',height:'auto',top:'10vh'}} />
    </div>
  </div>
);

export default Power;
