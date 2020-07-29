import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './App';
import { ScrollContext } from 'react-router-scroll-4';
import {Provider } from 'react-redux';
import {createStore} from 'redux'

// Components
import Dashboard from './admin/dashboard';

// Products physical
import Category from './admin/products/physical/category';


//Sales
import Orders from './admin/sales/orders';

//Pages
import ListPages from './admin/pages/list-page';
import Create_page from './admin/pages/create-page';
import Media from './admin/media/media';
import List_menu from './admin/menus/list-menu';
import List_user from './admin/users/list-user';
import List_vendors from './admin/vendors/list-vendors';
import Profile from './admin/settings/profile';
import Reports from './admin/reports/report';
import Datatable from './admin/common/datatable'
import Login from './admin/auth/login';
import rootReducer from "./store";


const store = createStore(rootReducer)

ReactDOM.render(
            <React.StrictMode>
            <Provider store = {store}>
            <BrowserRouter basename={'/'}>
                <ScrollContext>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
                        <Route exact path={`${process.env.PUBLIC_URL}/auth/login`} component={Login} />

                        <App>
                            <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />

                            <Route path={`${process.env.PUBLIC_URL}/products/physical/category`} component={Category} />

                            <Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={Orders} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/list-page`} component={ListPages} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/create-page`} component={Create_page} />

                            <Route path={`${process.env.PUBLIC_URL}/media`} component={Media} />

                            <Route path={`${process.env.PUBLIC_URL}/menus/list-menu`} component={List_menu} />

                            <Route path={`${process.env.PUBLIC_URL}/users/list-user`} component={List_user} />

                            <Route path={`${process.env.PUBLIC_URL}/vendors/list_vendors`} component={List_vendors} />

                            <Route path={`${process.env.PUBLIC_URL}/reports/report`} component={Reports} />

                            <Route path={`${process.env.PUBLIC_URL}/settings/profile`} component={Profile} />

                            <Route path={`${process.env.PUBLIC_URL}/data-table`} component={Datatable} />

                        </App>
                    </Switch>
                </ScrollContext>
            </BrowserRouter>
            </Provider>
            </React.StrictMode>,
        document.getElementById('root')
);




