import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import './index.scss';
import { ScrollContext } from 'react-router-scroll-4'
import Board from "./board/board";

class Root extends Component {
    render() {
        return (
        <BrowserRouter>
            <ScrollContext>
                <Switch>
                <Route path={`/`} component={Board} />
                </Switch>
            </ScrollContext>
        </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
