import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from "./atomic/store";
import translations from './atomic/constants/translations'
import { getAllProducts } from './atomic/actions'

// Layouts
import Fashion from './layouts/fashion/main';

// Features
import Layout from './App'
import Cart from './cart'
import wishList from './bookmark'

// Extra Pages
import MapTs from "./map/mapTs"
import Contact from "./map/contact";
import Map from "./map/map"

//user
import Login from './user/login'
import Register from './user/register'

import Search from './search/search'

class Root extends Component {
    render() {
        store.dispatch(getAllProducts());

        return (
            <Provider store={store}>
                <IntlProvider translations={translations} locale='ko'>
                    <BrowserRouter basename={'/'}>
                        <ScrollContext>
                            <Switch>
                                <Layout>
                                    {/*Routes For Layouts*/}
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Map}/>

                                    <Route exact path={`${process.env.PUBLIC_URL}/main`} component={Fashion}/>

                                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
                                    <Route exact path={`${process.env.PUBLIC_URL}/map`} component={Map} />

                                    <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>

                                    <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>


                                    <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                    <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>

                                    <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>

                                </Layout>
                            </Switch>
                        </ScrollContext>
                    </BrowserRouter>
                </IntlProvider>
            </Provider>

        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
