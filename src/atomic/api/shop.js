/*
import _products from './test.json'
*/
import axios from "axios";
import {receiveProducts} from "../../newCar";

export const elecCars = () => (dispatch) => {
    let products=[]
    axios.get(`http://localhost:8080/electriccars/getall`)
        .then((res) => {
            let size = res.data.length
            for(let i=0; i<size;i++){
                products.push(res.data.shift())
            }
            dispatch(receiveProducts(products))
        })
        .catch(err => {
            console.log('신차 에러')
            throw err
        })
}

const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(elecCars()), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
