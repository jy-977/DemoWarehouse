import {
  StyledCard,
  StyledHead,
  StyledLink,
  StyledStock,
  StyledButton, 
  StyledFooter
} from "./StyledProductObjectCard";
import Axios from 'axios';
import yellow_chair from '../../assets/yellow_chair.png'

import {  useState, shallowEqual} from "react";
import { useSelector, useDispatch } from 'react-redux';
import  { increase_article, decrease_article} from '../../modules/inventoryReducer';

const getStock = (articles, inventoryList) => {
  return Math.min.apply(Math,articles.map(article =>{
      let foundItem = inventoryList.find(item=>item.art_id == article.art_id )
      return parseInt(foundItem.stock / article.amount_of)
  }))
}

const ProductObjectCard = ({
  className,
  name, 
  contain_articles,
  to
  }) => {
  //Redux 
  const {inventory_list }  = useSelector((state)=>({
    inventory_list: state.inventoryReducer.inventory_list
  }),  shallowEqual)
  const dispatch = useDispatch();
  const Increase_article = (products_arts, units) => dispatch(increase_article(products_arts, units))
  const Decrease_article = (products_arts, units) => dispatch(decrease_article(products_arts, units))
  const stock = getStock(contain_articles,inventory_list)

  const [articles, setArticles] = useState(contain_articles.map((article)=>  {
    let article_info = inventory_list.find(item =>item.art_id == article.art_id )
    return ({
      ...article,
      name : article_info.name
  })}));
  
  //handlers
  const onDecrease = (e, product_stock, products_arts, units) => {
    if (product_stock.length !== 0) {
      Axios.post('/api/inventory/changeProductArticles', {action_type:'decrease', target_list: products_arts, units :  units})
        .then(res=>{
              console.log(res.data)
        })
      Decrease_article(products_arts, units);
    }
  };

  const onIncrease = (e, product_stock, products_arts, units) => {
    if (product_stock.length !== 0) {
      Axios.post('/api/inventory/changeProductArticles', {action_type:'increase', target_list: products_arts, units :  units})
        .then(res=>{
              console.log(res.data)
        })
      Increase_article(products_arts, units);
    }
  };

  return (
    <>
  
      <StyledCard className={className}>
        <StyledLink to = {`/products/${name}`}>
          <StyledHead>{name}</StyledHead>
          <img src={yellow_chair}></img>

        </StyledLink>
        <StyledFooter>
          <StyledButton onClick = {(e)=>{onDecrease(e, stock, articles, 1)}} disable ={stock>0?false : true}> - </StyledButton>
          <StyledStock> available : {stock}</StyledStock>
          <StyledButton onClick = {(e)=>{onIncrease(e, stock, articles, 1)}} disable ={stock>0?false : true}> +  </StyledButton>
        </StyledFooter>
      </StyledCard>
 
    </>
)};

export default ProductObjectCard;