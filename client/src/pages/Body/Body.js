import { useState, useEffect,shallowEqual } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import yellow_chair from "../../assets/yellow_chair.png"

import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/ProductObjectCardsContainer/ProductObjectCardsContainer";

import {
  StyledProductSection,
  StyledProductInformation,
  StyledInformationSection
} from "./StyledBody";

const BodyPage = () => {
  //Redux 
  const {inventory_list, product_list}  = useSelector((state)=>({
    inventory_list: state.inventoryReducer.inventory_list,
    product_list : state.productReducer.product_list
  }),  shallowEqual)
  const params = useParams();
  
  const product = (product_list.find((product)=> product.name == params.name));

  return (
    <>
      <PageHeader title={params.name } />
      
      <StyledProductSection>
        <img src={yellow_chair}></img>
      

        <StyledInformationSection>
          <h2>Article Information</h2>
          <StyledProductInformation product ={product}/>

          <CelestialObjectCardsContainer >
            
          </CelestialObjectCardsContainer>
        </StyledInformationSection>
      </StyledProductSection>
    </>
  )
}

export default BodyPage;