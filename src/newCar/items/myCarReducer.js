
/* type */
const ADD_TO_MY_CAR = 'ADD_TO_MY_CAR'
const REMOVE_FROM_MY_CAR = 'REMOVE_FROM_MY_CAR'

/* action */
export const addToMyCar = (product) => (dispatch) => {
    dispatch(addToMyCarUnsafe(product))
}
export const addToMyCarUnsafe = (product) => ({
    type: ADD_TO_MY_CAR,
    product
})
export const removeFromMyCar = product_id => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_MY_CAR,
        product_id
    })
}

/* reducer */
export const myCarReducer = (state={list:[]}, action) => {
    switch (action.type) {
        case ADD_TO_MY_CAR:
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

        case REMOVE_FROM_MY_CAR:
            return {
                list: state.list.filter(id => id !== action.product_id)
            }
        default:
    }
    return state
}
