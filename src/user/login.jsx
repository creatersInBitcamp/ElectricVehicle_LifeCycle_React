import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Breadcrumb from "../common/breadcrumb";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";

const ADMIN_CHECK = 'ADMIN_CHECK'
const loginAction = admin =>({type: ADMIN_CHECK, check: admin})

export const loginReducer = (state=false, action)=>{
    switch (action.type) {
        case ADMIN_CHECK: return {check: action.check}
        default: return state
    }
}


const Login = (props) => {

    const [userId, setUserid] = useState('')
    const [password, setPassword] = useState('')
    const [adminCheck,setAdminCheck] = useState(false);

    const result = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        setAdminCheck(result.check)
    },[result])

    const routeChange = (e) => {
        e.preventDefault()
        console.log(!result.check)
        dispatch(loginAction(!result.check))
        props.history.push(`${process.env.PUBLIC_URL}/admin/dashboard`);
    }
    const login = (e) => {
        e.preventDefault()
        const userInfo = {
            userId : userId,
            password : password
        }
        axios.post(`http://localhost:8080/user/login`, userInfo)
            .then((res)=>{
                res.status === 200 ? props.history.push(`${process.env.PUBLIC_URL}/`) : alert("아이디, 비밀번호를 확인하세요!")
            })
            .catch(function (error) {
            if (error.response) {
                // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log(error.request);
            }
            else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
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
                                            <input type="text" className="form-control" id="email" placeholder="ID"
                                                   required="" onChange={(e)=>{setUserid(e.target.value)}}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">비밀번호</label>
                                            <input type="password" className="form-control" id="review"
                                                   placeholder="Password" required="" onChange={(e)=>{setPassword(e.target.value)}}/>
                                        </div>
                                        <button className="btn btn-solid" onClick={login}>로그인</button>
                                        <Button onClick={routeChange}>Admin Login</Button>
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
                    </div>
                </section>

            </div>
        )
}

export default Login