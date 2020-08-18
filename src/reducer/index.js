import {combineReducers} from 'redux'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import {datatableReducer, imageReducer, tabset_pageReducer, report_tableReducer, tabset_profileReducer} from "../admin/item"
import {sidebarReducer, sidebarMenusReducer} from "../admin/common"
import {communityReducer, elecCarReducer, reportsReducer, ordersReducer, userReducer, usedCarReducer, dashboardReducer, tabset_userReducer} from "../admin/page"
import {cartReducer,wishlistReducer,compareReducer/*,productReducer,filtersReducer*/} from "../newCar";
import productReducer from "../newCar/items/productReducer";
import filtersReducer from "../newCar/items/filtersReducer";
import {usedWishlistReducer, usedCompareReducer, usedProductReducer, usedFiltersReducer} from "../usedCar"
import {firstCarReducer, loginReducer, myCarReducer} from "../user";
import {boardReducer} from "../board/items";

const rootReducer = combineReducers({
        boardReducer,
        datatableReducer,
        imageReducer,sidebarReducer, sidebarMenusReducer, communityReducer, elecCarReducer,
        reportsReducer, report_tableReducer, ordersReducer, tabset_profileReducer,
        tabset_pageReducer, usedCarReducer, userReducer, tabset_userReducer, dashboardReducer,
        data: productReducer,
        usedData: usedProductReducer,
        cartList: cartReducer,
        filters: filtersReducer,
        usedFilters: usedFiltersReducer,
        wishlist: wishlistReducer,
        compare: compareReducer,
        loginReducer,
        usedWishlist: usedWishlistReducer,
        usedCompare: usedCompareReducer,
        myCar: myCarReducer,
        firstCar: firstCarReducer,
        Intl
});
export default rootReducer
