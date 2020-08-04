import React from 'react';
import {toast} from "react-toastify";
import {addToCartUnsafe} from "../cart/cartReducer";


/* type */
const ADD_TO_USEDWISHLIST = 'ADD_TO_USEDWISHLIST'
const REMOVE_FROM_USEDWISHLIST = 'REMOVE_FROM_USEDWISHLIST'


/* action */
export const addToUsedWishlist = (product) => (dispatch) => {
    toast.success("Item Added to UsedWishlist");
    dispatch(addToUsedWishlistUnsafe(product))

}
export const addToUsedWishlistUnsafe = (product) => ({
    type: ADD_TO_USEDWISHLIST,
    product
});
export const removeFromUsedWishlist = product_id => (dispatch) => {
    toast.error("Item Removed from UsedWishlist");
    dispatch({
        type: REMOVE_FROM_USEDWISHLIST,
        product_id
    })
};
export const addToCartAndRemoveUsedWishlist = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty));
    dispatch(removeFromUsedWishlist(product));
}


/* reducer */
const usedwishlistReducer = (state = {list: []}, action) => {
    switch (action.type) {
        case ADD_TO_USEDWISHLIST:
            const productId = action.product.id
            if (state.list.findIndex(product => product.id === productId) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, list }
            }

            return { ...state, list: [...state.list, action.product] }

        case REMOVE_FROM_USEDWISHLIST:
            return {
                list: state.list.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}

export default usedwishlistReducer
