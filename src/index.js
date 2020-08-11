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

//new car
import {wishlist,CartComponent,checkOut,Compare,CollectionLeftSidebar,LeftSideBar} from './newCar/page'

//used car
import {productDetail, PurchaseRequest, UsedPurchaseCollection} from "./usedPurchase";
import {SalesForm} from "./usedSales";
import {Scrapped} from "./scrapped";
import {MyCarComparison} from "./usedCompare";
import UsedWishlist from "./usedWishlist/UsedWishlist"

//map
import {ChargingStationMap,SightsMap,TableChargingStation,BookmarkMap} from "./map/items";
import MapService from './map/page/service'

//board
import ClassicBoardMain from "./board/page/classicBoard.main";
import ClassicBoardDetails from "./board/page/classicBoard.details";

// Admin
import {Dashboard,ElecCar,Orders,UsedCar,Community,Notice,User,Profile,Reports} from './admin/page';

//common
import Search from './common/items/search'
import Faq from "./common/faq";

//user
import Login from './user/login'
import Register from './user/register'
import ForgetPassword from "./user/forget-password";
import MyAccount from "./user/myAccount";

import { getAllProducts } from './common/items/product'
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
                                <Route path={`${process.env.PUBLIC_URL}/cart`} component={CartComponent}/>
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
                                <Route path={`${process.env.PUBLIC_URL}/admin/users`} component={User} />
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


