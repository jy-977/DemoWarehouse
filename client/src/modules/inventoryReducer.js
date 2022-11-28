import isEmpty from '../utils/functions'

const change_article_stock = (type , inventory_list, target_list, unit) => {
  return inventory_list.map((article)=>{
    let found_article = target_list.findIndex((target)=>article.art_id == target.art_id)
    if (found_article!=-1) {
        if( type == 'increase'){
          return {... article, 
            stock :  `${parseInt(article.stock) +(parseInt(target_list[found_article].amount_of)*unit)}`
        }}
        else if(type = 'decrease'){
          return {... article, 
            stock :  `${article.stock -(parseInt(target_list[found_article].amount_of)*unit)}`
        }}
    } else {
        return article
    }})
}


//ACTION TYPE---------------------------------------------------------
const INCREASE_ARTICLE = 'inventory/INCREASE_ARTICLE'
const DECREASE_ARTICLE = 'inventory/DECREASE_ARTICLE'
const SET_INVENTORY_LIST = 'inventory/SET_INVENTORY_LIST'
//ACTION FUNCTION---------------------------------------------------------
export const set_inventory_list = (data)=>({type: SET_INVENTORY_LIST, data:data})
export const increase_article = (target_list, unit)=>({type: INCREASE_ARTICLE, target_list: target_list, unit:unit})
export const decrease_article = (target_list, unit)=>({type: DECREASE_ARTICLE, target_list: target_list, unit:unit})

//INITIAL STATE---------------------------------------------------------
const initialState = {
  inventory_list : []
}

//REDUCER---------------------------------------------------------
export default function inventoryReducer(state = initialState, action){
  switch(action.type){
    case SET_INVENTORY_LIST : 
      return {
        ...state, inventory_list : action.data
      };
    case INCREASE_ARTICLE : 
      
      return {
        ...state, inventory_list : change_article_stock ('increase',  state.inventory_list, action.target_list, action.unit)
      };
    case DECREASE_ARTICLE : 
      return {
        ...state, inventory_list : change_article_stock ('decrease',  state.inventory_list, action.target_list, action.unit)
      };
     
    

    default :
      return state;
  }
}