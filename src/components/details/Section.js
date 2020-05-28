import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";

const StyledSection = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center center;
  grid-gap: 1em;
  max-width: 90%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Description = styled.div`
  width: 60%;
  margin: 10px;

  h1 {
    margin-bottom: 10px;
    color: ${setColor.blue};
  }
  p {
    margin-bottom: 50px;
    color: ${setColor.mainGrey};
  }
`;
function Section({ images, description }) {
  return (
    <StyledSection>
      <Gallery images={images}>
        {images.map((image, i) => (
          <img src={image} alt="" key={i} />
        ))}
        <Description>
          <h1>About this Project</h1>
          <p>{description.about}</p>

          <h1>Technical Sheet</h1>
          <p>{description.tech}</p>
          <h1>distribution </h1>
          <p>{description.dist}%</p>
          <h1>Resources </h1>

          <p>{description.resource}</p>
        </Description>
      </Gallery>
    </StyledSection>
  );
}

export default Section;
