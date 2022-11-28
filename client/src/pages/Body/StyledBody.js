import styled from "styled-components";
import ProductInformation from "../../components/ProductInformation/ProductInformation";

export const StyledProductSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4em;
  margin-block: 2em 10em;

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: start;
  }
`;

export const StyledProductInformation = styled(ProductInformation)`
  @media (min-width: 48em) {
    min-width: 50%;
  }
`;

export const StyledInformationSection = styled.section`
  width: 100%
  h2 {
    font-size: 1.4rem;
    margin-block: 4em 1em;
  }

  @media (min-width: 48em) {
    h2 {
      font-size: 2rem;
    }
  }
`;