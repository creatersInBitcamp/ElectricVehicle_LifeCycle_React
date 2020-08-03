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
// import MainPage from "./common/MainPage";

//car
import wishlist from './wishlist/Wishlist'
import Compare from './compare/Compare'
import Cart from "./cart/CartComponent";

//used car
import {Detail, PurchaseRequest, UsedPurchaseCollection} from "./usedPurchase";
import {SalesForm} from "./usedSales";
import {Scrapped} from "./scrapped";

//common
import Login from './user/login'
import Register from './user/register'
import Search from './search/search'

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
import mapNaver from "./map/anothermap/mapBox"

//board
import BoardMain from "./board/BoardMain";
import BoardProfile from "./board/BoardProfile";
import BoardDetail from "./board/BoardDetail";
import NewPost from "./board/NewPost";


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




import { getAllProducts } from './product'
import store from "./store";


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
                                {/*<Route exact path={`${process.env.PUBLIC_URL}/`} component={Service}/>*/}

                                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main}/>
                                {/*<Route exact path={`${process.env.PUBLIC_URL}/main`} component={MainPage}/>*/}

                                {/*common*/}
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>

                                {/*car*/}
                                <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                                <Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
                                <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishlist}/>

                                {/*newcar*/}

                                {/*usedcar*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/left-sidebar/collection`} component={UsedPurchaseCollection}/>
                                <Route path={`${process.env.PUBLIC_URL}/checkout`} component={PurchaseRequest}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/product/:id`} component={Detail}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/product-detail/product/:id`} component={Detail}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-sales`} component={SalesForm}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/scrapped`} component={Scrapped}/>

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
                                <Route path={`${process.env.PUBLIC_URL}/blog/board-main`} component={BoardMain}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/new-post`} component={NewPost}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/board-profile`} component={BoardProfile}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/board-detail`} component={BoardDetail}/>

                                {/*admin*/}
                                <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
                                <Route path={`${process.env.PUBLIC_URL}/elecCar`} component={ElecCar} />
                                <Route path={`${process.env.PUBLIC_URL}/orders`} component={Orders} />
                                <Route path={`${process.env.PUBLIC_URL}/usedCar`} component={UsedCar} />
                                <Route path={`${process.env.PUBLIC_URL}/community`} component={Community} />
                                <Route path={`${process.env.PUBLIC_URL}/notice`} component={Notice} />
                                <Route path={`${process.env.PUBLIC_URL}/users`} component={List_user} />
                                <Route path={`${process.env.PUBLIC_URL}/reports`} component={Reports} />
                                <Route path={`${process.env.PUBLIC_URL}/userDetail`} component={Profile} />
                            </Layout>
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </IntlProvider>
        </Provider>

    )
}

ReactDOM.render(<Root />, document.getElementById('root'));


