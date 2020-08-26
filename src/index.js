import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import translations from './atomic/constants/translations'
import { IntlProvider } from 'react-redux-multilingual'
import './index.scss';
import Layout from './App'
//common
import {Main,Search,Faq,aboutUs} from "./common"
//new car
import {wishlist, CartComponent, checkout, Compare, CollectionLeftSidebar, LeftSidebar, OrderSuccess} from './newCar'
//used car
import {UsedPurchaseCollection,productDetail,PurchaseRequest,MyCarComparison,SalesForm,UsedWishlist,Scrapped,updateDetail} from './usedCar'
//map
import {MapChargingStation,MapSights,TableChargingStation,MapBookmark,Service} from "./map";
//board
import {BoardDetail, BoardInput, BoardMain, BoardUpdate} from "./board/";
// Admin
import {Dashboard,ElecCar,Orders,UsedCar,Community,Notice,User} from './admin/page';
//user
import {ForgetPassword, Login, MyAccount, MyCarRegister, Register} from './user'
import store from "./store";
import {getAllUsedProducts} from "./usedCar/item/UsedProductReducer";
import PaymentForm from "./common/payment/PaymentForm";
import PaymentResult from "./common/payment/PaymentResult";
import {getAllProducts} from "./newCar/items/ProductReducer";
import {initilaMapSatate} from "./map/items/StationReducer";
const Root = () => {
    store.dispatch(getAllProducts());
    store.dispatch(getAllUsedProducts());
    store.dispatch(initilaMapSatate());
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
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/profile`} component={MyAccount}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/pages/profile/mycar`} component={MyCarRegister}/>
                                {/*newcar*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/new-car/collection`} component={CollectionLeftSidebar}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/new-car/product/:eccarId`} component={LeftSidebar}/>
                                <Route path={`${process.env.PUBLIC_URL}/new-car/compare`} component={Compare}/>
                                <Route path={`${process.env.PUBLIC_URL}/new-car/wishlist`} component={wishlist}/>
                                <Route path={`${process.env.PUBLIC_URL}/cart`} component={CartComponent}/>
                                <Route path={`${process.env.PUBLIC_URL}/checkout/:eccarId`} component={checkout}/>
                                <Route path={`${process.env.PUBLIC_URL}/payment/`} component={PaymentForm}/>
                                <Route path={`${process.env.PUBLIC_URL}/payment/result`} component={PaymentResult}/>
                                <Route path={`${process.env.PUBLIC_URL}/order-success`} component={OrderSuccess}/>
                                {/*usedcar*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/collection`} component={UsedPurchaseCollection}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/product/:usedCarId`} component={productDetail}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/product/update/:usedCarId`} component={updateDetail}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/purchase/request/:usedCarId`} component={PurchaseRequest}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/comparison/:usedCarId`} component={MyCarComparison}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/used-car/sales`} component={SalesForm}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/scrapped`} component={Scrapped}/>
                                <Route path={`${process.env.PUBLIC_URL}/used-car/wishlist`} component={UsedWishlist}/>
                                {/*map*/}
                                <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/service/map/chargingstation`} component={MapChargingStation} />
                                <Route exact path={`${process.env.PUBLIC_URL}/service/map/sights`} component={MapSights} />
                                <Route exact path={`${process.env.PUBLIC_URL}/service/map/bookmark`} component={MapBookmark} />
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