import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import './index.scss';
import Login from "./login";


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

ReactDOM.render(
    <React.StrictMode>
        <Root/>
    </React.StrictMode>,
    document.getElementById('root')
);