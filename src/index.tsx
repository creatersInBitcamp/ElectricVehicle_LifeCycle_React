import React, { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< Updated upstream
import './index.scss';
=======
<<<<<<< Updated upstream
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
>>>>>>> parent of f8d2434... 20200720
import App from './App';
import { ScrollContext } from 'react-router-scroll-4'

class Root extends Component {
    render() {
        return (
<<<<<<< HEAD
<<<<<<< Updated upstream
        <div>
            <App/>
        </div>
=======
<<<<<<< Updated upstream
        <BrowserRouter>
            <ScrollContext>
                <Switch>
                <Route path={`/`} component={Login} />
=======
        <BrowserRouter>
            <ScrollContext>
                <Switch>
                <Route path={`/`} />
>>>>>>> parent of f8d2434... 20200720
                    <App />
                </Switch>
            </ScrollContext>
        </BrowserRouter>
<<<<<<< HEAD
=======
        <div>
           <App/>
        </div>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
>>>>>>> parent of f8d2434... 20200720
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);
