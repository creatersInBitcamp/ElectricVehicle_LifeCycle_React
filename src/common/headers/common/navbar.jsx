import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslate  } from 'react-redux-multilingual'
import useComponentWillMount from "component-will-mount-hook/es6/useComponentWillMount";

const NavBar = () => {
    const [navClose, setNavClose] = useState({right: '0px'})

    useComponentWillMount(()=>{
        if (window.innerWidth < 750) {
            setNavClose({right: '-410px'})
        }
        if (window.innerWidth < 1199) {
            setNavClose({right: '-300px'})
        }
    })

    /*useEffect(() => {
        if (window.innerWidth < 750) {
            setNavClose({right: '-410px'})
        }
        if (window.innerWidth < 1199) {
            setNavClose({right: '-300px'})
        }
    })*/

    const openNav = () => {
        console.log('open')
        setNavClose({right: '0px'})
    }
    const closeNav = () => {
        setNavClose({right: '-410px'})
    }

    // const onMouseEnterHandler = () => {
    //     if (window.innerWidth > 1199) {
    //         document.querySelector("#main-menu").classList.add("hover-unset");
    //     }
    // }

    const handleSubmenu = e => {
        if (e.target.classList.contains('sub-arrow'))
            return
        if (e.target.nextElementSibling.classList.contains('opensubmenu'))
            e.target.nextElementSibling.classList.remove('opensubmenu')
        else {
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            })
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            e.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    const translate = useTranslate();
    return <>
        <div>
            <div className="main-navbar">
                <div id="main-nav">
                    <div className="toggle-nav" onClick={openNav}>
                        <i className="fa fa-bars sidebar-bar"/>
                    </div>
                    <ul className="nav-menu" style={navClose}>
                        <li className="back-btn" onClick={closeNav}>
                            <div className="mobile-back text-right">
                                <span>Back</span>
                                <i className="fa fa-angle-right pl-2" aria-hidden="true"/>
                            </div>
                        </li>
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/new-car/collection`} className="nav-link" >
                                {translate('new_car')}
                                <span className="sub-arrow"/>
                            </Link>
                            <ul className="nav-submenu">
                                <li><Link to={`${process.env.PUBLIC_URL}/new-car/collection`}>{translate('new_car_purchase')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/checkout`}>{translate('checkout')}</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/used-car/collection`} className="nav-link" >
                                {translate('used_car')}
                                <span className="sub-arrow"/>
                            </Link>
                            <ul className="nav-submenu">
                                <li><Link
                                    to={`${process.env.PUBLIC_URL}/used-car/collection`}>{translate('used_car_purchase')}</Link>
                                </li>
                                <li><Link
                                    to={`${process.env.PUBLIC_URL}/used-car/sales`}>{translate('used_car_sales')}</Link>
                                </li>
                                <li><Link to={`${process.env.PUBLIC_URL}/scrapped`}>{translate('scrapped')}</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/service`} className="nav-link">
                                {translate('map')}
                                <span className="sub-arrow"/>
                            </Link>
                            <ul className="nav-submenu">
                                <li><Link to={`${process.env.PUBLIC_URL}/service`}>{translate('map')}</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/board/main`} className="nav-link">
                                {translate('board')}
                                <span className="sub-arrow"/>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${process.env.PUBLIC_URL}/pages/about-us`} className="nav-link">
                                {translate('about_us')}
                                <span className="sub-arrow"/>
                            </Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link to="#" className="nav-link" onClick={handleSubmenu}>*/}
                        {/*        {translate('admin')}*/}
                        {/*        <span className="sub-arrow"/>*/}
                        {/*    </Link>*/}
                        {/*    <ul className="nav-submenu">*/}
                        {/*        <li><Link to={`${process.env.PUBLIC_URL}/admin/dashboard`}>{translate('dashboard')}</Link></li>*/}
                        {/*        <li><Link to={`${process.env.PUBLIC_URL}/admin/orders`}>{translate('orders')}</Link></li>*/}
                        {/*        <li><Link to={`${process.env.PUBLIC_URL}/admin/usedCar`}>{translate('used_car')}</Link></li>*/}
                        {/*        <li><Link to={`${process.env.PUBLIC_URL}/admin/community`}>{translate('community')}</Link></li>*/}
                        {/*        <li><Link to={`${process.env.PUBLIC_URL}/admin/notice`}>{translate('notice')}</Link></li>*/}
                        {/*        <li><Link to={`${process.env.PUBLIC_URL}/admin/users`}>{translate('users')}</Link></li>*/}
                        {/*        <li><Link to={`${process.env.PUBLIC_URL}/admin/reports`}>{translate('reports')}</Link></li>*/}
                        {/*        <li><Link to={`${process.env.PUBLIC_URL}/admin/userDetail`}>{translate('userDetail')}</Link></li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </div>
    </>
}
export default NavBar