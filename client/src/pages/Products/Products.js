import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/ProductObjectCardsContainer/ProductObjectCardsContainer";
import CelestialObjectCard from "../../components/ProductObjectCard/ProductObjectCard";
import { StyledSection,
} from "./StyledProducts.js";
import Axios from 'axios';
import { useCallback,useEffect, useState, shallowEqual} from "react";

//redux
import { useSelector, useDispatch } from 'react-redux';
import  {set_inventory_list, increase_article, decrease_article} from '../../modules/inventoryReducer';
import  {set_product_list, decrease_product} from '../../modules/productReducer';

const Products = () => {
  //selector
  const {product_list }  = useSelector((state)=>({
    product_list: state.productReducer.product_list
  }),  shallowEqual)
  //dispatch
  const dispatch = useDispatch();
  const SetProductData = (data) => dispatch(set_product_list(data))
  const SetInventoryData = (data) => dispatch(set_inventory_list(data))

  useEffect(()=>{   
      Axios.all(
          [Axios.get('/api/products/fetchProduct'), Axios.get('/api/inventory/fetchInventory')])
        .then(
          Axios.spread((res1, res2)=>{
            SetProductData(res1.data)
            SetInventoryData(res2.data)
          }))
        .catch((err) => console.log(err));
  },[]);  

  return (
  <>
    <PageHeader 
      title="Products" 
      description={["Check out Total Products", <br />, "Manage your products"]}/>
    
    <StyledSection>
      <CelestialObjectCardsContainer>
        {product_list.map((product) => {
          return <CelestialObjectCard
            key={product.name}
            name={product.name}
            contain_articles={product.contain_articles}
          />
        })}
      </CelestialObjectCardsContainer>
    </StyledSection>
  </>
  );
};

export default Products;