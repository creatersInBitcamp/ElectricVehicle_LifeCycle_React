import React, {useEffect, useState} from 'react';
import {AdminBreadcrumb} from '../common';
import {Table} from '../item'
import axios from "axios";
const userReducer = ( state= {}, action ) => {
    switch (action.type) {
        default: return state
    }
}

export const User = () => {

    const[data,setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/user/findAll`)
            .then((res)=>{
                setData(res.data)
            })
            .catch(()=>{
                alert("통신실패")
            })
    },[])

    const columns = [
        {
            title:'아이디', field:'userId', editable: 'never'
        },
        {
            title:'이미지', field: 'profileImage', editable: 'never',
            render: rowData => <img src={rowData.profileImage} style={{width: 50, borderRadius: '50%'}} alt="" />
        },
        {
            title:'이름', field:'name', editable: 'never'
        },
        {
            title:'이메일', field:'email', editable: 'never'
        },
        {
            title:'등록날짜', field:'registerDate', editable: 'never'
        },
        {
            title:'주소', field:'addr', editable: 'never'
        },
        {
            title:'등급', field:'grade'
        },
        {
            title:'차단일자', field:'banDate', editable: 'never'
        }
    ]
        return (
            <>
                <AdminBreadcrumb title="사용자 현황" parent="Users" />
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>사용자 정보</h5>
                        </div>
                        <div className="card-body">
                            <div className="clearfix"/>
                            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                                <Table title={"사용자"} data={data} columns={columns} setData={(d)=>setData(d)} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default userReducer
