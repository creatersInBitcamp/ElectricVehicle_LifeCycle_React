import React, {useState} from 'react';
import {Breadcrumb,PostCode} from "../common";
import {Link} from "react-router-dom";
import axios from "axios"



export const Register = (props) =>  {

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [sex, setSex] = useState('')
    const [addr, setAddr] = useState('')
    const [addr2, setAddr2] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const [passwordConfirm, setPasswordConfirm] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [idOverlap, setIdOverlap] = useState(false)
    const [idConfirm, setIdConfirm] = useState(false)
    const [mustId, setMustId] = useState(false)
    const [mustPw, setMustPw] = useState(false)
    const [mustSex, setMustSex] = useState(false)

    const onChangeIdChk = (e) => {
        if(e.target.value !== ''){
            setUserId(e.target.value)
            axios.get(`http://localhost:8080/user/check/${e.target.value}`)
                .then((res) => {
                    if(res.data === false) {
                        setIdOverlap(res.data)
                        setIdConfirm(!res.data)
                    } else {
                        setIdOverlap(!res.data)
                        setIdConfirm(res.data)
                    }
                })
                .catch((error)=>{
                    console.log(error)
                })
        } else {
            setMustId('' === e.target.value)
        }

    }

    const onChangePasswordChk = (e) => {
        setMustPw('' === e.target.value)
        setPasswordError(password !== e.target.value)
        setPasswordConfirm(password === e.target.value)
        setPasswordCheck(e.target.value)
    }

    const onChangeSexChk = (e) => {
        setMustSex('성별' === e.target.value)
        setSex(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userInfo =  {
            userId: userId,
            password: password,
            name: name,
            ssn: year.concat("-",month,"-",day),
            sex: sex,
            addr: addr.concat(" ",addr2),
        }
        console.log(userInfo)
        axios.post(`http://localhost:8080/user/register`, userInfo)
            .then(res =>{
                res.data ? props.history.push(`${process.env.PUBLIC_URL}/pages/login`) : alert("회원가입이 실패했습니다.")
                console.log(res.data)
            })
            .catch(()=>{
                alert("통신실패")
            })
    }

        return (
            <div>
                <Breadcrumb title={'회원가입'}/>
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>회원가입</h3>
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">아이디</label>
                                                <input type="text" className="form-control" id={"userIdJs"}
                                                       onChange={onChangeIdChk} placeholder="아이디" required="" />
                                                <br/>
                                                {idOverlap && <div style={{color: 'red'}}>중복된 아이디입니다.</div>}
                                                {!mustId && idConfirm && <div style={{color: 'green'}}>가능한 아이디입니다.</div>}
                                                {mustId && <div style={{color: 'red'}}>반드시 필요한 항목입니다.</div>}
                                                <br/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">비밀번호</label>
                                                <input type="password" className="form-control"
                                                       onChange={(e)=>{setPassword(e.target.value)}} placeholder="비밀번호" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">비밀번호 재확인</label>
                                                <input type="password" className="form-control" value={passwordCheck}
                                                       onChange={onChangePasswordChk} placeholder="비밀번호 재확인" required="" />
                                                {!mustPw && passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
                                                {!mustPw && passwordConfirm && <div style={{color:'green'}}>비밀번호가 일치합니다.</div>}
                                                {mustPw && <div style={{color: 'red'}}>반드시 필요한 항목입니다.</div>}
                                                <br/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">이름</label>
                                                <input type="text" className="form-control"
                                                       onChange={(e)=>{setName(e.target.value)}} placeholder="이름" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-2">
                                                <label htmlFor="email">연도</label>
                                                <input type="text" className="form-control"
                                                       onChange={(e)=>{setYear(e.target.value)}} placeholder="년(4자)" required="" maxLength="4"/>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="email">월</label>
                                                <input type="text" className="form-control"
                                                       onChange={(e) => {setMonth(e.target.value)}} placeholder="월" required="" maxLength="2" />
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="email">일</label>
                                                <input type="text" className="form-control"
                                                       onChange={(e)=>{setDay(e.target.value)}} placeholder="일" required="" maxLength="2" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-1">
                                                <label htmlFor="email">성별</label>
                                                <select className="form-control"
                                                        onChange={onChangeSexChk} placeholder="성별" required="" >
                                                    <option>성별</option>
                                                    <option>남</option>
                                                    <option>여</option>
                                                </select>
                                                <br/>
                                                {mustSex && <div style={{color: 'red'}}>반드시 필요한 항목입니다.</div>}
                                                <br/><br/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">주소</label>
                                                <br/>
                                                <PostCode setAddress={(addr)=>(setAddr(addr))}/>
                                                <br/>
                                                <input type="text" value={addr} className="form-control"
                                                       placeholder="주소찾기로 검색해주세요." required="" readOnly/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">나머지 주소</label>
                                                <input type="text" className="form-control"
                                                       onChange={(e)=>{setAddr2(e.target.value)}} placeholder="나머지 주소는 직접입력해 주세요." required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/login`}>
                                                <button type="submit" className="btn btn-solid" onClick={handleSubmit} >가입하기</button>
                                                <button type="submit" className="btn btn-solid" >취소</button>
                                            </Link>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
}

export default Register