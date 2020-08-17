import React, {useEffect, useState} from 'react'
import {AdminBreadcrumb} from '../common'
import axios from "axios";
import {Table} from "../item";

const usedCarTypes = {REQUEST: 'usedCar/REQUEST'}
const usedCarReducer = ( state={}, action ) => {
    switch (action.type) {
        case usedCarTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const UsedCar = () => {
    const[data,setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/user/usedCar`)
            .then((res)=>{
                setData(res.data)
            })
            .catch(()=>{
                alert("통신실패")
            })
    },[])

    const columns = [
        {
            title:'자동차명', field: 'carName'
        },
        {
            title: '소유주', field: 'name'
        },
        {
            title: '소유주 아이디', field: 'userId'
        },
        {
            title: '가격(만원)', field: 'price'
        },
        {
            title: '마일리지', field: 'mileage'
        },
    ]
        return (
            <>
                <AdminBreadcrumb title="중고차 현황" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>중고차 관리</h5>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                        <Table title={"중고차현황"} data={data} columns={columns} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default usedCarReducer
