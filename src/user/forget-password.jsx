import React, {useState} from 'react';
import Breadcrumb from "../common/breadcrumb";
import emailjs from 'emailjs-com'

const ForgetPassword = () => {
    const [password, setPassword] = useState('1234')
    const sendEmail = (e) => {

        e.preventDefault()
        emailjs.sendForm('kwakky1@gmail.com','template_6MwZcBCh',e.target,'user_hmTOnrjGGf2wvM7F3cJKY')
            .then((res)=> {
                alert("메일을 확인하세요")
            }, (error) => {
                alert(error)
        })

    }
        return (
            <>
                <Breadcrumb title={'forget password'}/>
                {/*Forget Password section*/}
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h2>Forget Your Password</h2>
                                <form className="theme-form" onSubmit={sendEmail}>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <input type="email" className="form-control" name='user_email'
                                                   placeholder="Enter Your Email" />

                                        </div>
                                        <input type="hidden" name='test' value={password}/>
                                        <button type='submit' className="btn btn-solid" >Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
}

export default ForgetPassword