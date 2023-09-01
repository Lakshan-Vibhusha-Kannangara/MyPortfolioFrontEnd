import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBRow,
  
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { FaGithub,FaSnowflake } from "react-icons/fa";
import "./ProjectInfo.css";
import {

  GlassMagnifier,

} from "react-image-magnifiers";
interface ProjectInfoItem {
  _id: string;
  imageUrls: string[]; // Change imageUrl to imageUrls
  altText: string;
  description: string[];
  text: string[];
  projectNo: number;
  github:string
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
    fetch(`http://52.65.35.114:4002/projectinfo/${projectNo}`)
      .then((response) => response.json())
      .then((data: ProjectInfoResponse) => {
        setItem(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [projectNo]);

  return (
    <div
      style={{ margin: "40px", width: "90%", left: "2%", position: "relative" }}
    >
      {item ? (
        <div>
          <MDBCard alignment="center">
            <MDBCardHeader style={{ fontSize: "30px" }}>
              <div className="col">
                <p>{item.projectInfo.altText}</p>
                <div style={{marginTop:'-20px'}}>
                  <a
                  
                    className="nav-link"
                    href={item.projectInfo.github}
                    target="_blank"
                    rel="noreferrer"
                  >
               
                    <FaGithub></FaGithub>
                  </a>
                </div>
              </div>
            </MDBCardHeader>

            <MDBCardBody>
              <MDBRow
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                {item.projectInfo.imageUrls.map((item, index) => (
                  <MDBCol
                    key={index}
                    className="mb-4 mb-lg-0"
                    style={{ margin: "10px" }}
                  >
                    <div
                      className="image-container"
                      style={{
                        borderRadius: "10px",
                        maxHeight: "400px",
                        width: "auto",
                        fill: "Background",
                      }}
                    >
                      {" "}
                      <GlassMagnifier
                        imageSrc={item}
                        imageAlt="Example"
                        largeImageSrc={item} // Optional
                        magnifierSize={200}
                        allowOverflow
                      />
                    </div>
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

          <MDBRow style={{ margin: "10px" }}>
            <MDBListGroup light  style={{ minWidth: "22rem" }}>
              {item.projectInfo.text.map((info, index) => (
               
                <MDBListGroupItem
                
                  key={index} // Use a unique key for each item
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                    <FaSnowflake style={{color:'green',marginBottom:'3px',marginRight:'5px'}} />
                    {info}
                    </div>
                    {item.projectInfo.description[index]}
              
                  </div>
                </MDBListGroupItem>
              ))}
            </MDBListGroup>
          </MDBRow>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProjectInfo;
