import React from "react";
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

/* type */
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'

/* actions */
export const addToCart = (product) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product))

}
export const addToCartUnsafe = (product) => ({
    type: ADD_TO_CART,
    product
})
export const removeFromCart = product_id => (dispatch) => {
    toast.error("Item Removed from Cart");
    dispatch({
        type: REMOVE_FROM_CART,
        product_id
    })
}
export const clearCart = () => ({
    type : CLEAR_CART
})

/* reducer */
export const cartReducer = (state = {cart: []}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productId = action.product.eccarId
            if (state.cart.findIndex(product => product.eccarId === productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.eccarId === productId) {
                        cartAcc.push({ ...product, sum: (product.price) })
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }

            return { ...state, cart: [...state.cart, { ...action.product, sum: (action.product.price) }] }

        case REMOVE_FROM_CART:
            return {
                cart: state.cart.filter(item => item.eccarId !== action.product_id.eccarId)
            }
        case CLEAR_CART:
            return {
                cart : []
            }

        default:
    }
    return state;
}

export default cartReducer