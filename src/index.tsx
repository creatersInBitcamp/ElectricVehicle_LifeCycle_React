import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import './index.scss';
import Login from "./login";
import CarChatbot from "./chatbot/CarChatbot";



class Root extends Component {
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <CarChatbot/>
                <ScrollContext>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login}/>

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