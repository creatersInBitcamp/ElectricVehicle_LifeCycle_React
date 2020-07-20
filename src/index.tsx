import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.scss';

import Map from "./map/map";
import Login from "./login";

class Root extends Component {
    render() {
        return (
        <BrowserRouter>

                <Switch>
                    <Route path={`/`} component={Login} />
                    <Route path={`/map`} component={Map} />
                </Switch>

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
