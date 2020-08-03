import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslate  } from 'react-redux-multilingual'

const Topbar = () => {

    const translate = useTranslate();

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
                                <Link to={`${process.env.PUBLIC_URL}/compare`}>
                                    <i className="fa fa-random" aria-hidden="true"/>
                                    {translate('new_car_compare')}
                                </Link>
                            </li>
                            <li className="mobile-wishlist compare-mobile">
                                <Link to={`${process.env.PUBLIC_URL}/used-car/comparison`}>
                                    <i className="fa fa-random" aria-hidden="true"/>
                                    {translate('used_car_compare')}
                                </Link>
                            </li>
                            <li className="mobile-wishlist">
                                <Link to={`${process.env.PUBLIC_URL}/wishlist`}>
                                    <i className="fa fa-heart" aria-hidden="true"/>
                                    {translate('wishlist')}
                                </Link>
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"/>
                                {translate('my_account')}
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">{translate('login')}</Link>
                                    </li>
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">{translate('register')}</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Topbar