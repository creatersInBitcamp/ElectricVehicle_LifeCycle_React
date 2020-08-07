import React from 'react'
import { Link } from 'react-router-dom';

// image import
import logo from '../../../assets/images/dashboard/logoEv.jpg'
import man from '../../../assets/images/dashboard/man.png'
import {SidebarMenus} from "./";

const sidebarTypes = {REQUEST: 'sidebar/REQUEST'}
const sidebarReducer = (state={}, action) => {
    switch (action.type) {
        case sidebarTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Sidebar =() => {
    return (
            <>
                <div className="page-sidebar">
                    <div className="main-header-left d-none d-lg-block">
                        <div className="logo-wrapper">
                            <Link to={`${process.env.PUBLIC_URL}/admin/dashboard`}>
                                <img className="blur-up lazyloaded" src={logo} alt="로고"/>
                            </Link>
                        </div>
                    </div>
                    <div className="sidebar custom-scrollbar">
                        <div className="sidebar-user text-center">
                            <div><img className="img-60 rounded-circle lazyloaded blur-up" src={man} alt="사진" />
                            </div>
                            <h6 className="mt-3 f-14">곽 경 열</h6>
                            <p> ADMIN 담당개발자 </p>
                        </div>
                        <ul className="sidebar-menu">
                            <SidebarMenus/>
                        </ul>
                    </div>
                </div>
            </>
        )
}

export default sidebarReducer
