import React from 'react';
import Breadcrumb from "../common/breadcrumb";

const ForgetPassword = () => {

        return (
            <div>
                <Breadcrumb title={'forget password'}/>
                
                
                {/*Forget Password section*/}
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h2>Forget Your Password</h2>
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" id="email"
                                                   placeholder="Enter Your Email" required="" />
                                        </div>
                                        <a className="btn btn-solid" onClick={()=> alert(`email 전송주소 : ${document.getElementById('email').value}`)}>Submit</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
}

export default ForgetPassword