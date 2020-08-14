/* types */
const FILTER_AGE = 'FILTER_AGE'
const FILTER_MILEAGE = 'FILTER_MILEAGE'
const FILTER_PRICE = 'FILTER_PRICE'
const SORT_BY = 'SORT_BY'


/* actions */
export const filterAge = (age) => ({
    type: FILTER_AGE,
    age
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
const filtersReducerDefaultState = {
    brand: ["르노삼성"],
    value: { min: 250, max: 3000 },
    sortBy: ""
};

const usedFiltersReducer = (state = filtersReducerDefaultState, action) => {
    // console.log('Action Result');
    // console.log(action);
    switch (action.type) {
        case FILTER_AGE:
            return {
                ...state,
                age: action.age
            };
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