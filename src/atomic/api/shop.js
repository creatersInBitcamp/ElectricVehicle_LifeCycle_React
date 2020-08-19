/*
import _products from './test.json'
*/
import axios from "axios";

export const elecCars = () => {
    let products=[]
    axios.get(`http://localhost:8080/electriccars/getall`)
        .then((res) => {
            // console.log(res.data)
            for(let i=0; i<69;i++){
                products.push(res.data.shift())
            }
            // products.push(res.data)
        })
        .catch(err => {
            console.log('신차 에러')
            throw err
        })
    return products
}

const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(elecCars()), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
