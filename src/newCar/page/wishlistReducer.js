import React from 'react';
import {toast} from "react-toastify";
import {addToCartUnsafe} from "./cartReducer";


/* type */
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'


/* action */
export const addToWishlist = (product) => (dispatch) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))

}
export const addToWishlistUnsafe = (product) => ({
    type: ADD_TO_WISHLIST,
    product
});

export const removeFromWishlist = product_id => (dispatch) => {
    toast.error("Item Removed from Wishlist");
    dispatch({
        type: REMOVE_FROM_WISHLIST,
        product_id
    })
};
export const addToCartAndRemoveWishlist = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty));
    dispatch(removeFromWishlist(product));
}


/* reducer */
export const wishlistReducer = (state = {list: []}, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const productId = action.product.eccarId
            if (state.list.findIndex(product => product.eccarId === productId) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.eccarId === productId) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, list }
            }

            return { ...state, list: [...state.list, action.product] }

        case REMOVE_FROM_WISHLIST:
            return {
                list: state.list.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}

export default wishlistReducer
