import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from "./_atomic/store";
import translations from './_atomic/constants/translations'
import { getAllProducts } from './_atomic/actions'

// Layouts
// import Fashion from './layouts/fashion/main';

// Features
import Layout from './App'
import Cart from './cart'
import checkOut from './purchase/index'
import orderSuccess from './purchase/success-page'
import wishList from './bookmark'

// Extra Pages
import Map from "./map/map"
import Contact from "./map/contact";

// Product Pages
import LeftSideBar from "./newSales/left-sidebar";
import CollectionLeftSidebar from "./newSales/collection-left-sidebar";

//Admin
import AdminLogin from "./admin/login";
import AdminDashboard from "./admin/dashboard";
// import App from "./admin/app";

import Details from "./board/details"

//user
import Login from './user/login'
import Register from './user/register'


import Search from './search/search'

import Compare from "./comparison";
import BoardMain from "./board/BoardMain";
import BoardProfile from "./board/BoardProfile";
import BoardDetail from "./board/BoardDetail";
// @ts-ignore
import NewPost from "./board/NewPost";

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
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={BoardMain}/>

                                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
                                    <Route exact path={`${process.env.PUBLIC_URL}/map`} component={Map} />

                                    <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                                    <Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
                                    <Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>

                                    <Route path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`} component={LeftSideBar}/>
                                    <Route path={`${process.env.PUBLIC_URL}/left-sidebar/collection`} component={CollectionLeftSidebar}/>

                                    <Route exact path={`${process.env.PUBLIC_URL}/admin/login`} component={AdminLogin} />
                                    <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} component={AdminDashboard} />


                                    <Route path={`${process.env.PUBLIC_URL}/blog/details`} component={Details}/>
                                    <Route path={`${process.env.PUBLIC_URL}/blog/board-main`} component={BoardMain}/>
                                    <Route path={`${process.env.PUBLIC_URL}/blog/new-post`} component={NewPost}/>
                                    <Route path={`${process.env.PUBLIC_URL}/blog/board-profile`} component={BoardProfile}/>
                                    <Route path={`${process.env.PUBLIC_URL}/blog/board-detail`} component={BoardDetail}/>


                                    <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>


                                    <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                    <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>

                                    <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>

                                    <Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
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
