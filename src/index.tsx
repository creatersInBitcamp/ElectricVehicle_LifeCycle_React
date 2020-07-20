import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import { ScrollContext } from 'react-router-scroll-4'
import Map from "./map/map";

class Root extends Component {
    render() {
        return (
        <BrowserRouter>
            <ScrollContext>
                <Switch>
                <Route path={`/`} component={Map} />
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
