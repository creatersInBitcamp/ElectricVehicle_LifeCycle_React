import {combineReducers} from 'redux'
import {headerReducer, searchHeaderReducer} from "../admin/common/header_components";
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
import cartReducer from "../cart";
import filtersReducer from "../filters";
import wishlistReducer from "../wishlist";
import compareReducer from "../compare";
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'


const rootReducer = combineReducers({
        headerReducer, searchHeaderReducer, breadcrumbReducer, datatableReducer,
        footerReducer, imageReducer,sidebarReducer, sidebarMenusReducer, communityReducer, elecCarReducer, list_menuReducer,
        reportsReducer, report_tableReducer, ordersReducer, profileReducer, tabset_profileReducer,
        tabset_pageReducer, usedCarReducer, list_userReducer, tabset_userReducer, dashboardReducer,
        data: productReducer,
        cartList: cartReducer,
        filters: filtersReducer,
        wishlist: wishlistReducer,
        compare: compareReducer,
        Intl
});
export default rootReducer
