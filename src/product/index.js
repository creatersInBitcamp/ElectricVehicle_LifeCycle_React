import shop from "../atomic/api/shop";
import {CHANGE_CURRENCY} from "../currency/index";


/* types */
const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT'


/* actions */
export const fetchProductsBegin = () => ({ type: FETCH_PRODUCTS_BEGIN })
export const receiveProducts = products => ({ type: RECEIVE_PRODUCTS, products })
export const getAllProducts = () => dispatch => {
    dispatch(fetchProductsBegin())
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
        return products
    })
}
export const fetchSingleProduct = productId => ({ type: FETCH_SINGLE_PRODUCT, productId })

const initialState = {
    products: [],
    symbol: '$',
    product_details: []
};
/* reducer */
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...state,
                products: action.products };
        case FETCH_SINGLE_PRODUCT:
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
export default productReducer;
