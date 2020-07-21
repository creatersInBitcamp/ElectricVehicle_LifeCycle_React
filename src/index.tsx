import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import App from './App';


class Root extends Component {
    render() {
        return (
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
                    <App />
                </Switch>
            </ScrollContext>
        </BrowserRouter>
=======
        <div>
           <App/>
        </div>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);
