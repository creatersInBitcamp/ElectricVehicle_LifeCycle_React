
/* type */
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

/* actions */
export const changeCurrency = (symbol) => ({
    type: CHANGE_CURRENCY,
    symbol
});