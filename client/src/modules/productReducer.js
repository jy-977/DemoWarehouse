                                //DUCSK STRUCTURE!


//ACTION TYPE---------------------------------------------------------
const SET_PRODUCT_LIST = 'product/SET_PRODUCT_LIST'
// const INCREASE_PRODUCT = 'product/INCREASE_PRODUCT'
const DECREASE_PRODUCT = 'product/DECREASE_PRODUCT'

//ACTION FUNCTION---------------------------------------------------------
export const set_product_list = (data)=>({type: SET_PRODUCT_LIST, data:data})
export const decrease_product = (name, unit)=>({type: DECREASE_PRODUCT, name:name, unit:unit})

//INITIAL STATE---------------------------------------------------------
const initialState = {
  product_list : [{name : ' ', contain_articles:[]}]
}

//REDUCER---------------------------------------------------------
export default function productReducer(state = initialState, action){
  switch(action.type){
    case SET_PRODUCT_LIST : 
      return {
        ...state, product_list:action.data
      };
    case DECREASE_PRODUCT : 
    return {
      ...state, product_list:action.data
    };
    
    
    default :
      return state;
  }
}