import React from 'react';

const MyAccount2 = ({user}) => {
    const {name, userId, email, sex, phoneNumber, birthDate, addr, profileImage} = user
    return (
        <>
            <div className="row">
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="profile-details text-center">
                                <img src={profileImage} alt="" className="img-fluid img-90 rounded-circle blur-up lazyloaded" />
                                <h5 className="f-w-600 f-16 mb-0">{name}</h5>
                                <span>ID : {userId}</span>
                            </div>
                            <hr />
                            <div className="project-status">
                                <h5 className="f-w-600 f-16">자기소개</h5>
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
                                            <td>{name}</td>
                                        </tr>
                                        <tr>
                                            <td>이메일</td>
                                            <td>{email}</td>
                                        </tr>
                                        <tr>
                                            <td>성별</td>
                                            <td>{sex}</td>
                                        </tr>
                                        <tr>
                                            <td>전화번호</td>
                                            <td>{phoneNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>생년월일</td>
                                            <td>{birthDate}</td>
                                        </tr>
                                        <tr>
                                            <td>주소</td>
                                            <td>{addr}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccount2;