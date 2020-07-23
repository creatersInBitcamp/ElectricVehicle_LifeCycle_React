import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../index.scss';
import App from "./app";
import { ScrollContext } from 'react-router-scroll-4';

import Login from "./login";

// Components
import Dashboard from './dashboard';

class Admin extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <ScrollContext>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/admin/login`} component={Login} />
                        <App>
                            <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} component={Dashboard} />
                        </App>

                    </Switch>
                </ScrollContext>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Admin />, document.getElementById('admin'));
