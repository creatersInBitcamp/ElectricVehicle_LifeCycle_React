import React, {useState} from 'react';
import {Breadcrumb} from "../common";
import emailjs from 'emailjs-com'
import axios from 'axios'

export const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const findPassword = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:8080/user/sendPassword/${email}`)
            .then((res)=>{
                if(res.data !== ''){
                    alert("이메일정보가 확인되었습니다. 이메일보내기를 눌러주세요!")
                    setPassword(res.data)
                } else {
                    alert("이메일 정보가 없습니다.")
                }
            })
            .catch(()=>{
                alert("통신실패")
                window.location.reload()
            })
    }

    const sendEmail = (e) => {
        if(password !== '') {
            emailjs.sendForm('kwakky1@gmail.com','template_6MwZcBCh',e.target,'user_hmTOnrjGGf2wvM7F3cJKY')
                .then((res)=> {
                    alert("메일을 확인하세요")
                }, (error) => {
                    alert(error)
                })
        } else {
            alert("이메일 정보가 없습니다.")
        }
    }

        return (
            <>
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h2>Forget Your Password</h2>
                                <form className="theme-form" onSubmit={sendEmail} name='form'>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <input type="email" className="form-control" name='email' onChange={(e)=>{setEmail(e.target.value)}}
                                                   placeholder="Enter Your Email"/>

                                        </div>
                                        <input type="hidden" value={password} name='password'/>
                                        <button type='button' className="btn btn-solid" onClick={findPassword}>이메일 확인</button>
                                        <button type='submit' className="btn btn-solid" >이메일 보내기</button>
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