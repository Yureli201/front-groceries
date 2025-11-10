import axios from "axios";
const URL_BASE_API = "http://localhost:3000/api/products";

const ProductServices={
    getAll(){
        return axios.get(URL_BASE_API + "/getAll");
    },
    
    /*getOne(barcode){
        return axios.get(URL_BASE_API + "/getOne/" + barcode);
    }*/
};

export default ProductServices;