import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import translations from './atomic/constants/translations'
import { IntlProvider } from 'react-redux-multilingual'
import './index.scss';

//common
import Layout from './App'
import {Main,Search,Faq,aboutUs,getAllProducts} from "./common"

//new car
import {wishlist,CartComponent,checkOut,Compare,CollectionLeftSidebar,LeftSideBar} from './newCar'

//used car
import {UsedPurchaseCollection,productDetail,PurchaseRequest,MyCarComparison,SalesForm,UsedWishlist,Scrapped} from './usedCar'

//map
import {ChargingStationMap,SightsMap,TableChargingStation,BookmarkMap} from "./map/items";
import MapService from './map/page/service'

//board
import {BoardDetail, BoardInput, BoardMain, BoardUpdate} from "./board/";

// Admin
import {Dashboard,ElecCar,Orders,UsedCar,Community,Notice,User,Reports} from './admin/page';

//user
import {ForgetPassword,Login,MyAccount,Register,MyCarPage} from './user'


import store from "./store";
import {getAllUsedProducts} from "./usedCar/item/UsedProductReducer";

const Root = () => {
    // store.dispatch(getAllProducts());
    // store.dispatch(getAllUsedProducts());
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
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs}/>

                                {/*user*/}
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/forgot`} component={ForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/profile`} component={MyAccount}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/myCar`} component={MyCarPage}/>

                                {/*newcar*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/new-car/collection`} component={CollectionLeftSidebar}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/new-car/product/:eccarId`} component={LeftSideBar}/>
                                <Route path={`${process.env.PUBLIC_URL}/new-car/compare`} component={Compare}/>
                                <Route path={`${process.env.PUBLIC_URL}/new-car/wishlist`} component={wishlist}/>
                                <Route path={`${process.env.PUBLIC_URL}/cart`} component={CartComponent}/>
                                <Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>

                                {/*usedcar*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/collection`} component={UsedPurchaseCollection}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/product/:usedCarId`} component={productDetail}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/purchase/request/:usedCarId`} component={PurchaseRequest}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/comparison/:usedCarId`} component={MyCarComparison}/>
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
                                <Route path={`${process.env.PUBLIC_URL}/board/main/:category`} component={BoardMain}/>
                                <Route path={`${process.env.PUBLIC_URL}/board/details/:postId`} component={BoardDetail}/>
                                <Route path={`${process.env.PUBLIC_URL}/board/input/:category`} component={BoardInput}/>
                                <Route path={`${process.env.PUBLIC_URL}/board/update/:postId`} component={BoardUpdate}/>


                                {/*admin*/}
                                <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} component={Dashboard} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/elecCar`} component={ElecCar} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/orders`} component={Orders} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/usedCar`} component={UsedCar} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/community`} component={Community} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/notice`} component={Notice} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/users`} component={User} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/reports`} component={Reports} />
                                <Route path={`${process.env.PUBLIC_URL}/admin/userDetail`} component={MyAccount} />
                            </Layout>
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </IntlProvider>
        </Provider>

    )
}

ReactDOM.render(<Root />, document.getElementById('root'));