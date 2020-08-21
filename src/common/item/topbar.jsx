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

export const TopBar = () => {
    const contexts = {
        user:'http://localhost:8080/user/csv',
        post:"http://localhost:8080/posts/readcsv",
        sights:"http://localhost:8080/sights/csv",
        charge:"http://localhost:8080/chargingstations/csv",
        cars:"http://localhost:8080/cars/csv",
        used:"http://localhost:8080/usedCars/csv",
        electric: "http://localhost:8080/electriccars/csv",
        variants : "http://localhost:8080/variants/csv",
        fare : "http://localhost:8080/fare/csv"
    }
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
        sessionStorage.clear()
        window.location.reload()
    }
    const onCSVuser = (e) => {
        e.preventDefault()
            axios.get(`${contexts.user}`)
                .then((res)=>{
                    console.log(`user 성공`)
                })
                .catch((err)=>{
                    console.log(`${contexts.user}: err: ${err.status}`)
                })
    }
    const onCSVpost = (e) => {
        e.preventDefault()
        axios.get(`${contexts.post}`)
            .then((res)=>{
                console.log(`post 성공`)
            })
            .catch((err)=>{
                console.log(`${contexts.post}: err: ${err.status}`)
            })
    }
    const onCSVsight = (e) => {
        e.preventDefault()
        axios.get(`${contexts.sights}`)
            .then((res)=>{
                console.log(`관광지 성공`)
            })
            .catch((err)=>{
                console.log(`${contexts.sights}: err: ${err.status}`)
            })
    }
    const onCSVcharge = (e) => {
        e.preventDefault()
        axios.get(`${contexts.charge}`)
            .then((res)=>{
                console.log(`충전소 성공`)
            })
            .catch((err)=>{
                console.log(`${contexts.charge}: err: ${err.status}`)
            })
    }
    const onCSVcar = (e) => {
        e.preventDefault()
        axios.get(contexts.cars)
            .then((res)=>{
                console.log('차 성공')
            })
            .catch((err)=>{
                console.log('차 실패')
            })
    }
    const onCSVused = (e) => {
        e.preventDefault()
        axios.get(contexts.used)
            .then((res)=>{
                console.log('중고차 성공')
            })
            .catch((err)=>{
                console.log('중고차 실패')
            })
    }
    const onCSVnew = (e) => {
        e.preventDefault()
        axios.get(contexts.electric)
            .then((res)=>{
                console.log('신차 성공')
            })
            .catch((err)=>{
                console.log('신차 실패')
            })
    }
    const onCSVvariants = (e) => {
        e.preventDefault()
        axios.get(contexts.variants)
            .then((res)=>{
                console.log('variants 성공')
            })
            .catch((err)=>{
                console.log('variants 실패')
            })
    }
    const onCSVfare = (e) => {
        e.preventDefault()
        axios.get(contexts.fare)
            .then((res)=>{
                console.log('fare 성공')
            })
            .catch((err)=>{
                console.log('fare 실패')
            })
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
                                <li>
                                    <button onClick={(e)=> {onCSVuser(e)}}>USER</button>
                                    <button onClick={(e)=> {onCSVpost(e)}}>POST</button>
                                    <button onClick={(e)=> {onCSVsight(e)}}>SIGHTS</button>
                                    <button onClick={(e)=> {onCSVcharge(e)}}>CHARGE</button>
                                    <button onClick={(e)=> {onCSVcar(e)}}>car</button>
                                    <button onClick={(e)=> {onCSVnew(e)}}>NewCar</button>
                                    <button onClick={(e)=> {onCSVvariants(e)}}>Variants</button>
                                    <button onClick={(e)=> {onCSVused(e)}}>UsedCar</button>
                                    <button onClick={(e)=> {onCSVfare(e)}}>fare</button>
                                </li>
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