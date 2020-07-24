import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlProvider } from 'react-redux-multilingual'
import './index.scss';
import store from "./atomic/store";
import translations from './atomic/constants/translations'
import { getAllProducts } from './atomic/actions'
import Layout from './App'
import checkOut from './purchase/index'
import LeftSideBar from "./newSales/left-sidebar";
import CollectionLeftSidebar from "./newSales/collection-left-sidebar";


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
                                    <Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
                                    <Route path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`} component={LeftSideBar}/>
                                    <Route path={`${process.env.PUBLIC_URL}/left-sidebar/collection`} component={CollectionLeftSidebar}/>
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
