import { GET_PRODUCTS_SUCCESS } from "../actions/productListActions";


const initialState = {
    products:[]
}

export default function productListReducer(state=initialState,action) {

    
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {...state,products:action.products}  
        default:
            return state;
    }
}