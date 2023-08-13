import React from 'react';
import {
  MDBCol,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBProgress,
  MDBProgressBar,
} from 'mdb-react-ui-kit';

interface TechnicalProps {
  technicalData: {
    technical?: Array<{
      name: string;
      width: number;
    }>;
  };
}

function Technical({ technicalData }: TechnicalProps) {
  // Check if data.info is an array before using it
  const skillArray = Array.isArray(technicalData?.technical) ? technicalData.technical : [];

  // Map over the skillArray to generate the skill items
  const skillItems = skillArray.map((skill, index) => (
    <div key={index} style={{ padding: '10px' }}>
      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>{skill.name}</MDBCardText>
      <MDBProgress className="rounded">
        <MDBProgressBar valuemin={0} width={skill.width} valuemax={100} />
      </MDBProgress>
    </div>
  ));

  return (
    <MDBCol md="6">
      <MDBCard className="mb-4 mb-md-0">
        <MDBCardBody>
          <MDBCardText className="mb-4">
            <span className="text-primary font-italic me-1">Technical Skills</span>
          </MDBCardText>
          {skillItems}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default Technical;
