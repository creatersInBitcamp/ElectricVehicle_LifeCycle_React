import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Admin components


// Import custom components
import productReducer from './products';
import cartReducer from './cart';
import filtersReducer from './filters';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import headerReducer from "../../admin/common/header_components/header";
import searchHeaderReducer from "../../admin/common/header_components/searchHeader";
import breadcrumbReducer from "../../admin/common/breadcrumb";
import datatableReducer from "../../admin/common/datatable";
import reportsReducer from "../../admin/reports/report";
import footerReducer from "../../admin/common/footer";
import {imageReducer} from "../../admin/common";
import {sidebarMenusReducer, sidebarReducer} from "../../admin/common/sidebar_components";
import {communityReducer} from "../../admin/community";
import {profileReducer, tabset_profileReducer} from "../../admin/settings";
import {ordersReducer} from "../../admin/sales";
import {report_tableReducer} from "../../admin/reports";
import {tabset_pageReducer, usedCarReducer} from "../../admin/usedCar";
import {list_userReducer, tabset_userReducer} from "../../admin/users";
import {dashboardReducer} from "../../admin";
import {elecCarReducer} from "../../admin/elecCar";
import {list_menuReducer} from "../../admin/notice";


const rootReducer = combineReducers({
    data: productReducer,
    cartList: cartReducer,
    filters: filtersReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    Intl,
    headerReducer, searchHeaderReducer, breadcrumbReducer, datatableReducer,
    footerReducer, imageReducer,sidebarReducer, sidebarMenusReducer, communityReducer, elecCarReducer, list_menuReducer,
    reportsReducer, report_tableReducer, ordersReducer, profileReducer, tabset_profileReducer,
    tabset_pageReducer, usedCarReducer, list_userReducer, tabset_userReducer, dashboardReducer
});

export default rootReducer;