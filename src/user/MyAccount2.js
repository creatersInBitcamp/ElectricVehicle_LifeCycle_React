import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const MyAccount2 = ({user}) => {
    const {userSeq, name, userId, email, sex, phoneNumber, birthDate, addr, profileImage, profileText} = user

    const [modify, setModify] = useState(false)
    const [modiImage, setModiImage] = useState(profileImage)
    const [modiText, setModiText] = useState(profileText)
    const [modiEmail, setModiEmail] = useState(email)
    const [modiPhone, setModiPhone] = useState(phoneNumber)
    const [modiAddr, setModiAddr] = useState(addr)

    const history = useHistory()

    const onModify = (e) => {
        e.preventDefault()
        const modiUser = {
            userSeq: userSeq,
            name: name,
            userId: userId,
            email: modiEmail,
            sex: sex,
            phoneNumber: modiPhone,
            birthDate: birthDate,
            addr: modiAddr,
            profileImage: modiImage,
            profileText: modiText,
        }
        console.log(modiUser)
        axios.post('http://localhost:8080/user/updateOne', modiUser)
            .then((res)=>{
                if(res.data){
                    alert('SUCCESS')
                    window.location.reload()
                } else {
                    alert('FAIL')
                }
            })
            .catch((err)=>{
                console.log(`프로필 수정 에러 ${err.status}`)
            })
    }

    return (
        <>
            {(modify === false)?
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
                                            {profileText}
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
                        <button className="btn btn-outline-danger" onClick={()=>setModify(true)}>프로필 수정</button>
                    </div>
                </div>
                :
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="profile-details text-center">
                                    <img src={profileImage} alt="" className="img-fluid img-90 rounded-circle blur-up lazyloaded" />
                                    <input type="text" value={modiImage} onChange={(e)=>setModiImage(e.target.value)}/>
                                    {modiImage}
                                    <h5 className="f-w-600 f-16 mb-0">{name}</h5>
                                    <span>ID : {userId}</span>
                                </div>
                                <hr />
                                <div className="project-status">
                                    <h5 className="f-w-600 f-16">자기소개</h5>
                                    <div className="media">
                                        <div className="media-body">
                                            <input type="text" value={modiText} onChange={(e)=>setModiText(e.target.value)}/>
                                            {modiText}
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
                                                <td><input type="text" value={modiEmail} onChange={(e)=>setModiEmail(e.target.value)}/></td>
                                            </tr>
                                            <tr>
                                                <td>성별</td>
                                                <td>{sex}</td>
                                            </tr>
                                            <tr>
                                                <td>전화번호</td>
                                                <td><input type="text" value={modiPhone} onChange={(e)=>setModiPhone(e.target.value)}/></td>
                                            </tr>
                                            <tr>
                                                <td>생년월일</td>
                                                <td>{birthDate}</td>
                                            </tr>
                                            <tr>
                                                <td>주소</td>
                                                <td><input type="text" value={modiAddr} onChange={(e)=>setModiAddr(e.target.value)}/></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-outline-danger" onClick={onModify}>저장</button>
                        <button className="btn btn-outline-danger" onClick={()=>setModify(false)}>취소</button>
                    </div>
                </div>
            }
        </>
    );
};

export default MyAccount2;