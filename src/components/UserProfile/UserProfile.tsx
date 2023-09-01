import React, { useState } from "react";
import Technical from "../Technical/Technical";
import "./UserProfile.css";
import Plx from "react-plx";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function UserProfile(props: any) {
  // Destructure props with default values if they are undefined
  const { userData = [], technicalData = [] } = props;

  // Placeholder data
  const [data] = useState({
    degree: userData[0]?.degree,
    university: userData[0]?.university,
    mobile: userData[0]?.mobile,
    address: userData[0]?.address,
    image: userData[0]?.image, // Default image URL
  });

  if (!props) {
    // Return an empty div if props are undefined
    return <div></div>;
  }
  return (
    <section style={{ backgroundColor: "transparent" }}>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 1.8, // Start with no scaling (normal size)
                endValue: 1.81, // End with full scaling (normal size)
                property: "scale",
              }, {
                startValue: 1, // Start with no scaling (normal size)
                endValue: -1, // End with full scaling (normal size)
                property: "opacity",
              },
              {
                startValue: -600, // Start with no horizontal shift
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
          zIndex: -3,
        }}
      >
        <img
          style={{ width: "100%", opacity: 1 }}
          src="starry.jpg"
          alt="background"
        />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            easing: [0.25, 0.1, 0.53, 3],
            properties: [
              {
                startValue: 1.8, // Start with no scaling (normal size)
                endValue: 1.81, // End with full scaling (normal size)
                property: "scale",
              }, {
                startValue: -0.2, // Start with no scaling (normal size)
                endValue: 1, // End with full scaling (normal size)
                property: "opacity",
              },
              {
                startValue: -600, // Start with no horizontal shift
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
          zIndex: -3,
        }}
      >
        <img
          style={{ width: "140%", opacity: 1 }}
          src="daytime.jpg"
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: 1, // Start with no scaling (normal size)
                endValue: 0.6, // End with full scaling (normal size)
                property: "scale",
              },   {
                startValue: 100, // Start with no scaling (normal size)
                endValue: 100, // End with full scaling (normal size)
                property: "translateY",
              },
              {
                startValue: 400, // Start with no horizontal shift
                endValue: 400, // End with a 100px rightward shift
                property: "translateX",
              },{
              startValue: 1, // Start with no horizontal shift
              endValue: -1, // End with a 100px rightward shift
              property: "opacity",
            }
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: -2,
        }}
      >
      <div style={{width:'8%',left:'20%',position:'relative'}}>
      <img
          style={{ width: "100%", opacity: 1 }}
          src="moon.png"
          alt="background"
        />
      </div>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: 1, // Start with no scaling (normal size)
                endValue: 1, // End with full scaling (normal size)
                property: "scale",
              },   {
                startValue: 400, // Start with no scaling (normal size)
                endValue: 100, // End with full scaling (normal size)
                property: "translateY",
              },
              {
                startValue: 400, // Start with no horizontal shift
                endValue: 340, // End with a 100px rightward shift
                property: "translateX",
              },{
              startValue: 0, // Start with no horizontal shift
              endValue: 1.2, // End with a 100px rightward shift
              property: "opacity",
            }
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: -2,
        }}
      >
      <div style={{width:'8%',left:'20%',position:'relative'}}>
      <img
          style={{ width: "100%", opacity: 1 }}
          src="sun.png"
          alt="background"
        />
      </div>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            properties: [
              {
                startValue: 1.1, // Start with no scaling (normal size)
                endValue: 1.2, // End with full scaling (normal size)
                property: "scale",
              },
              {
                startValue: 0, // Start with no horizontal shift
                endValue: 500, // End with a 100px rightward shift
                property: "translateY",
              },
              {
                startValue: 1, // Start with no horizontal shift
                endValue: 0.6, // End with a 100px rightward shift
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
        <img
          style={{ width: "100%", opacity: 1 }}
          src="removal.png"
          alt="background"
        />
      </Plx>
      <MDBContainer className="py-5">
        <div style={{ margin: "40px", bottom: "10px", position: "relative" ,top:'40p'}}>
          <MDBCardText style={{ fontSize: "40px",color:'white' }}>
            Basic Information
          </MDBCardText>
        </div>
        <MDBCol>
          <div
            className="container"
            style={{ margin: "20px", right: "20px", position: "relative" }}
          >
            <div className="row">
              <div className="col">
                <div style={{ height: "100%" }} className="custom-card">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src={data.image}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "300px" }}
                      fluid
                    />

                    <div style={{ margin: "20px", left: "10px" }}>
                      <p
                        style={{
                          color: "black",
                          fontSize: "25px",
                          fontFamily: "inherit",
                        }}
                      >
                        {data.degree}
                      </p>
                      <p
                        style={{
                          color: "black",
                          fontSize: "25px",
                          fontFamily: "inherit",
                        }}
                      >
                        {data.university}
                      </p>
                    </div>

                    <div className="d-flex justify-content-center mb-2"></div>
                  </MDBCardBody>
                </div>
              </div>
              <div className="col">
                {technicalData && <Technical technicalData={technicalData} />}
              </div>
            </div>
          </div>

          <MDBCard style={{ backgroundColor: "transparent" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText style={{color:'white'}}>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text"  style={{color:'white'}}>
                    Vibhusha Kannangara
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText  style={{color:'white'}}>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text"  style={{color:'white'}}>
                    vibhooshakannangara@gmail.com
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText  style={{color:'white'}}>Phone</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text"  style={{color:'white'}}>
                    {data.mobile}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText  style={{color:'white'}}>Mobile</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text"  style={{color:'white'}}>
                    {data.mobile}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText  style={{color:'white'}}>Address</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text"  style={{color:'white'}}>
                    {data.address}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBRow>
          <MDBRow lg="8">
            <MDBCard className="mb-4"></MDBCard>
          </MDBRow>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
