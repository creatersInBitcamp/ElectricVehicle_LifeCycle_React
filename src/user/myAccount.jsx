import React from 'react';
import {Breadcrumb} from "../common";
import {Link, Switch, Route} from "react-router-dom";
import {MyCarPage} from "./MyCar";

export const MyAccount = () => {

    return (

            <div>
                <Breadcrumb title={'MyAccount'}/>
                
                
                {/*Dashboard section*/}
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="account-sidebar">
                                    <a className="popup-btn">
                                        my account
                                    </a>
                                </div>
                                <div className="dashboard-left">
                                    <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"/> back
                                    </span>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            <li className="active"><Link to={"/pages/myaccount"}>Account Info</Link></li>
                                            <li><a href="#">Address Book</a></li>
                                            <li><Link to={"/pages/myCar"}>My Car</Link></li>
                                            <li><a href="#">My Orders</a></li>
                                            <li><a href="#">My Wishlist</a></li>
                                            <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Change Password</a></li>
                                            <li className="last"><a href="#">Log Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default MyAccount