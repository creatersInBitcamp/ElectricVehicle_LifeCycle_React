import React, { Component, Fragment } from 'react'

import LoginTabset from "./LoginTabset";
import { ArrowLeft, Sliders } from 'react-feather';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../index.scss'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Login extends Component {

import { ArrowLeft, Sliders } from 'react-feather';
import Slider from 'react-slick';
import stats from '../assets/images/dashboard/stats.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { User, Unlock } from 'react-feather';
import '../index.scss'


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeShow: true,
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this)
    }

    clickActive = (event) => {

        event.target.classList.add('show');
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    routeChange = () => {

    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false
        };
        return (
            <Fragment>
                <div className="page-wrapper">
                    <div className="authentication-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 p-0 card-left">
                                    <div className="card bg-primary">
                                        <div className="svg-icon">

                                            <img src={stats} className="Img-fluid" />

                                        </div>
                                        <Slider className="single-item" {...settings}>
                                            <div>
                                                <div>
                                                    <h3>Welcome to Multikart</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h3>Welcome to Multikart</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h3>Welcome to Multikart</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </div>
                                        </Slider >
                                    </div>
                                </div>
                                <div className="col-md-7 p-0 card-right">
                                    <div className="card tab2-card">
                                        <div className="card-body">

                                            <LoginTabset />

                                            <div>
                                                <Fragment>
                                                    <Tabs>
                                                        <TabList className="nav nav-tabs tab-coupon" >
                                                            <Tab className="nav-link" onClick={(e) => this.clickActive(e)}><User />Login</Tab>
                                                            <Tab className="nav-link" onClick={(e) => this.clickActive(e)}><Unlock />Register</Tab>
                                                        </TabList>

                                                        <TabPanel>
                                                            <form className="form-horizontal auth-form">
                                                                <div className="form-group">
                                                                    <input required="" name="login[username]" type="email" className="form-control" placeholder="Username" id="exampleInputEmail1" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input required="" name="login[password]" type="password" className="form-control" placeholder="Password" />
                                                                </div>
                                                                <div className="form-terms">
                                                                    <div className="custom-control custom-checkbox mr-sm-2">
                                                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                                                        <label className="d-block">
                                                                            <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                                            Reminder Me <span className="pull-right"> <a href="#" className="btn btn-default forgot-pass p-0">lost your password</a></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-button">
                                                                    <button className="btn btn-primary" type="submit"  onClick={() => this.routeChange()}>Login</button>
                                                                </div>
                                                                <div className="form-footer">
                                                                    <span>Or Login up with social platforms</span>
                                                                    <ul className="social">
                                                                        <li><a className="fa fa-facebook" href=""></a></li>
                                                                        <li><a className="fa fa-twitter" href=""></a></li>
                                                                        <li><a className="fa fa-instagram" href=""></a></li>
                                                                        <li><a className="fa fa-pinterest" href=""></a></li>
                                                                    </ul>
                                                                </div>
                                                            </form>
                                                        </TabPanel>
                                                        <TabPanel>
                                                            <form className="form-horizontal auth-form">
                                                                <div className="form-group">
                                                                    <input required="" name="login[username]" type="email" className="form-control" placeholder="Username" id="exampleInputEmail12" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input required="" name="login[password]" type="password" className="form-control" placeholder="Password" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input required="" name="login[password]" type="password" className="form-control" placeholder="Confirm Password" />
                                                                </div>
                                                                <div className="form-terms">
                                                                    <div className="custom-control custom-checkbox mr-sm-2">
                                                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                                                        <label className="d-block">
                                                                            <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                                            I agree all statements in <span><a href="">Terms &amp; Conditions</a></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-button">
                                                                    <button className="btn btn-primary" type="submit" onClick={() => this.routeChange()}>Register</button>
                                                                </div>
                                                                <div className="form-footer">
                                                                    <span>Or Sign up with social platforms</span>
                                                                    <ul className="social">
                                                                        <li><a className="fa fa-facebook" href=""></a></li>
                                                                        <li><a className="fa fa-twitter" href=""></a></li>
                                                                        <li><a className="fa fa-instagram" href=""></a></li>
                                                                        <li><a className="fa fa-pinterest" href=""></a></li>
                                                                    </ul>
                                                                </div>
                                                            </form>
                                                        </TabPanel>
                                                    </Tabs>
                                                </Fragment>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://react.pixelstrap.com/multikart" target="_blank" className="btn btn-primary back-btn"><ArrowLeft />back</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login