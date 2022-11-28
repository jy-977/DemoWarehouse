import {
  StyledInformationContainer
} from "./StyledProductInformation";
import { useState, useEffect,shallowEqual } from "react";
import { useSelector, useDispatch } from 'react-redux';
const ProductInformation = ({ className, product }) => {

  //Redux 
  const {inventory_list}  = useSelector((state)=>({
    inventory_list: state.inventoryReducer.inventory_list,
  }),  shallowEqual)

  const [articles, setArticles] = useState(product.contain_articles.map((article)=>  {
    let article_info = inventory_list.find(item =>item.art_id == article.art_id )
    return ({
      ...article,
      name : article_info.name
  })}));

  return (
    <>
    <StyledInformationContainer>
      {articles.map((article)=>(
          <>
              <b>{article.name}</b>
              <p>Article Amount : {article.amount_of|| 'Unknown'}</p>
          </>
          ))}
    </StyledInformationContainer>
    </>
)};

export default ProductInformation;