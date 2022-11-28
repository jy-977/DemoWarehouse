import {
  FooterP,
  HeaderFooterP,
  StyledFooterColumn,
  StyledFooterRow,
  StyledFooterSection,
} from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooterSection>
      <StyledFooterColumn>
        <HeaderFooterP>IKEA Demo Warehouse</HeaderFooterP>
        <FooterP>
          This web pages is made for the test of react application. This IKEA Demo Warehouse application's aim is to provide a modern and responsive interface for viewing warehouse. 
          For this project, React, Redux, React-Router-Dom, Styled-components, Node.js, and Express are used. This paragraph is made for design element so that you can ignore the content of this paragraph.
        </FooterP>
      </StyledFooterColumn>
    
      <StyledFooterRow bottomContainer>
        <FooterP bottom>
          Copyright 2022 IKEA Demo Warehouse, All rights reserved.
        </FooterP>
        <StyledFooterRow bottomDiv>
          <FooterP bottom>Test Footer policy</FooterP>
        </StyledFooterRow>
      </StyledFooterRow>
    </StyledFooterSection>
  );
};

export default Footer;