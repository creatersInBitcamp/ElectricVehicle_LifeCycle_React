import {combineReducers} from 'redux'
import {headerReducer} from "../admin/common/header_components";
import {breadcrumbReducer, datatableReducer, footerReducer, imageReducer} from "../admin/common"
import {sidebarReducer, sidebarMenusReducer} from "../admin/common/sidebar_components"
import {communityReducer} from "../admin/community"
import {elecCarReducer} from "../admin/elecCar"
import {list_menuReducer} from "../admin/notice"
import {reportsReducer, report_tableReducer} from "../admin/reports"
import {ordersReducer} from '../admin/sales'
import {profileReducer, tabset_profileReducer} from '../admin/settings'
import {tabset_pageReducer, usedCarReducer} from '../admin/usedCar'
import {list_userReducer, tabset_userReducer} from '../admin/users'
import {dashboardReducer} from '../admin'
import productReducer from '../product'
import cartReducer from "../cart/cartReducer";
import filtersReducer from "../filters";
import wishlistReducer from "../wishlist/wishlistReducer";
import compareReducer from "../compare/compareReducer";
import usedwishlistReducer from "../usedWishlist/usedwishlistReducer"
import usedcompareReducer from "../usedCompare/usedcompareReducer";
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import {adminCheckReducer} from "../user/login";
import boardReducer from "../board/boardReducer";


const rootReducer = combineReducers({
        boardReducer,
        headerReducer, breadcrumbReducer, datatableReducer,
        footerReducer, imageReducer,sidebarReducer, sidebarMenusReducer, communityReducer, elecCarReducer, list_menuReducer,
        reportsReducer, report_tableReducer, ordersReducer, profileReducer, tabset_profileReducer,
        tabset_pageReducer, usedCarReducer, list_userReducer, tabset_userReducer, dashboardReducer,
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
