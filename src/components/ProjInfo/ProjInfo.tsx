import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBProgress,
  MDBProgressBar,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";

interface ProjectAspect {
  name: string;
  progress: number;
  information: string;
  width: number;
}

interface ProjInfoProps {
  projlData: ProjectAspect[];
  isLoading: boolean;
}

function ProjectAspectBar({ aspect }: { aspect: ProjectAspect }) {
  return (
    <div>
      <MDBCardText className="mt-4 mb-1">
        {aspect.information}
      </MDBCardText>
      <MDBProgress className="rounded">
        <MDBProgressBar width={aspect.width} valuemin={0} valuemax={100} />
      </MDBProgress>
    </div>
  );
}

function ProjInfo(props: ProjInfoProps) {
  console.log("projinfo   ", props);

  return (
    <MDBCol md="6">
      <MDBCard className="mb-4 mb-md-0">
        <MDBCardBody>
          <MDBCardText className="mb-4">
            <span className="text-primary font-italic me-1">
              Projects Status
            </span>
          </MDBCardText>

          {props.isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {props.projlData.map((aspect, index) => (
                <ProjectAspectBar key={index} aspect={aspect} />
              ))}
            </>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProjInfo;
