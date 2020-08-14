import {combineReducers} from 'redux'
import {datatableReducer, imageReducer, tabset_pageReducer, report_tableReducer, tabset_profileReducer} from "../admin/item"
import {sidebarReducer, sidebarMenusReducer} from "../admin/common"
import {communityReducer, elecCarReducer, reportsReducer, ordersReducer, userReducer, usedCarReducer, dashboardReducer, tabset_userReducer} from "../admin/page"
import productReducer from '../common/item/productReducer'
import filtersReducer from '../common/item/filtersReducer'
import {cartReducer,wishlistReducer,compareReducer} from "../newCar";
import {usedWishlistReducer,usedCompareReducer} from "../usedCar"
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import {firstCarReducer, loginReducer} from "../user";
import boardReducer from "../board/items/boardReducer";
import {myCarReducer} from "../user";

const rootReducer = combineReducers({
        boardReducer,
        datatableReducer,
        imageReducer,sidebarReducer, sidebarMenusReducer, communityReducer, elecCarReducer,
        reportsReducer, report_tableReducer, ordersReducer, tabset_profileReducer,
        tabset_pageReducer, usedCarReducer, userReducer, tabset_userReducer, dashboardReducer,
        data: productReducer,
        cartList: cartReducer,
        filters: filtersReducer,
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
