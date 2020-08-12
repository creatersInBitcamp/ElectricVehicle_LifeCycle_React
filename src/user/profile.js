import React, {useState} from 'react'

import designer from '../assets/images/dashboard/designer.jpg';
import {Breadcrumb} from "../common";

export const Profile = () => {
    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birth, setBirth] = useState('')
    const [addr, setAddr] = useState('')

        return (
            <>
                <Breadcrumb title={'Profile'}/>
                 <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="profile-details text-center">
                                    <img src={designer} alt="" className="img-fluid img-90 rounded-circle blur-up lazyloaded" />
                                    <h5 className="f-w-600 f-16 mb-0">이름입니다.</h5>
                                    <span>아이디입니다.</span>
                                </div>
                                <hr />
                                <div className="project-status">
                                    <h5 className="f-w-600 f-16">내 차</h5>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>Performance <span className="pull-right">80%</span></h6>
                                            <div className="progress sm-progress-bar">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>Overtime <span className="pull-right">60%</span></h6>
                                            <div className="progress sm-progress-bar">
                                                <div className="progress-bar bg-secondary" role="progressbar" style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>Leaves taken <span className="pull-right">50%</span></h6>
                                            <div className="progress sm-progress-bar">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card profile-card">
                            <div className="card-body">
                                <div className="tab-pane fade show active">
                                    <h5 className="f-w-600 f-16">마이페이지</h5>
                                    <div className="table-responsive profile-table">
                                        <table className="table table-responsive">
                                            <tbody>
                                            <tr>
                                                <td>이름</td>
                                                <td>John</td>
                                            </tr>
                                            <tr>
                                                <td>이메일</td>
                                                <td>johndeo@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>성별</td>
                                                <td>Male</td>
                                            </tr>
                                            <tr>
                                                <td>전화번호</td>
                                                <td>2124821463</td>
                                            </tr>
                                            <tr>
                                                <td>생년월일</td>
                                                <td>Dec, 15 1993</td>
                                            </tr>
                                            <tr>
                                                <td>주소</td>
                                                <td>USA</td>
                                            </tr>
                                            <button>비밀번호 변경</button>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
}

export default Profile
