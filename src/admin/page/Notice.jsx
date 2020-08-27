import React, {useEffect, useState} from 'react'
import {AdminBreadcrumb} from '../common';
import {Image, Table} from '../item'
import axios from "axios";
import {Link} from "react-router-dom";
import {AWS_PATH} from '../../api/key'

const noticeTypes = {REQUEST: 'notice/REQUEST'}
const noticeReducer = ( state={}, action ) => {
    switch (action.type) {
        case noticeTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

const columns = [
    {title:'ID', field:'postId', editable: 'never'},
    {title:'제목', field:'title', editable: 'never'},
    {title:'추천', field:'recommendation', editable: 'never'},
    {title:'신고', field:'report', editable: 'never'},
    {title:'조회', field:'hits', editable: 'never'},
    {title:'작성일자', field:'date', editable: 'never'}
]

export const Notice = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`${AWS_PATH}/posts/notice/notice`)
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>{
                console.log(err.status)
            })
    },[])

    const editable = {
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    const dataUpdate = [...data]
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData
                    setData([...dataUpdate])
                    resolve()
                    axios.post(`${AWS_PATH}/posts/allUpdate`, [...dataUpdate])
                        .then((res) => {
                        })
                        .catch(() => {
                            alert("통신실패")
                        })
                }, 1000)
            }),
        onDelete: (oldData) =>
            new Promise((resolve) =>{
                setTimeout(()=>{
                    resolve()
                    axios.get(`${AWS_PATH}/posts/delete/${oldData.postId}`)
                        .then((res)=>{
                            console.log(res.status)
                        })
                        .catch((err)=>{
                            console.log(err.status)
                        })
                }, 1000)
            })
    }
        return (
            <>
                <AdminBreadcrumb title="공지사항" parent="Menu" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>배너 교체</h5>
                                    <h5>상단 배너, 1.gif 이름으로 업로드, 하단 배너 2.jpg로 변경해야 반영됩니다.</h5>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                    </div>
                                    <Image path={'imgUpload'} setImgLink={(imgLink)=>{alert(imgLink)}}/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <Link to={`${process.env.PUBLIC_URL}/board/input/notice`}><button className="btn btn-solid">글쓰기</button></Link>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                        <Table
                                         title={"공지사항"}
                                         columns={columns}
                                         data={data}
                                         editable={editable}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default noticeReducer
