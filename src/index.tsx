import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './App';
import { ScrollContext } from 'react-router-scroll-4';

// Components
import Dashboard from './admin/dashboard';

// Products physical
import Category from './admin/products/physical/category';
import Sub_category from './admin/products/physical/sub-category';
import Product_list from './admin/products/physical/product-list';
import Add_product from './admin/products/physical/add-product';
import Product_detail from './admin/products/physical/product-detail';

//Product Digital
import Digital_category from './admin/products/digital/digital-category';
import Digital_sub_category from './admin/products/digital/digital-sub-category';
import Digital_pro_list from './admin/products/digital/digital-pro-list';
import Digital_add_pro from './admin/products/digital/digital-add-pro';

//Sales
import Orders from './admin/sales/orders';
import Transactions_sales from './admin/sales/transactions-sales';

//Pages
import ListPages from './admin/pages/list-page';
import Create_page from './admin/pages/create-page';
import Media from './admin/media/media';
import List_menu from './admin/menus/list-menu';
import Create_menu from './admin/menus/create-menu';
import List_user from './admin/users/list-user';
import Create_user from './admin/users/create-user';
import List_vendors from './admin/vendors/list-vendors';
import Create_vendors from './admin/vendors/create.vendors';
import Profile from './admin/settings/profile';
import Reports from './admin/reports/report';
import Invoice from './admin/invoice';
import Datatable from './admin/common/datatable'
import Login from './admin/auth/login';



class Root extends Component<any, any> {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <ScrollContext>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
                        <Route exact path={`${process.env.PUBLIC_URL}/auth/login`} component={Login} />

                        <App>
                            <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />

                            <Route path={`${process.env.PUBLIC_URL}/products/physical/category`} component={Category} />
                            <Route path={`${process.env.PUBLIC_URL}/products/physical/sub-category`} component={Sub_category} />
                            <Route path={`${process.env.PUBLIC_URL}/products/physical/product-list`} component={Product_list} />
                            <Route path={`${process.env.PUBLIC_URL}/products/physical/product-detail`} component={Product_detail} />
                            <Route path={`${process.env.PUBLIC_URL}/products/physical/add-product`} component={Add_product} />

                            <Route path={`${process.env.PUBLIC_URL}/products/digital/digital-category`} component={Digital_category} />
                            <Route path={`${process.env.PUBLIC_URL}/products/digital/digital-sub-category`} component={Digital_sub_category} />
                            <Route path={`${process.env.PUBLIC_URL}/products/digital/digital-product-list`} component={Digital_pro_list} />
                            <Route path={`${process.env.PUBLIC_URL}/products/digital/digital-add-product`} component={Digital_add_pro} />

                            <Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={Orders} />
                            <Route path={`${process.env.PUBLIC_URL}/sales/transactions`} component={Transactions_sales} />

                            <Route path={`${process.env.PUBLIC_URL}/pages/list-page`} component={ListPages} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/create-page`} component={Create_page} />

                            <Route path={`${process.env.PUBLIC_URL}/media`} component={Media} />

                            <Route path={`${process.env.PUBLIC_URL}/menus/list-menu`} component={List_menu} />
                            <Route path={`${process.env.PUBLIC_URL}/menus/create-menu`} component={Create_menu} />

                            <Route path={`${process.env.PUBLIC_URL}/users/list-user`} component={List_user} />
                            <Route path={`${process.env.PUBLIC_URL}/users/create-user`} component={Create_user} />

                            <Route path={`${process.env.PUBLIC_URL}/vendors/list_vendors`} component={List_vendors} />
                            <Route path={`${process.env.PUBLIC_URL}/vendors/create-vendors`} component={Create_vendors} />

                            <Route path={`${process.env.PUBLIC_URL}/reports/report`} component={Reports} />

                            <Route path={`${process.env.PUBLIC_URL}/settings/profile`} component={Profile} />

                            <Route path={`${process.env.PUBLIC_URL}/invoice`} component={Invoice} />

                            <Route path={`${process.env.PUBLIC_URL}/data-table`} component={Datatable} />

                        </App>
                    </Switch>
                </ScrollContext>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


