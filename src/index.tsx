import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

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
import rootReducer from "./store/index.js";
import reduxThunk from 'redux-thunk'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))
console.log(store.getState())
ReactDOM.render(
            <React.StrictMode>
            <Provider store = {store}>
            <BrowserRouter basename={'/'}>
                        <App>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />

                            <Route path={`${process.env.PUBLIC_URL}/elecCar`} component={ElecCar} />

                            <Route path={`${process.env.PUBLIC_URL}/orders`} component={Orders} />
                            <Route path={`${process.env.PUBLIC_URL}/usedCar`} component={UsedCar} />

                            <Route path={`${process.env.PUBLIC_URL}/community`} component={Community} />

                            <Route path={`${process.env.PUBLIC_URL}/notice`} component={Notice} />

                            <Route path={`${process.env.PUBLIC_URL}/users`} component={List_user} />


                            <Route path={`${process.env.PUBLIC_URL}/reports`} component={Reports} />

                            <Route path={`${process.env.PUBLIC_URL}/userDetail`} component={Profile} />

                        </App>
            </BrowserRouter>
            </Provider>
            </React.StrictMode>,
        document.getElementById('root')
);




