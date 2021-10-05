import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:3001/products")
    }

    getProductsByCategoryId(categoryId){
        return axios.get("http://localhost:3001/products?categoryId="+categoryId)
    }

    getProductById(id){
        return axios.get("http://localhost:3001/products/"+id)
    }
}