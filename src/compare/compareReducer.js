import React from 'react';
import {toast} from "react-toastify";

/* types */
const ADD_TO_COMPARE = 'ADD_TO_COMPARE'
const REMOVE_FROM_COMPARE = 'REMOVE_FROM_COMPARE'

/* actions */
export const addToCompare = (product) => (dispatch) => {
    toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))

}
export const addToCompareUnsafe= (product) => ({
    type: ADD_TO_COMPARE,
    product
});
export const removeFromCompare = product_id => ({
    type: REMOVE_FROM_COMPARE,
    product_id
});

/* reducer */
const compareReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case ADD_TO_COMPARE:
            const productId = action.product.id
            if (state.items.findIndex(product => product.id === productId) !== -1) {
                const items = state.items.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, items }
            }

            return { ...state, items: [...state.items, action.product] }

        case REMOVE_FROM_COMPARE:
            return {
                items: state.items.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}

export default compareReducer