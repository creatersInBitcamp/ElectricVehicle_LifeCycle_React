import React, {useState} from 'react'
import { AlignLeft, Maximize2, Bell, MessageSquare, MoreHorizontal } from 'react-feather';

//images
import logo from '../../../assets/images/dashboard/08.png'
import man from "../../../assets/images/dashboard/man.png";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const headerTypes = {REQUEST: 'header/REQUEST'}
const headerReducer = (state={}, action) => {
    switch (action.type) {
        case headerTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

const ADMIN_CHECK = 'ADMIN_CHECK'
const adminCheckAction = admin =>({type: ADMIN_CHECK, check: admin})

export const Header = () => {
    const [sidebar, setSidebar] = useState(true)
    const [rightSidebar, setRightSidebar] = useState(true)
    const [navMenus, setNavMenus] = useState(false)
    const [admin, setAdmin] = useState(false)

    const dispatch = useDispatch()

    const showRightSidebar = () => {
        if (rightSidebar) {
            setRightSidebar(false)
            document.querySelector(".right-sidebar").classList.add('show');
        } else {
            setRightSidebar(true)
            document.querySelector(".right-sidebar").classList.remove('show');
        }
    }
    const goFull = () => {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }
    const openCloseSidebar = () => {
        if (sidebar) {
            setSidebar(false)
            document.querySelector(".page-main-header").classList.add('open');
            document.querySelector(".page-sidebar").classList.add('open');
        } else {
            setSidebar(true)
            document.querySelector(".page-main-header").classList.remove('open');
            document.querySelector(".page-sidebar").classList.remove('open');
        }
    }
    const logout = (e) => {
        e.preventDefault()
        dispatch(adminCheckAction(admin))
    }
        return (
            <>
                {/* open */}
                <div className="page-main-header ">
                    <div className="main-header-right row">
                        <div className="main-header-left d-lg-none" >
                            <div className="logo-wrapper">
                                <a href="index.html">
                                    <img className="blur-up lazyloaded" src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="mobile-sidebar">
                            <div className="media-body text-right switch-sm">
                                <label className="switch"><a onClick={openCloseSidebar}><AlignLeft /></a></label>
                            </div>
                        </div>
                        <div className="nav-right col">
                            <ul className={"nav-notice " + (navMenus ? 'open' : '')}>
                                <li><a onClick={goFull} className="text-dark" href="#!"><Maximize2 /></a></li>
                                <li><a onClick={showRightSidebar}><MessageSquare /><span className="dot"/></a></li>
                                <li className="onhover-dropdown">
                                    <div className="media align-items-center">
                                        <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={man} alt="header-user" />
                                        <div className="dotted-animation"><span className="animate-circle"/><span className="main-circle"/></div>
                                    </div>
                                    <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                                        <li><Link to={`${process.env.PUBLIC_URL}/settings/profile`} ><i data-feather="user"/>Edit Profile</Link></li>
                                        <li><a><i data-feather="mail"/>Inbox</a></li>
                                        <li><a><i data-feather="lock"/>Lock Screen</a></li>
                                        <li><a><i data-feather="settings"/>Settings</a></li>
                                        <li onClick={logout}><Link to={`${process.env.PUBLIC_URL}/`}><i data-feather="log-out"/>Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default headerReducer
