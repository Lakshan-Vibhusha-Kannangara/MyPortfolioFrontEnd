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
console.log(item)
  return (
  <div></div>
  );
}

export default ProjectInfo;
