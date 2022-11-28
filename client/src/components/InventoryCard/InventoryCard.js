import {
  StyledCard,
  StyledCelestialObject,
  StyledHead,
  StyledDescription,
  StyledButton
} from "./StyledCelestialObjectCard";

const InventoryCard = ({
  className,
  article
  // to
}) => (
  <StyledCard className={className}>
    <StyledHead>{article.name}</StyledHead>
    <StyledCelestialObject color='#FF9E44'/>
    <StyledDescription>
      <p>
        Article Stock : {article.stock}
      </p>
    </StyledDescription>
    {/* <StyledCelestialObjectCardsFooter value={article.stock}/> */}
  </StyledCard>
);

export default InventoryCard;