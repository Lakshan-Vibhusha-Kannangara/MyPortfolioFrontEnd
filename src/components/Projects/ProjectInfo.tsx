import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { FaGithub, FaSnowflake } from "react-icons/fa";
import "./ProjectInfo.css";
import { GlassMagnifier } from "react-image-magnifiers";
import Load from "../Home/Load";
import "./Screens.css";
import Plx from "react-plx";

interface ProjectInfoItem {
  _id: string;
  imageUrls: string[];
  altText: string;
  description: string[];
  text: string[];
  projectNo: number;
  github: string;
  content: string;
  videos: string[];
}

interface ProjectInfoResponse {
  success: boolean;
  projectInfo: ProjectInfoItem;
}

export default function ProjectInfo() {
  const [offset, setOffset] = useState(0);
  const [iconsActive, setIconsActive] = useState("tab1");
  const [item, setItem] = useState<ProjectInfoResponse | null>(null);

  // Parse the projectNo from the URL manually
  const pathnameParts = window.location.pathname.split("/");
  const projectNo = pathnameParts[pathnameParts.length - 1];

  useEffect(() => {
    fetch(`http://172.232.122.108:4002/projectinfo/${projectNo}`)
      .then((response) => response.json())
      .then((data: ProjectInfoResponse) => {
        setItem(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [projectNo]);
  const handleIconsClick = (value: string) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  if (!item) {
    return (
      <div>
        <Load />
      </div>
    );
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        position: "relative",
        top: "-60vh",
      }}
    >
      <section className="hero">
        <div>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 1000,
                easing: [0.25, 0.1, 0.53, 3],
                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -10, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: "10vw",
              top: "10vh",
              width: "30vw",
              height: "30vh",
              margin: "auto",
              scale: "1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/bg_planet01.svg"
              alt="background"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 1000,
                easing: [0.25, 0.1, 0.53, 3],
                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -10, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: "70vw",
              top: "20vh",
              width: "8vw",
              height: "8vh",
              margin: "auto",
              scale: "1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/bg_planet02.svg"
              alt="background"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 1000,
                easing: [0.25, 0.1, 0.53, 3],
                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -30, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: 0,
              top: "-25vh",
              width: "100vw",
              height: "2vh",
              margin: "auto",
              scale: "1.1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/BG-Layered_cropped-1-01.svg"
              alt="background"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,

                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -60, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: "100vw",
              height: "2vh",
              margin: "auto",
              scale: "1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/BG-Layered_cropped-1-02.svg"
              alt="background"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,

                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -80, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: "20vw",
              top: 0,
              width: "100vw",
              height: "2vh",
              margin: "auto",
              scale: "1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/BG-Layered_cropped-1-03.svg"
              alt="background"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,

                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -100, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: "2vw",
              top: 0,
              width: "110vw",
              height: "12vh",
              margin: "auto",
              scale: "1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/BG-Layered_cropped-1-04.svg"
              alt="background"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,

                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -120, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: "40vw",
              top: 0,
              width: "100vw",
              height: "2vh",
              margin: "auto",
              scale: "1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/BG-Layered_cropped-1-05.svg"
              alt="background"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 1000,

                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -140, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: "10vw",
              top: "50vh",
              width: "100vw",
              height: "2vh",
              margin: "auto",
              scale: "1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/fg-02.svg"
              alt="background"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,

                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -140, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: "10vw",
              top: "50vh",
              width: "100vw",
              height: "2vh",
              margin: "auto",
              scale: "1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/fg-03.svg"
              alt="background"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,

                properties: [
                  {
                    startValue: 0, // Start with no horizontal shift
                    endValue: -180, // End with a 100px rightward shift
                    property: "translateX",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: "25vw",
              top: "50vh",
              width: "100vw",
              height: "2vh",
              margin: "auto",
              scale: "1",
              zIndex: -4,
            }}
          >
            <img
              style={{ width: "100%", opacity: 1 }}
              src="/fg-04.svg"
              alt="background"
            />
          </Plx>
        </div>
      </section>
      <div style={{ height: "40vh", top: "-20vh", position: "relative" }}>
        <div>
          <MDBCard
            alignment="center"
            style={{ backgroundColor: "transparent" }}
          >
            <MDBCardHeader
              style={{
                fontSize: "30px",
                opacity: "0.7",
                backgroundColor: "white",
              }}
            >
              <div className="col">
                <p>{item.projectInfo.altText}</p>
                <div style={{ marginTop: "-20px" }}>
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
                  containerType: "normal",
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
                        overflow: "hidden",
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

          <div style={{ margin: "10vw", top: "0vh", position: "relative" }}>
            <MDBTabs className="mb-3" style={{ opacity: "0.9" }}>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleIconsClick("tab1")}
                  active={iconsActive === "tab1"}
                >
                  <MDBIcon fas icon="chart-pie" className="me-2" /> Description
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleIconsClick("tab2")}
                  active={iconsActive === "tab2"}
                >
                  <MDBIcon fas icon="chart-line" className="me-2" /> Info
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleIconsClick("tab3")}
                  active={iconsActive === "tab3"}
                >
                  <MDBIcon fas icon="cogs" className="me-2" /> Videos
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent style={{ opacity: "0.8" }}>
              <MDBTabsPane show={iconsActive === "tab1"}>
                <MDBCard>
                  <div
                    style={{
                      margin: "40px",
                      width: "90%",
                      left: "2%",
                      position: "relative",
                    }}
                  >
                    <p>{item.projectInfo.content}</p>
                  </div>
                </MDBCard>
              </MDBTabsPane>
              <MDBTabsPane show={iconsActive === "tab2"}>
                <div
                  style={{
                    margin: "40px",
                    width: "90%",
                    left: "2%",
                    position: "relative",
                  }}
                >
                  <div>
                    <MDBRow style={{ margin: "10px" }}>
                      <MDBListGroup light style={{ minWidth: "22rem" }}>
                        {item.projectInfo.text.map((info, index) => (
                          <MDBListGroupItem
                            key={index} // Use a unique key for each item
                            className="d-flex justify-content-between align-items-start"
                          >
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">
                                <FaSnowflake
                                  style={{
                                    color: "green",
                                    marginBottom: "3px",
                                    marginRight: "5px",
                                  }}
                                />
                                {info}
                              </div>
                              {item.projectInfo.description[index]}
                            </div>
                          </MDBListGroupItem>
                        ))}
                      </MDBListGroup>
                    </MDBRow>
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={iconsActive === "tab3"}>
                {" "}
                <section className="text-center">
                  <h5 className="mb-4">Project Video</h5>
                  <div className="d-flex justify-content-evenly">
                    {" "}
                    {item?.projectInfo.videos.map((video, index) => (
                      <div
                        key={index}
                        className="embed-responsive embed-responsive-16by9 shadow-4-strong"
                      >
                        <iframe
                          width="500px"
                          height="320px" // Increased height for larger video
                          src={video}
                          title={`Video ${index}`} // Use a unique title for each video
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
      </div>
      <section className="overflow" />
    </div>
  );
}
