import React, {useState} from 'react';
import emailjs from 'emailjs-com'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

export const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [hideButton, setHideButton] = useState(false)

    const history = useHistory()

    const sendEmail = (e) => {
        e.preventDefault()
        if(email !== ''){
            setHideButton(true)
            axios.get(`http://localhost:8080/user/sendPassword/${email}`)
                .then((res)=>{
                    const info = {
                        email : email,
                        password: res.data
                    }
                    emailjs.send('kwakky1@gmail.com','template_6MwZcBCh',info,'user_hmTOnrjGGf2wvM7F3cJKY')
                        .then((res)=> {
                            history.push('/pages/login')
                            alert("임시 비밀번호가 발급되었습니다.")
                        }, () => {
                            alert("이메일정보가 없습니다.")
                            window.location.reload()
                        })

                })
                .catch(()=>{
                    alert("이메일 정보가 없습니다.")
                    window.location.reload()
                })
        } else {
            alert("이메일을 입력해주세요!")
        }


    }

        return (
            <>
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h2> 이메일은 100회까지만 가능합니다.</h2>
                                <h2>Forget Your Password</h2>
                                <form className="theme-form" >
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <input type="email" className="form-control" name='email' onChange={(e)=>{setEmail(e.target.value)}}
                                                   placeholder="Enter Your Email"/>

                                        </div>
                                        <button type='button' onClick={sendEmail} className="btn btn-solid" hidden={hideButton} >이메일 보내기</button>
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