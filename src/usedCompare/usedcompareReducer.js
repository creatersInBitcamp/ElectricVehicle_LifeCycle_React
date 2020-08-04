import React from 'react';
import {toast} from "react-toastify";

/* types */
const ADD_TO_USEDCOMPARE = 'ADD_TO_USEDCOMPARE'
const REMOVE_FROM_USEDCOMPARE = 'REMOVE_FROM_USEDCOMPARE'

/* actions */
export const addToUsedCompare = (product) => (dispatch) => {
    toast.success("Item Added to UsedCompare");
    dispatch(addToUsedCompareUnsafe(product))

}
export const addToUsedCompareUnsafe= (product) => ({
    type: ADD_TO_USEDCOMPARE,
    product
});
export const removeFromUsedCompare = product_id => ({
    type: REMOVE_FROM_USEDCOMPARE,
    product_id
});

/* reducer */
const usedcompareReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case ADD_TO_USEDCOMPARE:
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

        case REMOVE_FROM_USEDCOMPARE:
            return {
                items: state.items.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}

export default usedcompareReducer