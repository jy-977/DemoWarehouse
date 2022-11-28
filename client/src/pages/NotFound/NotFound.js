
import { useParams } from "react-router-dom";

import PageHeader from "../../components/PageHeader/PageHeader";
import { StyledSection } from "./StyledNotFound";

const NotFoundPage = () => {
  return (
  <>
    <PageHeader title="Not found"/>
    
    <StyledSection>
      <article>
        <p>Sorry, we were unable to find what you were looking for.</p>
      </article>
    </StyledSection>
  </>
)};

export default NotFoundPage;