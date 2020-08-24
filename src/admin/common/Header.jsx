import React, {useEffect, useState} from 'react'
import { AlignLeft } from 'react-feather';

//images
import logo from '../../assets/images/dashboard/08.png'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearWishlist} from "../../newCar/page/WishlistReducer";
import {removeAllUsedWishlist} from "../../usedCar/page/UsedCarWishlist";
import {clearCart} from "../../newCar/page/CartReducer";
import {clearUsedCompare} from "../../usedCar/page/MyCarComparison";
import {clearCompare} from "../../newCar/page/CompareReducer";
import {clearMyCar} from "../../user/MyCarRegister";


const ADMIN_CHECK = 'ADMIN_CHECK'
const adminCheckAction = admin =>({type: ADMIN_CHECK, check: admin})

export const Header = () => {
    const [sidebar, setSidebar] = useState(true)
    const [navMenus] = useState(false)
    const [admin] = useState(false)
    const [image, setImage] = useState('')
    const [session] = useState(JSON.parse(sessionStorage.getItem("user")))

    useEffect(()=>{
        if(session){setImage(session.profileImage)}
    },[session])

    const dispatch = useDispatch()

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
        dispatch(clearMyCar())
        dispatch(adminCheckAction(admin))
        sessionStorage.clear()
        window.location.reload()
    }

    const main = (e) =>{
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
                                <div/>
                                <li className="onhover-dropdown">
                                    <div className="media align-items-center">
                                        <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={image} alt="header-user" />
                                        <div className="dotted-animation"><span className="animate-circle"/><span className="main-circle"/></div>
                                        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                                            <li onClick={main}><Link to={`${process.env.PUBLIC_URL}/`} ><i data-feather="user"/>홈으로 가기</Link></li>
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
