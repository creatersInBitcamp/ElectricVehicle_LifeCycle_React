import {combineReducers} from 'redux'
import {datatableReducer, imageReducer, tabset_pageReducer, report_tableReducer, tabset_profileReducer} from "../admin/item"
import {sidebarReducer, sidebarMenusReducer} from "../admin/common"
import {communityReducer, elecCarReducer, reportsReducer, ordersReducer, userReducer, usedCarReducer, dashboardReducer, tabset_userReducer} from "../admin/page"
import productReducer from '../common/items/product'
import {cartReducer,wishlistReducer,compareReducer} from "../newCar/page";
import filtersReducer from "../common/items/filters";
import {usedWishlistReducer,usedCompareReducer} from "../usedCar"
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import {loginReducer} from "../user";
import boardReducer from "../board/items/boardReducer";
import {myCarReducer} from "../user/MyCar";


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
        Intl
});
export default rootReducer
