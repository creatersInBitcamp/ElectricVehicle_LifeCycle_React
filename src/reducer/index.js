import {combineReducers} from 'redux'
import {datatableReducer, imageReducer} from "../admin/item"
import {sidebarReducer, sidebarMenusReducer} from "../admin/common"
import {communityReducer, elecCarReducer, reportsReducer, ordersReducer, profileReducer, userReducer, usedCarReducer, dashboardReducer, tabset_userReducer} from "../admin/page"
import {tabset_pageReducer, report_tableReducer, tabset_profileReducer} from '../admin/item'
import productReducer from '../product'
import cartReducer from "../cart/cartReducer";
import filtersReducer from "../filters";
import wishlistReducer from "../wishlist/wishlistReducer";
import compareReducer from "../compare/compareReducer";
import usedwishlistReducer from "../usedWishlist/usedwishlistReducer"
import usedcompareReducer from "../usedCompare/usedcompareReducer";
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import {adminCheckReducer} from "../user/login";
import boardReducer from "../board/items/boardReducer";


const rootReducer = combineReducers({
        boardReducer,
        datatableReducer,
        imageReducer,sidebarReducer, sidebarMenusReducer, communityReducer, elecCarReducer,
        reportsReducer, report_tableReducer, ordersReducer, profileReducer, tabset_profileReducer,
        tabset_pageReducer, usedCarReducer, userReducer, tabset_userReducer, dashboardReducer,
        data: productReducer,
        cartList: cartReducer,
        filters: filtersReducer,
        wishlist: wishlistReducer,
        compare: compareReducer,
        adminCheckReducer,
        usedwishlist : usedwishlistReducer,
        usedcompare : usedcompareReducer,
        Intl
});
export default rootReducer
