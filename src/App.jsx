import React, {Component, useEffect, useState} from 'react';
import {useSelector} from 'react-redux'

// Custom Components
import HeaderOne from './common/headers/header-one';
import FooterTwo from "./common/footers/footer-two";
import MyChatBot from "./chatbot/chatbot";
import {Sidebar} from "./admin/common/sidebar_components";
import {Footer} from "./admin/common";
import {Header} from "./admin/common/header_components";
import ThemeSettings from "./common/theme-settings";
import {ToastContainer} from "react-toastify";

const App = (props) => {
    const [admin,setAdmin] = useState(false);
    // const toggleAdmin = () => setAdmin(!admin)
    const result = useSelector(state=>state.adminCheckReducer)
    useEffect(()=>{
        console.log(result.check)
        setAdmin(result.check)
    },[result])
    if(admin){
        return (
            <div className="page-wrapper">
                {/*<button onClick={toggleAdmin}>toggle</button>*/}
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
                {/*<button onClick={toggleAdmin}>toggle</button>*/}
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