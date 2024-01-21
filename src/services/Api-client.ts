import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'262977ff2442428ebf28af5f9c07acc0'
    }
})