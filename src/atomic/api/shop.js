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
// import axios from "axios";
//
// const elccar = () => {
//     axios.get(`http://localhost:8080/electriccars/findall`)
//         .then((res) => {
//             console.log(res.data)
//             return res.data
//         })
//         .catch(err => {
//             alert('axios error')
//             throw err
//         })
// }
//
// const TIMEOUT = 100
//
// export default {
//     getProducts: (cb, timeout) => setTimeout(() => cb(elccar()), timeout || TIMEOUT),
//     buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
// }