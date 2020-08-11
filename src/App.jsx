import React, {Component, useEffect, useState} from 'react';
import {useSelector} from 'react-redux'

// Custom Components
import HeaderOne from './common/headers/header-one';
import FooterTwo from "./common/footers/footer-two";
import MyChatBot from "./chatbot/chatbot";
import {Sidebar} from "./admin/common";
import {Footer} from "./admin/common";
import {Header} from "./admin/common";
import {ToastContainer} from "react-toastify";

const App = (props) => {
    const [admin,setAdmin] = useState(false);
    const result = useSelector(state=>state.adminCheckReducer)
    useEffect(()=>{
        setAdmin(result.check)
    },[result])
    if(admin){
        return (
            <div className="page-wrapper">
                <Header/>
                <div className="page-body-wrapper">
                    <Sidebar />
                    <div className="page-body">
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }else{
        return (
            <div>
                <MyChatBot/>
                <HeaderOne logoName={'logo.png'}/>
                {props.children}
                <FooterTwo logoName={'logo.png'}/>
                <ToastContainer/>
                {/*<ThemeSettings />*/}
            </div>
        );
    }
}
export default App;