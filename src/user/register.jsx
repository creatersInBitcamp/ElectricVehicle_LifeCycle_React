import React, {useState} from 'react';
import Breadcrumb from "../common/breadcrumb";
import PostCode from "../common/postCode";
import {Link} from "react-router-dom";



const Register = () =>  {
    const [userInfo, setUserInfo] = useState([])
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [sex, setSex] = useState('')
    const [addr, setAddr] = useState('')
    const [addr2, setAddr2] = useState('')

    const findInfo = (e) => {
        e.preventDefault()
        setUserInfo({
            userId: userId,
            password: password,
            name: name,
            ssn: year.concat("-",month,"-",day),
            sex: sex,
            address: addr.concat(" ",addr2)
        })
        console.log(userInfo)
    }

    const setAddress = (addr) =>{
        setAddr(addr)
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
                                                <input type="text" className="form-control" id="fname"
                                                       onChange={(e)=>{setUserId(e.target.value)}} placeholder="아이디" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">비밀번호</label>
                                                <input type="password" className="form-control" id="fname"
                                                       onChange={(e)=>{setPassword(e.target.value)}} placeholder="비밀번호" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">비밀번호 재확인</label>
                                                <input type="password" className="form-control" id="fname"
                                                       placeholder="비밀번호 재확인" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">이름</label>
                                                <input type="text" className="form-control" id="fname"
                                                       onChange={(e)=>{setName(e.target.value)}} placeholder="이름" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-1">
                                                <label htmlFor="email">연도</label>
                                                <input type="text" className="form-control" id="fname"
                                                       onChange={(e)=>{setYear(e.target.value)}} placeholder="년(4자)" required="" maxLength="4"/>
                                            </div>
                                            <div className="col-md-1">
                                                <label htmlFor="email">월</label>
                                                <input type="text" className="form-control" id="fname"
                                                       onChange={(e)=>{setMonth(e.target.value)}}placeholder="월" required="" maxLength="2" />
                                            </div>
                                            <div className="col-md-1">
                                                <label htmlFor="email">일</label>
                                                <input type="text" className="form-control" id="fname"
                                                       onChange={(e)=>{setDay(e.target.value)}} placeholder="일" required="" maxLength="2" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-1">
                                                <label htmlFor="email">성별</label>
                                                <select type="text" className="form-control" id="fname"
                                                        onChange={(e)=>{setSex(e.target.value)}} placeholder="성별" required="" >
                                                    <option>성별</option>
                                                    <option>남</option>
                                                    <option>여</option>
                                                </select>
                                                <br/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">주소</label>
                                                <br/>
                                                <PostCode setAddress={setAddress}/>
                                                <br/>
                                                <br/>
                                                <input type="text" value={addr} className="form-control" id="fname"
                                                       placeholder="주소찾기로 검색해주세요." required="" readOnly/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">나머지 주소</label>
                                                <input type="text" className="form-control" id="fname"
                                                       onChange={(e)=>{setAddr2(e.target.value)}} placeholder="나머지 주소는 직접입력해 주세요." required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/login`}><button className="btn btn-solid" onClick={findInfo}>가입하기</button></Link>
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