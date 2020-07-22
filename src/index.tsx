import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4'
import Login from "./admin/login";
import './index.scss';
import * as serviceWorker from './serviceWorker';

class Root extends Component {
    render() {
        return (
        <BrowserRouter basename={'/'}>
            <ScrollContext>
                <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
                </Switch>
            </ScrollContext>
        </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.unregister();