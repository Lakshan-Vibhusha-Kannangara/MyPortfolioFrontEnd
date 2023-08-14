import React, { useState, useEffect } from "react";
import Interest from "../Interest/Interest.tsx";
import CarouselPage from "../Carousel/Carousel.tsx";
import Footer from "../Footer/Footer.tsx"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaDatabase,
  FaServer,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import "./Home.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
} from "mdb-react-ui-kit";
function Home(essential:any) {
  let essentialData={name:"",image:"",address:"",title:"",about:"",images:[]}

  essentialData=essential.essential
  console.log(essential.essential)
  const [data, setData] = useState<any>(null);
  const [scrollToBottomClicked, setScrollToBottomClicked] = useState(false);
  
  const divStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${"https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  const gradientStyle = {
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(190,127,164,1) 0%, rgba(0,212,255,1) 100%)",

  };

  const fetchData = async (url: string, setStateCallback: (data: any) => void) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setStateCallback(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData("http://52.65.35.114:4002/interests", setData);
    if (scrollToBottomClicked) {

      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [scrollToBottomClicked]);

  const handleScrollToBottom = () => {
    setScrollToBottomClicked(true);
  };

  console.log("the props here  ...",essentialData);
  if(false){
    return(<div>Null</div>)
      }
  return (
    <div>
    <div>
      {/* Background image */}
      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={gradientStyle}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <div className="text-white">
                <h1 className="mb-3">Hello There!</h1>
                <h5 className="mb-4">
                  Welcome to my Professional Portfolio. I created this
                  personal web app from scratch using MERN Stack. If you want
                  to get to know me more please don't hesitate to reach out to
                  me.
                </h5>
                <div style={{ bottom: "10px", position: "relative" }}>
                  <FaDatabase /> MongoDB (Database)
                  <FaServer /> Express.js (Server)
                  <FaReact /> React (Frontend)
                  <FaNodeJs /> Node.js (Server)
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                  onClick={handleScrollToBottom}
                >
                  Let's get started
                </button>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      {/* Portfolio section */}
    </div>

    <section>
      <div style={divStyle}>
        <MDBContainer className="py-5 h-5">
          <MDBRow>
            <MDBCol>
              <MDBCard>
                <div
                  className="rounded-top  d-flex flex-row"
                  style={{
                    backgroundColor: "#b4a7fa",
                    height: "200px",
                    fontSize: "25px",
                  }}
                >
                  <div className="ms-4 mt-5 d-flex flex-column">
                    <img
                      src={essentialData.image}
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{
                        width: "200px",
                        zIndex: 1,
                        top: "0px",
                        position: "relative",
                      }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "40px" }}>
                    <p style={{ fontSize: "60px", color: "white" }}>
                      {essentialData.name}
                    </p>
                    <p
                      style={{
                        fontSize: "30px",
                        left: "30px",
                        position: "relative",
                        color: "white",
                        top: 0,
                      }}
                    >
                      {essentialData.address}
                    </p>
                    <div
                      style={{
                        left: "700px",
                        position: "relative",
                        bottom: "100px",
                      }}
                    >
                      <a
                        className="btn btn-primary"
                        style={{ backgroundColor: "#0082ca", margin: "10px" }}
                        href="https://linkedin.com/in/vibhoosha-kannangara"
                        role="button"
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        className="btn btn-primary"
                        style={{ backgroundColor: "#333333", margin: "10px" }}
                        href="https://github.com/Lakshan-Vibhusha-Kannangara"
                        role="button"
                      >
                        <FaGithub />
                      </a>

                      <a
                        className="btn btn-primary"
                        style={{ backgroundColor: "#3b5998", margin: "10px" }}
                        href="https://www.facebook.com/vibusha.kannangara"
                        role="button"
                      >
                        <FaFacebookF />
                      </a>

                      <a
                        className="btn btn-primary"
                        style={{ backgroundColor: "#ac2bac", margin: "10px" }}
                        href="https://www.instagram.com/lakshank_97/"
                        role="button"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#a8f7fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="large text-muted mb-3 h4">
                        {essentialData.title}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="large text-muted mb-3 h1">About Me</p>
                    <div
                      className="p-4"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      <p className="font-italic mb-1">
                        {essentialData.about}
                      </p>
                    </div>
                  </div>

                  <div className="row g-2">
                    <p className="large text-muted mb-3 h1">My Interests</p>
                  </div>

                  <Interest data={data} />
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </section>

    <div>
      <CarouselPage data={essentialData.images} />
    </div>

  <Footer></Footer>
  </div>
  );
}

export default Home;
