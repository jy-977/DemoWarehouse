import {
  StyledSection,
  StyledContentContainer,
  StyledHeading,
  StyledParagraph,
  StyledImageContainer,
  StyledWaveBackground
} from "./StyledHero";
import yellow_chair from '../../assets/yellow_chair.png'


const HeroSection = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Demo Warehouse</StyledHeading>
    </StyledContentContainer>
    <StyledImageContainer>
      <img src={yellow_chair}></img>
    </StyledImageContainer>
    <StyledWaveBackground width="1440" height="797" viewBox="0 0 1440 797" fill="none">
      <path d="M1440 575C1025.48 572.005 817.486 0 0 0V796.5H1440V575Z" fill="#f5f5f5"/>
    </StyledWaveBackground>
  </StyledSection>
);

export default HeroSection;