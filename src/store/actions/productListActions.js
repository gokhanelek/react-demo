import ProductService from "../../services/ProductService"

export const GET_PRODUCTS_SUCCESS="GET_PRODUCTS_SUCCESS"

export function getProductsSuccess(products) {
    return {
        type:GET_PRODUCTS_SUCCESS,
        products
    }
}




export function getProducts(){
    return function(dispatch){
        let productService = new ProductService();
        productService.getProducts().then(response => {
            dispatch(getProductsSuccess(response.data))
        }).catch(error => {
            console.log(error)
        })
    }
}



