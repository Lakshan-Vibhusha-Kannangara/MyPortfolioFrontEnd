import React, { useState } from "react";
import "./about.css";

import { FaPlay ,FaPager} from "react-icons/fa";


import {
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";

const About = () => {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://avatars.githubusercontent.com/u/77208138?v=4"
              alt=""
            />
          </div>
        </div>

        <div>
          <div style={{position:'relative',top:'6vh'}}>
            <MDBTabs className="mb-3">
              <MDBTabsItem style={{ backgroundColor: "transparent" }}>
                <MDBTabsLink
                  style={{ backgroundColor: "transparent" }}
                  onClick={() => handleBasicClick("tab1")}
                  active={basicActive === "tab1"}
                >
                  <article className="about__card">
                    <FaPlay className="about__icon" />
                    <h5>Video Résumé</h5>
                  </article>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem style={{ backgroundColor: "transparent" }}>
                <MDBTabsLink
                  style={{ backgroundColor: "transparent" }}
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                >
                  <article className="about__card">
                    <FaPager className="about__icon" />
                    <h5>PDF Résumé </h5>
                  </article>
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
              <div
                      
                        className="embed-responsive embed-responsive-16by9 shadow-4-strong"
                      >
                        <iframe
                          width="500px"
                          height="320px" // Increased height for larger video
                          src="https://www.youtube.com/embed/e4_ak4TNluo"
                          title={`Video`} // Use a unique title for each video
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                Tab 2 content
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
