import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";

interface TechnicalProps {
  technicalData: {
    technical?: Array<{
      name: string;
      width: number;
    }>;
  };
}

function Technical({ technicalData }: TechnicalProps) {
  const skillArray = Array.isArray(technicalData?.technical)
    ? technicalData.technical
    : [];

  // Calculate the number of columns per row
  const columnsPerRow = 3;

  // Calculate the width for each column
  const columnWidth = `${100 / columnsPerRow}%`;

  // Group the skill items into rows
  const skillRows = [];
  for (let i = 0; i < skillArray.length; i += columnsPerRow) {
    const rowItems = skillArray.slice(i, i + columnsPerRow);
    skillRows.push(rowItems);
  }

  // Map over the skillRows to generate the skill items in columns
  const skillItems = skillRows.map((row, rowIndex) => (
    <div key={rowIndex} className="d-flex">
      {row.map((skill, columnIndex) => (
        <div key={columnIndex} style={{ flex: 1, padding: "10px", width: columnWidth }}>
          <MDBCardText className="mb-1" style={{ fontSize: ".77rem" }}>
            {skill.name}
          </MDBCardText>
          <MDBProgress className="rounded">
            <MDBProgressBar valuemin={0} width={skill.width} valuemax={100} />
          </MDBProgress>
        </div>
      ))}
    </div>
  ));

  return (
    <MDBCol>
      <MDBCard className="mb-4 mb-md-0">
        <MDBCardBody>
          <MDBCardText className="mb-1">
            <span className="text-primary font-italic me-1" style={{fontSize:"25px"}}>
              Technical Skills
            </span>
          </MDBCardText>
          {skillItems}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default Technical;
