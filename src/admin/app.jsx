import React, { Component } from 'react'
import {Sidebar} from './common/sidebar_components';
import {Footer} from './common';
import {Header} from './common/header_components';

export class App extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <div className="page-wrapper" >
                    <Header />
                    <div className="page-body-wrapper">
                        <Sidebar />
                        <div className="page-body">
                            {this.props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
