import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { FaRegCheckCircle } from "react-icons/fa";

interface ProjectInfoItem {
  _id: string;
  imageUrl: string;
  altText: string;
  description: string;
  text: string;
  projectNo: number;
}

interface ProjectInfoResponse {
  success: boolean;
  projectInfo: ProjectInfoItem;
}

function ProjectInfo() {
  const [item, setItem] = useState<ProjectInfoResponse | null>(null);
  const zoomedImageStyle = {
    transform: 'scale(1.2)', // Increase the scale factor to zoom in more
    transition: 'transform 0.3s ease', // Add a smooth transition effect
  };
  // Parse the projectNo from the URL manually
  const pathnameParts = window.location.pathname.split("/");
  const projectNo = pathnameParts[pathnameParts.length - 1];

  useEffect(() => {
    fetch(`http://http://52.65.35.114:4002/projectinfo/${projectNo}`)
      .then((response) => response.json())
      .then((data: ProjectInfoResponse) => {
        setItem(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [projectNo]);

  return (
    <div style={{ margin: "40px", width: "80%" }}>
      {item ? (
        <MDBRow>
       <MDBCol lg={3} md={12} className="mb-4 mb-lg-0">
  <img
    src={item.projectInfo.imageUrl}
    className="w-100 shadow-1-strong rounded mb-4"
    alt="Boat on Calm Water"
    style={{
      objectFit: "cover", // Auto-crop and fit
      objectPosition: "center", // Center the image
      height: "33%",
      width: "100%", ...zoomedImageStyle// Ensure the image takes the full width of the container
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
    }}
  />

  <img
    src={item.projectInfo.imageUrl}
    className="w-100 shadow-1-strong rounded mb-4"
    alt="Wintry Mountain Landscape"
    style={{
      objectFit: "cover", // Auto-crop and fit
      objectPosition: "center", // Center the image
      height: "66%",
      width: "100%",...zoomedImageStyle // Ensure the image takes the full width of the container
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
    }}
  />
</MDBCol>

<MDBCol lg={3} className="mb-4 mb-lg-0">
  <img
    style={{
      objectFit: "cover",
      objectPosition: "center",
      height: "66%",
      width: "100%",...zoomedImageStyle
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
    }}
    src={item.projectInfo.imageUrl}
    className="w-100 shadow-1-strong rounded mb-4"
    alt="Mountains in the Clouds"
  />

  <img
    style={{
      objectFit: "cover",
      objectPosition: "center",
      height: "33%",
      width: "100%",...zoomedImageStyle
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
    }}
    src={item.projectInfo.imageUrl}
    className="w-100 shadow-1-strong rounded mb-4"
    alt="Boat on Calm Water"
  />
</MDBCol>

          <MDBCol
            lg={6}
            md={10}
            key={item.projectInfo._id}
            className="mb-4 mb-lg-0"
          >
            <MDBTypography
              listUnStyled
              className="mb-0"
              style={{ fontSize: "30px" }}
            >
              <li className="mb-10">
                <FaRegCheckCircle style={{ color: "green" }} />
                {item.projectInfo.text}
              </li>
              <li className="mb-10">{item.projectInfo.description}</li>
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProjectInfo;