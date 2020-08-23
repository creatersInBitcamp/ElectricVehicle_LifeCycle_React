import React, {useState} from 'react';
import axios from 'axios'
import {Breadcrumb} from "../common";
import {Link} from "react-router-dom";

const ADMIN_CHECK = 'ADMIN_CHECK'

export const loginReducer = (state=false, action)=>{
    switch (action.type) {
        case ADMIN_CHECK: return {check: action.check}
        default: return state
    }
}


export const Login = (props) => {

    const [userId, setUserid] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()
        const userInfo = {
            userId : userId,
            password : password
        }
        if(userId && password) {
            axios.post(`http://localhost:8080/user/login`, userInfo)
                .then((res) => {
                    sessionStorage.setItem("user", JSON.stringify(res.data))
                    if(res.data.grade === 0 || res.data.grade === 9 ) {
                        res.status === 200 ? props.history.push(`${process.env.PUBLIC_URL}/`) : alert("아이디, 비밀번호를 확인하세요!")
                        window.location.reload()
                    } else {
                        window.location.reload()
                        alert("당신의 계정은 차단되었습니다.")
                    }

                })
                .catch(() => {
                    alert('아이디, 비밀번호를 다시 확인하세요!')
                    window.location.reload()
                });
        } else {
            alert("아이디와 비밀번호를 입력해주세요.")
        }

    }
    const on20 = (e) => {
        e.preventDefault()
        setUserid('16922')
        setPassword('16922')
    }
    const on30 = (e) => {
        e.preventDefault()
        setUserid('6888')
        setPassword('6888')
    }
    const on40 = (e) => {
        e.preventDefault()
        setUserid('8905')
        setPassword('8905')
    }
    const on50 = (e) => {
        e.preventDefault()
        setUserid('27954')
        setPassword('27954')
    }
    const onAdmin = (e) => {
        e.preventDefault()
        setUserid('tedd911')
        setPassword('1234')
    }
        return (
            <div>
                <Breadcrumb title={'Login'}/>
                
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>로그인</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-group">
                                            <label htmlFor="email">아이디</label>
                                            <input type="text" className="form-control" id="email" placeholder="ID" value={userId}
                                                   required="" onChange={(e)=>{setUserid(e.target.value)}}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">비밀번호</label>
                                            <input type="password" className="form-control" id="review" value={password}
                                                   placeholder="Password" required="" onChange={(e)=>{setPassword(e.target.value)}}/>
                                        </div>
                                        <button className="btn btn-solid" onClick={login}>로그인</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>신규 가입자</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">회원가입</h6>
                                    <p> 환영합니다. 현재 판매되고 있는 신규전기차, 중고전기차, 폐차방법 등을 확인하실 수 있고 차량에 맞는 충전소 위치를 찾아드립니다.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/register`}><button className="btn btn-solid">회원가입</button></Link><br/><br/><br/>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/forgot`}><button className="btn btn-solid">비밀번호찾기</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-outline-primary" onClick={on20}>20대</button>
                                <button className="btn btn-outline-primary" onClick={on30}>30대</button>
                                <button className="btn btn-outline-primary" onClick={on40}>40대</button>
                                <button className="btn btn-outline-primary" onClick={on50}>50대</button>
                            </div>
                            <div className="col">
                                <button className="btn btn-outline-info" onClick={onAdmin}>관리자</button>
                            </div>
                            <div className="col"/>
                        </div>
                    </div>
                </section>

            </div>
        )
}

export default loginReducer