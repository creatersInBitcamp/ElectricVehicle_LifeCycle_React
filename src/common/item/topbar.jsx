import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useTranslate  } from 'react-redux-multilingual'
import axios from 'axios'
import {clearWishlist} from "../../newCar/page/WishlistReducer";
import {useDispatch} from "react-redux";
import {removeAllUsedWishlist} from "../../usedCar/page/UsedCarWishlist";
import {clearCart} from "../../newCar/page/CartReducer";
import {clearCompare} from "../../newCar/page/CompareReducer";
import {clearUsedCompare} from "../../usedCar/page/MyCarComparison";
import {clearMyCar} from "../../user/MyCarRegister";

export const TopBar = () => {
    const translate = useTranslate();
    const [session, setSession] = useState(false)
    const [userSession] = useState(sessionStorage.getItem("user"))

    useEffect(() => {
        userSession ? setSession(true) : setSession(false)
    },[userSession])

    const dispatch = useDispatch()
    const logout = (e) => {
        e.preventDefault()
        dispatch(clearWishlist())
        dispatch(removeAllUsedWishlist())
        dispatch(clearCart())
        dispatch(clearUsedCompare())
        dispatch(clearCompare())
        dispatch(clearMyCar())
        sessionStorage.clear()
        window.location.reload()
    }


    return <>
        <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="header-contact">
                            <ul>
                                <li>{translate('topbar_title', { theme_name: ' ElectricVehicle_LifeCycle' })}</li>
                                <li><i className="fa fa-phone" aria-hidden="true"/>{translate('call_us')}:  123 - 456 - 7890</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 text-right">
                        <ul className="header-dropdown">
                            <li className="mobile-wishlist compare-mobile">
                                {/*<Link to={`${process.env.PUBLIC_URL}/compare`}>
                                    <i className="fa fa-random" aria-hidden="true"/>
                                    {translate('new_car_compare')}
                                </Link>*/}
                            </li>
                            <li className="onhover-dropdown mobile-wishlist compare-mobile">
                                <i className="fa fa-random" aria-hidden="true"/>
                                {translate('compare')}
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/new-car/compare`} data-lng="en">{translate('new_car')}</Link>
                                    </li>
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/used-car/comparison/:id`} data-lng="en">{translate('used_car')}</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="onhover-dropdown mobile-wishlist">
                                <i className="fa fa-heart" aria-hidden="true"/>
                                {translate('wishlist')}
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/new-car/wishlist`} data-lng="en">{translate('new_car')}</Link>
                                    </li>
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/used-car/wishlist`} data-lng="en">{translate('used_car')}</Link>
                                    </li>
                                </ul>
                            </li>
                            {!session &&
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"/>
                                {translate('login')}
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/login`}
                                              data-lng="en">{translate('login')}</Link>
                                    </li>
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/register`}
                                              data-lng="en">{translate('register')}</Link>
                                    </li>
                                </ul>
                            </li>
                            }
                            {session &&
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"/>
                                {translate('my_account')}
                                <ul className="onhover-show-div">
                                    <li onClick={logout}>
                                        <Link to={`${process.env.PUBLIC_URL}/`}
                                              data-lng="en">{translate('logout')}</Link>
                                    </li>

                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/profile`}
                                              data-lng="en">{translate('mypage')}</Link>
                                    </li>
                                </ul>
                            </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TopBar