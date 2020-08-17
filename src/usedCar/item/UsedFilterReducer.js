/* types */
const FILTER_BRAND = 'FILTER_BRAND'
const FILTER_MILEAGE = 'FILTER_MILEAGE'
const FILTER_PRICE = 'FILTER_PRICE'
const SORT_BY = 'SORT_BY'


/* actions */
export const filterBrand = (brand) => ({
    type: FILTER_BRAND,
    brand
});
export const filterMileage = (mileage) => ({
    type: FILTER_MILEAGE,
    mileage
});
export const filterPrice = (value) => ({
    type: FILTER_PRICE,
    value
});
export const filterSort = (sort_by) => ({
    type: SORT_BY,
    sort_by
});

/* reducer */
export const filtersReducerDefaultState = {
    brand: ["르노삼성"],
    value: { min: 100, max: 5000 },
    sortBy: ""
};

const usedFiltersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case FILTER_BRAND:
            return {
                ...state,
                brand: action.brand
            }
        case FILTER_MILEAGE:
            return {
                ...state,
                mileage: action.mileage
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
        default:
            return state;
    }
}

export default usedFiltersReducer;