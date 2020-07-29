import React, {Component, useState} from 'react'
import SearchHeader from './searchHeader';
import User_menu from './user-menu';
import { AlignLeft, Maximize2, Bell, MessageSquare, MoreHorizontal } from 'react-feather';

//images
import logo from '../../../assets/images/dashboard/08.png'

const Header = () => {
    const [sidebar, setSidebar] = useState(true)
    const [rightSidebar, setRightSidebar] = useState(true)
    const [navMenus, setNavMenus] = useState(false)

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
                            <ul className={"nav-menus " + (navMenus ? 'open' : '')}>
                                <li>
                                    <SearchHeader />
                                </li>
                                <li><a onClick={goFull} className="text-dark" href="#!"><Maximize2 /></a></li>
                                <li><a onClick={showRightSidebar}><MessageSquare /><span className="dot"></span></a></li>
                                <User_menu />
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Header
