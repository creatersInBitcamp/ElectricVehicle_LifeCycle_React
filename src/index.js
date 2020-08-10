import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import translations from './atomic/constants/translations'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Layouts
import Layout from './App'
import Main from './layouts/main';

//car
import wishlist from './wishlist/Wishlist'
import Cart from "./cart/CartComponent";
import checkOut from "./checkout";

//new car
import Compare from './compare/Compare'
import CollectionLeftSidebar from "./newPurchase/Collection-left-sidebar";
import LeftSideBar from "./newPurchase/left-sidebar";

//used car
import {productDetail, PurchaseRequest, UsedPurchaseCollection} from "./usedPurchase";
import {SalesForm} from "./usedSales";
import {Scrapped} from "./scrapped";
import {MyCarComparison} from "./usedCompare";
import UsedWishlist from "./usedWishlist/UsedWishlist"

//map
import ChargingStationMap from "./map/charging-station-map";
import MapService from './map/service'
import SightsMap from "./map/sights-map";
import BookmarkMap from "./map/bookmark-map";
import TableChargingStation from "./map/table-charging-station";

//other
import googleMap from "./map/anothermap/googleMap";
import map from "./map/anothermap/map"
import mapBox from "./map/anothermap/mapBox"
import mapNaver from "./map/anothermap/mapNaver"

//board
import ClassicBoardMain from "./board/classic/classicBoard.main";
import ClassicBoardDetails from "./board/classic/classicBoard.details";


// Admin
import {Dashboard} from './admin';
import {ElecCar} from './admin/elecCar';
import {Orders} from './admin/sales';
import {UsedCar} from './admin/usedCar';
import {Community} from './admin/community';
import {Notice} from './admin/notice';
import {List_user} from './admin/users';
import {Profile} from './admin/settings';
import {Reports} from './admin/reports';

//common
import Search from './search/search'
import Faq from "./common/faq";

//user
import Login from './user/login'
import Register from './user/register'
import ForgetPassword from "./user/forget-password";
import MyAccount from "./user/myAccount";

import { getAllProducts } from './product'
import store from "./store";
import aboutUs from "./common/about-us";


const Root =()=> {
    store.dispatch(getAllProducts());
    console.log(store.getState())
    return (
        <Provider store={store}>
            <IntlProvider translations={translations} locale='ko'>
                <BrowserRouter basename={'/'}>
                    <ScrollContext>
                        <Switch>
                            <Layout>

                                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main}/>

                                {/*common*/}
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/forgot`} component={ForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/myaccount`} component={MyAccount}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs}/>

                                {/*newcar*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/new-car/collection`} component={CollectionLeftSidebar}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/new-car/product/:id`} component={LeftSideBar}/>
                                <Route path={`${process.env.PUBLIC_URL}/new-car/compare`} component={Compare}/>
                                <Route path={`${process.env.PUBLIC_URL}/new-car/wishlist`} component={wishlist}/>
                                <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                                <Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>

                                {/*usedcar*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/collection`} component={UsedPurchaseCollection}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/product/:id`} component={productDetail}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/purchase`} component={PurchaseRequest}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/comparison/:id`} component={MyCarComparison}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/sales`} component={SalesForm}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/scrapped`} component={Scrapped}/>
                                <Route path={`${process.env.PUBLIC_URL}/used-car/wishlist`} component={UsedWishlist}/>

                                {/*map*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/service`} component={MapService}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/service/map/chargingstation`} component={ChargingStationMap} />
                                <Route exact path={`${process.env.PUBLIC_URL}/service/map/sights`} component={SightsMap} />
                                <Route exact path={`${process.env.PUBLIC_URL}/service/map/bookmark`} component={BookmarkMap} />
                                <Route exact path={`${process.env.PUBLIC_URL}/service/table`} component={TableChargingStation} />

                                {/*other map*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/othermap/google`} component={googleMap}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/othermap/map`} component={map}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/othermap/mapbox`} component={mapBox}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/othermap/naver`} component={mapNaver}/>

                                {/*board*/}
                                <Route path={`${process.env.PUBLIC_URL}/board/main`} component={ClassicBoardMain}/>
                                <Route path={`${process.env.PUBLIC_URL}/board/details/:post`} component={ClassicBoardDetails}/>

                                {/*admin*/}
                                <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} component={Dashboard} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/elecCar`} component={ElecCar} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/orders`} component={Orders} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/usedCar`} component={UsedCar} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/community`} component={Community} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/notice`} component={Notice} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/users`} component={List_user} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/reports`} component={Reports} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/userDetail`} component={Profile} />
                            </Layout>
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </IntlProvider>
        </Provider>

    )
}

ReactDOM.render(<Root />, document.getElementById('root'));


