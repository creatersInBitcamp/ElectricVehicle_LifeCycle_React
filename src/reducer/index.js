import {combineReducers} from 'redux'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import {datatableReducer, imageReducer, tabset_pageReducer, report_tableReducer, tabset_profileReducer} from "../admin/item"
import {sidebarReducer, sidebarMenusReducer} from "../admin/common"
import {communityReducer, elecCarReducer, reportsReducer, ordersReducer, userReducer, usedCarReducer, dashboardReducer, tabset_userReducer} from "../admin/page"
import {CartReducer,WishlistReducer,CompareReducer,ProductReducer,FiltersReducer} from "../newCar";
// import ProductReducer from "../newCar/items/ProductReducer";
import {usedWishlistReducer, usedCompareReducer, usedProductReducer} from "../usedCar"
import {firstCarReducer, loginReducer, myCarReducer} from "../user";
import {boardReducer} from "../board/items";
import {StationReducer} from "../map";
// import FiltersReducer from "../newCar/items/FiltersReducer";

const rootReducer = combineReducers({
        boardReducer,
        datatableReducer,
        imageReducer,sidebarReducer, sidebarMenusReducer, communityReducer, elecCarReducer,
        reportsReducer, report_tableReducer, ordersReducer, tabset_profileReducer,
        tabset_pageReducer, usedCarReducer, userReducer, tabset_userReducer, dashboardReducer,
        data: ProductReducer,
        usedData: usedProductReducer,
        cartList: CartReducer,
        filters: FiltersReducer,
        wishlist: WishlistReducer,
        compare: CompareReducer,
        loginReducer,
        usedWishlist: usedWishlistReducer,
        usedCompare: usedCompareReducer,
        myCar: myCarReducer,
        firstCar: firstCarReducer,
        stationData : StationReducer,
        Intl
});
export default rootReducer
