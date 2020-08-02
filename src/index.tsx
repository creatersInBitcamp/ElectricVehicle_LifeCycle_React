import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import translations from './atomic/constants/translations'
import { IntlProvider } from 'react-redux-multilingual'

import './index.scss';

// Layouts

// Features
import Layout from './App'
import Cart from './cart'
import wishList from './wishlist'

// Extra Pages

//user
import Login from './user/login'
import Register from './user/register'

import ChargingStationMap from "./map/charging-station-map";

// Components

// import AdminLayout from './admin/AdminLayout';
import {Dashboard} from './admin';
import {ElecCar} from './admin/elecCar';
import {Orders} from './admin/sales';
import {UsedCar} from './admin/usedCar';
import {Community} from './admin/community';
import {Notice} from './admin/notice';
import {List_user} from './admin/users';
import {Profile} from './admin/settings';
import {Reports} from './admin/reports';


import BoardMain from "./board/BoardMain";
import BoardProfile from "./board/BoardProfile";
import BoardDetail from "./board/BoardDetail";
import Search from './search/search'


import { getAllProducts } from './product'
import store from "./store";
import MainPage from "./common/MainPage";
import SightsMap from "./map/sights-map";

/*import { createStore, combineReducers } from 'redux'
let reducers = combineReducers(Object.assign({}, { Intl }))
let store = createStore(reducers)*/

const Root =()=> {
    store.dispatch(getAllProducts());
    return (
        <Provider store={store}>
            <IntlProvider translations={translations} locale='ko'>
                <BrowserRouter basename={'/'}>
                    <ScrollContext>
                        <Switch>
                            <Layout>
                                {/*common*/}
                                <Route path={`${process.env.PUBLIC_URL}/`} component={MainPage}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>

                                {/*map*/}
                                <Route path={`${process.env.PUBLIC_URL}/map`} component={SightsMap} />

                                <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                                <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
                                {/*board*/}
                                <Route path={`${process.env.PUBLIC_URL}/post/main`} component={BoardMain}/>
                                <Route path={`${process.env.PUBLIC_URL}/post/detail`} component={BoardDetail}/>
                                <Route path={`${process.env.PUBLIC_URL}/post/profile`} component={BoardProfile}/>

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