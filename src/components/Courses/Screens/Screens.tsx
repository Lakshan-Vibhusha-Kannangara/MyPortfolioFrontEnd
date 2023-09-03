import * as React from "react";
import { useEffect, useState } from "react";
import "./Screens.css";
import Plx from "react-plx";
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

export default function Screens() {
  const [offset, setOffset] = useState(0);
  const [iconsActive, setIconsActive] = useState("tab1");

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

  return (
    <div className="App">
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
              src="bg_planet01.svg"
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
              src="bg_planet02.svg"
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
              src="BG-Layered_cropped-1-01.svg"
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
              src="BG-Layered_cropped-1-02.svg"
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
              src="BG-Layered_cropped-1-03.svg"
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
              src="BG-Layered_cropped-1-04.svg"
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
              src="BG-Layered_cropped-1-05.svg"
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
              src="fg-02.svg"
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
              src="fg-03.svg"
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
              src="fg-04.svg"
              alt="background"
            />
          </Plx>
        </div>
        <div className="text-wrapper">
          <h1 className="headline">Parallax</h1>
          <h2 className="sub-headline">Scrolling effect</h2>
        </div>
      </section>
    <div style={{margin:'10vw'}}>
    <MDBTabs className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("tab1")}
            active={iconsActive === "tab1"}
          >
            <MDBIcon fas icon="chart-pie" className="me-2" /> Sales
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("tab2")}
            active={iconsActive === "tab2"}
          >
            <MDBIcon fas icon="chart-line" className="me-2" /> Subscriptions
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("tab3")}
            active={iconsActive === "tab3"}
          >
            <MDBIcon fas icon="cogs" className="me-2" /> Settings
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent >
        <MDBTabsPane show={iconsActive === "tab1"}>Tab 1 content</MDBTabsPane>
        <MDBTabsPane show={iconsActive === "tab2"}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={iconsActive === "tab3"}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </div>

      {/* Make space to scroll */}
      <section className="overflow" />
    </div>
  );
}

