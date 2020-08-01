import React, { Component } from 'react'
import {Sidebar} from './common/sidebar_components';
import Right_sidebar from './common/right-sidebar';
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
                        <Right_sidebar />
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
