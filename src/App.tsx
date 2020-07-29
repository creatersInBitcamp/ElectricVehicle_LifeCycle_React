import React from 'react'
import Sidebar from '../src/admin/common/sidebar_components/sidebar';
import Footer from '../src/admin/common/footer';
import Header from '../src/admin/common/header_components/header';

const App = (props) => {
        return (
            <>
                <div className="page-wrapper" >
                    <Header />
                    <div className="page-body-wrapper">
                        <Sidebar />
                        <div className="page-body">
                            {props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
        )
}

export default App
