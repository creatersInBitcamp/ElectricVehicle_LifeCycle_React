import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'

// Custom Components
import HeaderOne from './common/headers/header-one';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderOne logoName={'logo.png'}/>
                {this.props.children}

            </div>
        );
    }
}

export default withTranslate(App);