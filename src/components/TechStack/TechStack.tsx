import React from "react";
import "./TechStack.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

import styled, { keyframes, css } from "styled-components";

function TechStack(technologyData: any) {
  const row1 = [
    technologyData.courses[0].image,
    technologyData.courses[1].image,
    technologyData.courses[2].image,
    technologyData.courses[3].image,
    technologyData.courses[4].image,
    technologyData.courses[5].image,
  ];

  const row2 = [
    technologyData.courses[6].image,
    technologyData.courses[7].image,
    technologyData.courses[8].image,
    technologyData.courses[9].image,
    technologyData.courses[10].image,
    technologyData.courses[11].image,
  ];

  if (!technologyData.courses) {
    return <div></div>;
  }

  return (
    <div
      style={{
        margin: "10px",
        width: "105vw",
        height: "100vh",
        left: "-5vh",
        position: "relative",
        background:
          "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
      }}
    >
      <div style={{ top: "10vh", position: "relative" }}>
        <Wrapper>
          <MDBCard
            background="dark"
            className="text-white"
            style={{ width: "25vw" }}
          >
            <MDBCardImage
              overlay
              src="https://tectera.com/wp-content/uploads/2021/06/technology-stack-for-web-application-main.jpg"
              alt="..."
            />
            <MDBCardOverlay
              style={{
                top: "20vh",
                left: "8vw",
                fontSize: "50px",
                color: "black",
              }}
            >
              <MDBCardTitle style={{ color: "black" }}>
                My Tech-Stack
              </MDBCardTitle>
            </MDBCardOverlay>
          </MDBCard>
          <Note></Note>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </div>
    </div>
  );
}

export default TechStack;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
