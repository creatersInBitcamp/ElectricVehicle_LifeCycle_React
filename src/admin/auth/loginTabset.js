import React, {useEffect, useState} from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { User, Unlock } from 'react-feather';
import { withRouter } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {adminCheck, checkadmin} from "./admincheckReducer";

const LoginTabset = (props) => {
    const[activeShow, setActiveShow] = useState()
    const[startDate, setStartDate] = useState()
    const [adminck,setAdminck] = useState();

    // handleChange = handleChange.bind(this)
    const clickActive = (event) => {
        document.querySelector(".nav-link").classList.remove('show');
        event.target.classList.add('show');
    }
    /*const handleChange = (date) => {
        setStartDate(data)
    }*/
    const {result} = useSelector(state => state.checkadmin)

    const routeChange = () => {
        setAdminck(result.adminck)
        console.log(adminck)
        props.history.push(`${process.env.PUBLIC_URL}/admin/dashboard`);
    }
    return (
        <div>
            <>
                <Tabs>
                    <TabList className="nav nav-tabs tab-coupon" >
                        <Tab className="nav-link" onClick={(e) => clickActive(e)}><User />Login</Tab>
                        <Tab className="nav-link" onClick={(e) => clickActive(e)}><Unlock />Register</Tab>
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
                                <button className="btn btn-primary" type="submit"  onClick={() => routeChange()}>Login</button>
                            </div>
                            <div className="form-footer">
                                <span>Or Login up with social platforms</span>
                                <ul className="social">
                                    <li><a className="fa fa-facebook" href=""/></li>
                                    <li><a className="fa fa-twitter" href=""/></li>
                                    <li><a className="fa fa-instagram" href=""/></li>
                                    <li><a className="fa fa-pinterest" href=""/></li>
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
                                <button className="btn btn-primary" type="submit" onClick={() => routeChange()}>Register</button>
                            </div>
                            <div className="form-footer">
                                <span>Or Sign up with social platforms</span>
                                <ul className="social">
                                    <li><a className="fa fa-facebook" href=""/></li>
                                    <li><a className="fa fa-twitter" href=""/></li>
                                    <li><a className="fa fa-instagram" href=""/></li>
                                    <li><a className="fa fa-pinterest" href=""/></li>
                                </ul>
                            </div>
                        </form>
                    </TabPanel>
                </Tabs>
            </>
        </div>
    )
}
export default withRouter(LoginTabset)