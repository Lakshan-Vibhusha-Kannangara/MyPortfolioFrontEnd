import React, { useState } from "react";

import Technical from "../Technical/Technical.tsx";
import ProjInfo from "../ProjInfo/ProjInfo.tsx";


import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export default function UserProfile(props: any) {
  const { userData, technicalData, projlData, isLoading } = props;

  // Placeholder data

  const [data, setInfoData] = useState({
    degree:  userData[0].degree,
    university: userData[0].university,
    mobile:  userData[0].mobile,
    address:  userData[0].address,
    image:
    userData[0].image, // Default image URL
  });
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
       

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={data.image}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '250px' }}
                  fluid />
                <p className="text-muted mb-1">{data.degree}</p>
                <p className="text-muted mb-4">{data.university}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
            <MDBCardHeader className='mb-4'><p style={{position:'relative',left:'200px'}}>Languages</p></MDBCardHeader>
              <MDBCardBody className="p-0">
                
                <MDBListGroup flush className="rounded-3">
               
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>Sinhala</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>English</MDBCardText>
                  </MDBListGroupItem>
              
                  
                 
                </MDBListGroup>

             
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Vibhusha Kannangara</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">vibhooshakannangara@gmail.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.mobile}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.mobile}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{data.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>


            <MDBRow>
{technicalData && <Technical technicalData={technicalData} />}
      {projlData && !isLoading ? (
        <ProjInfo projlData={projlData} isLoading={isLoading} />
      ) : (
        // Render a message if project data is not available or loading
        <p>No project information available.</p>
      )}
    </MDBRow>
      
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

