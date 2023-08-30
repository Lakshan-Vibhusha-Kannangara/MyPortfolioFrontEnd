import React, { useState } from "react";
import Technical from "../Technical/Technical";
import './UserProfile.css'

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
  const {
    userData = [],
    technicalData = [],
   
  } = props;

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
    <section style={{ backgroundColor: "#eee" }}>
    
      <MDBContainer className="py-5">
      <div style={{margin:"0px",bottom:"10px",position:"relative"}}><MDBCardText style={{fontSize:'40px'}}>Basic Information</MDBCardText></div>
        <MDBCol> 
        <div className="container" style={{margin:"20px",right:'20px',position:"relative"}} >
        <div className="row">
        <div className="col" >

        <div style={{height:"100%"}} className="custom-card">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={data.image}
                    
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "300px" }}
                    fluid
                  />
                         
               <div style={{margin:"20px",left:"10px"}}>
               <p style={{color:"black",fontSize:"25px",fontFamily:"inherit"}}>{data.degree}</p>
                  <p style={{color:"black",fontSize:"25px",fontFamily:"inherit"}}>{data.university}</p>
               </div>
             
                  <div className="d-flex justify-content-center mb-2">
               
                  </div>
                </MDBCardBody>
             
                </div>

        </div>
        <div className="col">
        {technicalData && <Technical technicalData={technicalData} />}

        </div>
      </div>
    </div>
         
               
               <MDBCard>
               <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Vibhusha Kannangara
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        vibhooshakannangara@gmail.com
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {data.mobile}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {data.mobile}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {data.address}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
               </MDBCard></MDBCol>
        <MDBRow>
          <MDBRow lg="8">
            <MDBCard className="mb-4">
        
      
            </MDBCard>
          </MDBRow>
        </MDBRow>
      </MDBContainer>

    </section>
  );
}
