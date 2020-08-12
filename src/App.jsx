import React, {Component, useEffect, useState} from 'react';
import {useSelector} from 'react-redux'

// Custom Components
import {HeaderOne,FooterTwo} from './common'
import {Header,Footer,Sidebar} from "./admin/common";
import MyChatBot from "./chatbot/chatbot";
import {ToastContainer} from "react-toastify";

const App = (props) => {
    const [admin,setAdmin] = useState(false);
    const result = useSelector(state=>state.loginReducer)
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