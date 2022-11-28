import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductObject from "../ProductObject/ProductObject";
import Button from "../Button/Button";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const StyledCard = styled.div`
  background-color: #f5f5f5;
  padding: 2em;
  display: flex;
  flex-direction: column;
  border-radius: .5em;
  align-items: center;
  text-decoration: none;
`;

export const StyledProductObject = styled(ProductObject)`
  width: 60%;

`;
export const StyledHead = styled.h3`
  text-align: center;
  color: #0F131F;
  font-weight: bold;
  text-decoration: none;
`;
export const StyledDescription = styled.p`
  text-align: left;
  color: #0F131F;
  
  padding-block: .5em 2em;
  font-weight: 300;
`;


export const StyledStock = styled.p`
  min-width: 10%;
  text-align: center;
  color:  #0F131F;
  font-weight: bold;
`;


export const StyledButton = styled(Button)`
  min-width: 10%;
`;

export const StyledFooter = styled.div` 
    min-width: 100%;
    display: flex;
    justify-content: center;
    gap: 1em;
    flex-direction: row;
    align-items: center;
    
  margin-block: 1em 0.5em;
    
`;