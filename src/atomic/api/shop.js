/**
 * Mocking client-server processing
 */
// import _products from './data.json'
/*
import _products from './test.json'

const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
*/
import axios from "axios";

export const elecCars = () => {
    let products=[]
    let result=[]
    axios.get(`http://localhost:8080/electriccars/findall`)
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
    result = products
    console.log(result)
    return products
}

const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(elecCars()), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
