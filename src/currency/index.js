export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

export const changeCurrency = (symbol) => ({
    type: CHANGE_CURRENCY,
    symbol
});