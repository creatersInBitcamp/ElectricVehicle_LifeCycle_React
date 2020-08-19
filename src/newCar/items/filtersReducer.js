/* types */
const FILTER_BRAND = 'FILTER_BRAND'
const FILTER_COLOR = 'FILTER_COLOR'
const FILTER_PRICE = 'FILTER_PRICE'
const SORT_BY = 'SORT_BY'
const CLEAR_FILTER = 'CLEAR_FILTER'


/* actions */
export const filterBrand = (brand) => ({
    type: FILTER_BRAND,
    brand
});
export const filterColor = (color) => ({
    type: FILTER_COLOR,
    color
});
export const filterPrice = (value) => ({
    type: FILTER_PRICE,
    value
});
export const filterSort = (sort_by) => ({
    type: SORT_BY,
    sort_by
});
export const clearfilter=()=>({
    type : CLEAR_FILTER
})

/* reducer */
const filtersReducerDefaultState = {
    brand: [],
    value: { min: 100, max: 20000 },
    sortBy: ""
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case FILTER_BRAND:
            return {
                ...state,
                brand: action.brand
            };
        case FILTER_COLOR:
            return {
                ...state,
                color: action.color
            };
        case FILTER_PRICE:
            return {
                ...state,
                value: {min: action.value.value.min, max: action.value.value.max }
            };
        case SORT_BY:
            return {
                ...state,
                sortBy: action.sort_by
            };
        case CLEAR_FILTER:
            return{
                brand:[],
                value: [],
                color: [],
                sortBy: ''
            }
        default:
            return state;
    }
}

export default filtersReducer;