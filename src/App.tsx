import React, { Component } from 'react'
import Sidebar from '../src/admin/common/sidebar_components/sidebar';
import Right_sidebar from '../src/admin/common/right-sidebar';
import Footer from '../src/admin/common/footer';
import Header from '../src/admin/common/header_components/header';

export class App extends Component<any, any> {
    constructor(props){
        super(props);
        this.state ={
            ltr:true,
            divName:'RTL',
        }
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
                {/*<div className="btn-light custom-theme" onClick={ () => this.ChangeRtl(this.state.divName)}>{this.state.divName}</div>*/}
            </div>
        )
    }
}

export default App
