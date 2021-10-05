import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import productListReducer from "./reducers/productListReducer";

const rootReducer = combineReducers({
    cart:cartReducer,
    productList:productListReducer
})

export default rootReducer;