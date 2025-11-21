import axios from "axios";
const URL_BASE_API = "http://localhost:3000/api/products";

const ProductServices={
    getAll(){
        return axios.get(URL_BASE_API + "/getAll");
    },

    getOne(barcode){
        return axios.get(URL_BASE_API + "/getOne/" + barcode);
    },

    createOne(product){
        return axios.post(URL_BASE_API + "/insertOne", product);
    },

    deleteOne(barcode){
        return axios.delete(URL_BASE_API + "/delete/" + barcode);
    },

    updateOne(barcode, product){
        return axios.put(URL_BASE_API + "/update/" + barcode, product);
    }
};

export default ProductServices;