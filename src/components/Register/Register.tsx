import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';

interface FormData {
  username: string;
  email: string;
  password: string;
  firstName: string; // Add firstName property
  lastName: string; // Add lastName property
}

function Register() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    firstName: '', // Initialize firstName
    lastName: '',  // Initialize lastName
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    if (name === 'firstName' || name === 'lastName') {
      // Join first name and last name to create the username
      const newUsername = `${formData.firstName} ${formData.lastName}`;
      setFormData({ ...formData, [name]: newValue, username: newUsername });
    } else {
      setFormData({ ...formData, [name]: newValue });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers that might be required by your server here.
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // Registration was successful, you can redirect or show a success message here.
        console.log('Registration successful');
      } else {
        // Handle registration errors here.
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ margin: '5vw' }}>
      <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput label='First Name' id='form1' type='text' name="firstName" onChange={handleChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput label='Last Name' id='form2' type='text' name="lastName" onChange={handleChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput label='Your Email' id='form3' type='email' name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput label='Password' id='form4' type='password' name="password" value={formData.password} onChange={handleChange} />
                </div>

                <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>
              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Register;
