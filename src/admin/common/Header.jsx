import React, {useEffect, useState} from 'react'
import { AlignLeft, Maximize2, Bell, MessageSquare, MoreHorizontal } from 'react-feather';

//images
import logo from '../../assets/images/dashboard/08.png'
import man from "../../assets/images/dashboard/man.png";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearWishlist} from "../../newCar/page/WishlistReducer";
import {removeAllUsedWishlist} from "../../usedCar/page/UsedCarWishlist";
import {clearCart} from "../../newCar/page/CartReducer";
import {clearUsedCompare} from "../../usedCar/page/MyCarComparison";
import {clearCompare} from "../../newCar/page/CompareReducer";


const ADMIN_CHECK = 'ADMIN_CHECK'
const adminCheckAction = admin =>({type: ADMIN_CHECK, check: admin})

export const Header = () => {
    const [sidebar, setSidebar] = useState(true)
    const [rightSidebar, setRightSidebar] = useState(true)
    const [navMenus] = useState(false)
    const [admin] = useState(false)
    const [image, setImage] = useState('')
    const [session] = useState(JSON.parse(sessionStorage.getItem("user")))

    useEffect(()=>{
        if(session){setImage(session.profileImage)}
    },[session])

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
        dispatch(clearWishlist())
        dispatch(removeAllUsedWishlist())
        dispatch(clearCart())
        dispatch(clearUsedCompare())
        dispatch(clearCompare())
        dispatch(adminCheckAction(admin))
        sessionStorage.clear()
        window.location.reload()
    }
        return (
            <>
                {/* open */}
                <div className="page-main-header ">
                    <div className="main-header-right row">
                        <div className="main-header-left d-lg-none" >
                            <div className="logo-wrapper">
                                    <img className="blur-up lazyloaded" src={logo} alt="" />
                            </div>
                        </div>
                        <div className="mobile-sidebar">
                            <div className="media-body text-right switch-sm">
                                <label className="switch"><a onClick={openCloseSidebar}><AlignLeft /></a></label>
                            </div>
                        </div>
                        <div className="nav-right col">
                            <ul className={"nav-notice " + (navMenus ? 'open' : '')}>
                                <li className="onhover-dropdown">
                                    <div className="media align-items-center">
                                        <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={image} alt="header-user" />
                                        <div className="dotted-animation"><span className="animate-circle"/><span className="main-circle"/></div>
                                        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                                            <li><Link to={`${process.env.PUBLIC_URL}/pages/profile`} ><i data-feather="user"/>프로필 변경</Link></li>
                                            <li onClick={logout}><Link to={`${process.env.PUBLIC_URL}/`}><i data-feather="log-out"/>로그아웃</Link></li>
                                        </ul>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Header
