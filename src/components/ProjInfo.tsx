import React, { useState, useEffect } from 'react';
import {
  MDBCol,
  MDBProgress,
  MDBProgressBar,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from 'mdb-react-ui-kit';

interface ProjectAspect {
  name: string;
  progress: number;
  information: string; // Add this property
  width: number; // Add this property
}

function ProjInfo() {
  const [projlData, setProjlData] = useState<ProjectAspect[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjectData = async () => {
    try {
      const response = await fetch('http://52.65.35.114:4002/projinfo');
      const jsonData = await response.json();
      setProjlData(jsonData.projinfo);
      console.log('Fetched projdata:', jsonData.projinfo);
    } catch (error) {
      console.error('Error fetching project data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return (
    <MDBCol md="6">
      <MDBCard className="mb-4 mb-md-0">
        <MDBCardBody>
          <MDBCardText className="mb-4">
            <span className="text-primary font-italic me-1">Projects Status</span>
          </MDBCardText>

          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {projlData.map((aspect, index) => (
                <div key={index}>
                  <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>{aspect.information}</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={aspect.width} valuemin={0} valuemax={100} />
                  </MDBProgress>
                </div>
              ))}
            </>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProjInfo;
