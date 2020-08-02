import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Import custom components
// import productReducer from './products';
// import index from './cart';
// import filtersReducer from './filters';
// import wishlistReducer from './wishlist';
// import compareReducer from './compare';
import productReducer from '../../products';
import filtersReducer from '../../filters';
import wishlistReducer from '../../wishlist';
import compareReducer from '../../comparison'
import cartReducer from '../../cart/cartReducer'


const rootReducer = combineReducers({
    data: productReducer,
    cartList: cartReducer,
    filters: filtersReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    Intl
});

export default rootReducer;