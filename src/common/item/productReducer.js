// import shop from "../../atomic/api/shop";
import {CHANGE_CURRENCY} from "./currency";
import axios from "axios";
import {useEffect} from "react";

const elccar = () => {
    // axios.get(`http://localhost:8080/electriccars/findall`)
    //     .then((res) => {
    //         console.log(res.data)
    //         return res.data
    //     })
    //     .catch(err => {
    //         alert('axios error')
    //         throw err
    //     })
}

// const TIMEOUT = 100

// const elecCar = {
//     getProducts: (cb, timeout) => setTimeout(() => cb(elccar()), timeout || TIMEOUT),
//     buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
// }
let electric = []
    axios.get(`http://localhost:8080/electriccars/findall`)
        .then((res) => {
            console.log(res.data)
            electric = res.data
        })
        .catch(err => {
            alert('axios error')
            throw err
        })


/* types */
const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT'


/* actions */
export const fetchProductsBegin = () => ({ type: FETCH_PRODUCTS_BEGIN })
export const receiveProducts = electrics => ({ type: RECEIVE_PRODUCTS, electrics })
export const getAllProducts = () => dispatch => {
    dispatch(fetchProductsBegin())
    console.log(electric)
    electric.getProducts(electrics => {
        dispatch(receiveProducts(electrics))
        console.log(electrics)
        return electrics
    })
}
export const fetchSingleProduct = productId => ({ type: FETCH_SINGLE_PRODUCT, productId })

const initialState = {
    products: [],
    symbol: '만원',
    product_details: []
};
/* reducer */
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...state,
                products: action.products };
        case FETCH_SINGLE_PRODUCT:
            if (state.products.findIndex(product => product.eccarId === action.productId) !== -1) {
                const singleItem = state.products.reduce((itemAcc, product) => {
                    return product
                }, [])
                return { ...state,
                    product_details: singleItem };
            }
        case CHANGE_CURRENCY:
            return { ...state,
                symbol: action.symbol };
        default:
            return state;
    }
};
export default productReducer;
