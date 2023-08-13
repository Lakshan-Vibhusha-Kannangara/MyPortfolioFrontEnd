import React, { useState, useEffect } from 'react';
import Technical from './Technical.tsx';
import ProjInfo from './ProjInfo.tsx';
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
  MDBCardHeader
} from 'mdb-react-ui-kit';


export default function UserProfile() {
  const [data, setInfoData] = useState({
    degree: 'Loading...',
    university: 'Loading...',
    mobile: 'Loading...',
    address: 'Loading...',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp', // Default image URL
  });

  const [technicalData, setTechnicalData] = useState({
    

  });

  const fetchInfoData = async () => {
    try {
      const response = await fetch('http://52.65.35.114:4002/info'); // Replace with your specific endpoint
      const jsonData = await response.json();
      setInfoData(jsonData.info[0]);
      console.log('Fetched info data:', jsonData);
    } catch (error) {
      console.error('Error fetching info data:', error);
    }
  };

  const fetchTechnicalData = async () => {
    try {
      const response = await fetch('http://52.65.35.114:4002/technical'); // Replace with your specific endpoint
      const jsonData = await response.json();
      setTechnicalData(jsonData);
      console.log('Fetched technical data:', jsonData);
    } catch (error) {
      console.error('Error fetching technical data:', error);
    }
  };

  useEffect(() => {
    
    fetchTechnicalData();
    fetchInfoData();
  }, []);
  
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
                  style={{ width: '150px' }}
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
            <Technical  technicalData={technicalData}></Technical>
            <ProjInfo></ProjInfo>
     
    </MDBRow>

      
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}