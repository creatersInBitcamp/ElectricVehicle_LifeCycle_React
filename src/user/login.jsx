import React from 'react';

import Breadcrumb from "../common/breadcrumb";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const Login = () => {

        return (
            <div>
                <Breadcrumb title={'Login'}/>
                
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email"
                                                   required="" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" className="form-control" id="review"
                                                   placeholder="Enter your password" required="" />
                                        </div>
                                        <a href="#" className="btn btn-solid">Login</a>
                                        <Link to={`${process.env.PUBLIC_URL}/admin/login`}><Button>Admin Login</Button></Link>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create A Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/register`}><a className="btn btn-solid">Create an Account</a></Link><br/><br/><br/>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/forgot`}><a className="btn btn-solid">Forgot Password</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
}

export default Login