import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { FaRegCheckCircle } from "react-icons/fa";
import './ProjectInfo.css'

interface ProjectInfoItem {
  _id: string;
  imageUrls: string[]; // Change imageUrl to imageUrls
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

  // Parse the projectNo from the URL manually
  const pathnameParts = window.location.pathname.split("/");
  const projectNo = pathnameParts[pathnameParts.length - 1];

  useEffect(() => {
    fetch(`http://localhost:4002/projectinfo/${projectNo}`)
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
 <div className="image-container"> <img
   
   src={item.projectInfo.imageUrls[0]}
    className="w-100 shadow-1-strong rounded mb-4"
    alt="Boat on Calm Water"
    style={{
      objectFit: "cover", // Auto-crop and fit
      objectPosition: "center", // Center the image
      height: "33%",
      width: "100%", // Ensure the image takes the full width of the container
    }}
  /></div>

 <div className="image-container"> <img
    src={item.projectInfo.imageUrls[1]}
    className="w-100 shadow-1-strong rounded mb-4"
    alt="Wintry Mountain Landscape"
    style={{
      objectFit: "cover", // Auto-crop and fit
      objectPosition: "center", // Center the image
      height: "66%",
      width: "100%", // Ensure the image takes the full width of the container
    }}
  /></div>
</MDBCol>

<MDBCol lg={3} className="mb-4 mb-lg-0">
 <div className="image-container">
 <img
 src={item.projectInfo.imageUrls[2]}
    style={{
      objectFit: "cover",
      objectPosition: "center",
      height: "66%",
      width: "100%",
    }}

    className="w-100 shadow-1-strong rounded mb-4"
    alt="Mountains in the Clouds"
  />
 </div>

 <div className="image-container">
 <img
 src={item.projectInfo.imageUrls[3]}
    style={{
      objectFit: "cover",
      objectPosition: "center",
      height: "33%",
      width: "100%",
    }}

    className="w-100 shadow-1-strong rounded mb-4"
    alt="Boat on Calm Water"
  />
 </div>
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