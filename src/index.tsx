import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlProvider } from 'react-redux-multilingual'
import './index.scss';
import store from "./atomic/store";
import translations from './atomic/constants/translations'
import Layout from './App'
import Basket from './purchase/shopping-basket'
import Payment from './purchase/payment'
import Purchase from "./purchase/purchase";
import Compare from "./purchase/comparison";
import Prices from "./purchase/prices";
import Registration from "./purchase/registration";
import Detailpurchase from "./purchase/detailpurchase";
const Root = () => {
        // store.dispatch(getAllProducts());
        return (
            <Provider store={store}>
                <IntlProvider translations={translations} locale='ko'>
                    <BrowserRouter basename={'/'}>
                        <ScrollContext>
                            <Switch>
                                <Layout>
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Purchase}/>
                                    <Route path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`} component={Detailpurchase}/>
                                    <Route path={`${process.env.PUBLIC_URL}/payment`} component={Payment}/>
                                    <Route path={`${process.env.PUBLIC_URL}/basket`} component={Basket}/>
                                    <Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
                                    <Route exact path={`${process.env.PUBLIC_URL}/prices`} component={Prices} />
                                    <Route exact path={`${process.env.PUBLIC_URL}/registration`} component={Registration}/>
                                </Layout>
                            </Switch>
                        </ScrollContext>
                    </BrowserRouter>
                </IntlProvider>
            </Provider>
        )
}

ReactDOM.render(<Root />, document.getElementById('root'));
