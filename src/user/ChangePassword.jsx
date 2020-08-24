import React, {useState} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const ChangePassword = (props) => {

    const [session] = useState(JSON.parse(sessionStorage.getItem("user")))
    const[password, setPassword] = useState('')
    const[newPassword, setNewPassword] = useState('')
    const[rePassword, setRePassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [mustNowPw, setMustNowPw] = useState(false)
    const [mustPw, setMustPw] = useState(false)

    const history = useHistory()

    const passwordChk = (e) => {
        setMustNowPw('' === e.target.value)
        setPassword(e.target.value)
    }

    const newPasswordChk = (e) =>{
        setMustPw('' === e.target.value)
        setPasswordError(newPassword !== e.target.value)
        setPasswordConfirm(newPassword === e.target.value)
        setRePassword(e.target.value)
    }

    const changePassword = (e) => {
        e.preventDefault()

        if(session.password === password ) {
            const userInfo = {
                userId : session.userId,
                password : newPassword
            }
            axios.post(`http://localhost:8080/user/changePassword`,userInfo)
                .then((res)=>{
                    if(res.data){
                        alert("다시 로그인해주세요!")
                        history.push("/")
                        sessionStorage.clear()
                        window.location.reload()
                    } else {
                        alert("비밀번호 변경 실패")
                    }
                })
                .catch(()=>{
                    alert("비밀번호 변경 실패")
                })
        } else {
            alert("현재 비밀번호가 맞지 않습니다.")
        }
    }

    return (
        <>
            <section className="pwd-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <h2>비밀번호 변경하기</h2>
                            <form className="theme-form" name='form'>
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <label htmlFor="email">현재 비밀번호</label>
                                        <input type="password" className="form-control"
                                        onChange={passwordChk}
                                        />
                                        {mustNowPw && <div style={{color: 'red'}}>반드시 필요한 항목입니다.</div>}
                                        <br/>
                                        <label htmlFor="email">변경한 비밀번호</label                                        >
                                        <input type="password" className="form-control"
                                        onChange={(e)=>{setNewPassword(e.target.value)}}
                                        />
                                        <br/>
                                        <label htmlFor="email">변경할 비밀번호 재확인</label>
                                        <input type="password" className="form-control"
                                        onChange={newPasswordChk}
                                        />
                                        {!mustPw && passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
                                        {!mustPw && passwordConfirm && <div style={{color:'green'}}>비밀번호가 일치합니다.</div>}
                                        {mustPw && <div style={{color: 'red'}}>반드시 필요한 항목입니다.</div>}
                                        <br/>
                                    </div>
                                    <button type='button' className="btn btn-solid" onClick={changePassword} >비밀번호 변경하기</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChangePassword;