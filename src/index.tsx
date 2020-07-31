import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './App';
import { ScrollContext } from 'react-router-scroll-4';
import {Provider } from 'react-redux';
import {createStore} from 'redux'

// Components
import {Dashboard} from './admin';
import {ElecCar} from './admin/elecCar';
import {Orders} from './admin/sales';
import {UsedCar} from './admin/usedCar';
import {Community} from './admin/community';
import {Notice} from './admin/notice';
import {List_user} from './admin/users';
import {Profile} from './admin/settings';
import {Reports} from './admin/reports';
import {Login} from './admin/auth/login';
import rootReducer from "./store/index.js";


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

                            <Route path={`${process.env.PUBLIC_URL}/elecCar`} component={ElecCar} />

                            <Route path={`${process.env.PUBLIC_URL}/orders`} component={Orders} />
                            <Route path={`${process.env.PUBLIC_URL}/usedCar`} component={UsedCar} />

                            <Route path={`${process.env.PUBLIC_URL}/community`} component={Community} />

                            <Route path={`${process.env.PUBLIC_URL}/notice`} component={Notice} />

                            <Route path={`${process.env.PUBLIC_URL}/users`} component={List_user} />


                            <Route path={`${process.env.PUBLIC_URL}/reports`} component={Reports} />

                            <Route path={`${process.env.PUBLIC_URL}/userDetail`} component={Profile} />

                        </App>
                    </Switch>
                </ScrollContext>
            </BrowserRouter>
            </Provider>
            </React.StrictMode>,
        document.getElementById('root')
);




