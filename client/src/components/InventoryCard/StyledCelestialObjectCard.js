import styled from "styled-components";
import CelestialObject from "../ProductObject/ProductObject";
import Button from "../Button/Button";
export const StyledCard = styled.div`
  background-color: #f5f5f5;
  padding: 2em;
  display: flex;
  flex-direction: column;
  border-radius: .5em;
  align-items: center;
`;

export const StyledCelestialObject = styled(CelestialObject)`
  width: 60%;
`;

export const StyledHead = styled.h3`
  text-align: center;
  color: #0F131F;
  font-weight: bold;
`;

export const StyledDescription = styled.p`
  text-align: center;
  color: #0F131F;
  padding-block: .5em 2em;
  font-weight: 300;
`;

export const StyledButton = styled(Button)`
  min-width: 80%;
`;