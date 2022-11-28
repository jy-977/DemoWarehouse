import { combineReducers  } from "redux";
import { persistReducer } from "redux-persist";

import sessionStorage from "redux-persist/lib/storage/session"

//list of contents
import productReducer from './productReducer';
import inventoryReducer from './inventoryReducer';

const rootPersistConfig = {
    key : "root", 
    storage : sessionStorage, 
    //list of contents to save in localstorage
    whilteList :["productReducer","inventoryReducer"],
    // stateReconciler : autoMergeLevel2
}


const rootReducer= combineReducers({
    // auth : persistReducer(authPersistConfig, user), 
    productReducer, inventoryReducer
});


export default persistReducer(rootPersistConfig, rootReducer);
