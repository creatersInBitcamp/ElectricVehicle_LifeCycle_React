import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import translations from './atomic/constants/translations'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

import './index.scss';

// Layouts
import Fashion from './layouts/fashion/main';

// Features
import Layout from './App'
import Cart from './cart'
import wishList from './wishlist'

// Extra Pages
import Contact from "./map/contact";

//user
import Login from './user/login'
import Register from './user/register'

// import Search from './search/search'
import ChargingStationMap from "./map/charging-station-map";
import Service from './map/service'

// Components

import AdminLayout from './admin/AdminLayout';
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
import NewPost from "./board/NewPost";

import Search from './search/search'


import { getAllProducts } from './product'
import store from "./store";

/*import { createStore, combineReducers } from 'redux'
let reducers = combineReducers(Object.assign({}, { Intl }))
let store = createStore(reducers)*/

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
                                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Service}/>

                                <Route exact path={`${process.env.PUBLIC_URL}/main`} component={Fashion}/>

                                <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
                                <Route exact path={`${process.env.PUBLIC_URL}/map`} component={ChargingStationMap} />

                                <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>

                                <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>


                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>

                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>

                                <Route path={`${process.env.PUBLIC_URL}/blog/board-main`} component={BoardMain}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/new-post`} component={NewPost}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/board-profile`} component={BoardProfile}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/board-detail`} component={BoardDetail}/>


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


