import Axios from 'axios';
import PageHeader from "../../components/PageHeader/PageHeader";
import CelestialObjectCardsContainer from "../../components/ProductObjectCardsContainer/ProductObjectCardsContainer";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import { StyledSection,
  StyledParagraph
} from "./StyledInventory";
import { useCallback,useEffect, useState} from "react";

//redux
import { useSelector, useDispatch } from 'react-redux';
import  {set_inventory_list, increase_article, decrease_article}
 from '../../modules/inventoryReducer';


const Inventory = () => {
  
  //selector
  const {inventory_list }  = useSelector((state)=>({
    user_id: state.inventoryReducer.inventory_list,
  }))

  //dispatch
  const dispatch = useDispatch();
  const SetInventoryData = (data) => dispatch(set_inventory_list(data))


  const [InventoryData, setInventoryData] = useState([]);
  useEffect(()=>{   
        Axios.get('/api/inventory/fetchInventory')
        .then(res=>{
          setInventoryData(res.data)
          SetInventoryData(res.data)
        })
  },[]);  
  
  return (
 
  <>
    <PageHeader 
      title="Inventory" 
      // description={["Check out Total Products", <br />, "Manage your products"]}
      />
    
    <StyledSection>
        {/* <ShortcutAccodion>

        </ShortcutAccodion> */}
      <CelestialObjectCardsContainer>
 
        {InventoryData.map((article) => (
          <InventoryCard
            key={article.art_id}
            article = {article}
            // to={`/product/${product.id}`}
          />
        ))}
      </CelestialObjectCardsContainer>
    </StyledSection>
  </>
  );
};

export default Inventory;