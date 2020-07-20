import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';


class Root extends Component {
    render() {
        return (
        <div>
            <App/>
        </div>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);
