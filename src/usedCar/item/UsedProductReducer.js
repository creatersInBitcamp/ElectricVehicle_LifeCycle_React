import axios from "axios";
import {CHANGE_CURRENCY} from "../../common/item/currency";

export const usedCars = () => (dispatch) =>{
    let products = []
    axios.get(`http://localhost:8080/usedCars/carInfo`)
        .then((res)=> {
            let s = res.data.length
            for (let i=0; i<s; i++) {
                products.push(res.data.shift())
            }
            dispatch(receiveUsedProducts(products))
        })
        .catch(err => {
            alert('usedCar axios error')
            throw err
        })
    return products
}

/* types */
const FETCH_USED_PRODUCTS_BEGIN = 'FETCH_USED_PRODUCTS_BEGIN'
const RECEIVE_USED_PRODUCTS = 'RECEIVE_USED_PRODUCTS'
const FETCH_SINGLE_USED_PRODUCT = 'FETCH_SINGLE_USED_PRODUCT'

/* actions */
export const fetchProductsBegin = () => ({ type: FETCH_USED_PRODUCTS_BEGIN })
export const receiveUsedProducts = products => ({ type: RECEIVE_USED_PRODUCTS, products })
export const getAllUsedProducts = () => dispatch => {
    dispatch(fetchProductsBegin())
    dispatch(usedCars())
}
export const fetchSingleProduct = productId => ({ type: FETCH_SINGLE_USED_PRODUCT, productId })

const initialState = {
    products: [],
    symbol: '만원',
    product_details: []
}

/* reducer */
const usedProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_USED_PRODUCTS:
            return { ...state,
                products: action.products };
        case FETCH_SINGLE_USED_PRODUCT:
            if (state.products.findIndex(product => product.id === action.productId) !== -1) {
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
export default usedProductReducer;