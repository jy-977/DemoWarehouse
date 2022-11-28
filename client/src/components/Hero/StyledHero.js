import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: grid;
  align-content: center;
  justify-items: center;

  @media (min-width: 48em) {
    grid-template-columns: repeat(12, 1fr);
    min-height: 100vh;
  }
`;

export const StyledContentContainer = styled.div`
  text-align: center;
  
  @media (min-width: 48em) {
    grid-column: 1 / 8;
    text-align: start;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 2rem;

  @media (min-width: 48em) {
    font-size: 3rem;
  }
`;

export const StyledParagraph = styled.p``;


export const StyledImageContainer = styled.div`
  position: absolute;
  opacity: 0.2;
  inset: 0;
  margin: auto;
  width: 100%;
  aspect-ratio: 1;
  padding: 2em;
  z-index: -10;

  @media (min-width: 48em) {
    position: relative;
    grid-column: 8 / 13;
    opacity: 1;
    padding: 4em;
  }
`;

export const StyledWaveBackground = styled.svg`
  display: none;
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -20;
  inset-block-end: 0;
  inset-inline: 0;

  @media (min-width: 48em) {
    display: block;
  }
`