import React, {useEffect, useState} from 'react'
import {AdminBreadcrumb} from '../common';
import Table from "../item/Table";
import axios from 'axios'

const ordersTypes = {REQUEST: 'orders/REQUEST'}
const ordersReducer = ( state, action ) => {
    switch (action.type) {
        case ordersTypes.REQUEST: return {...state, payload: action.payload}
        default: return null
    }
}

export const Orders = () => {
    const [data, setData] = useState([])
    //purchasingMethod, purchaseTime, purchasePrice, color, userSeq, eccarId;
    const columns = [
        {title:'OrderID', field:'orderId'},
        {title:'주문자', field: 'userId'},
        {title:'차량명', field:'carName'},
        {title:'색상', field:'color'},
        {title:'방식', field:'purchasingMethod'},
        {title:'가격', field:'purchasePrice'},
        {title:'요청시간', field:'purchaseTime'},
    ]
    useEffect(()=>{
        axios.get('http://localhost:8080/purchases/getall')
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>{
                console.log(err.status)
            })
    },[])
        return (
            <>
                <AdminBreadcrumb title="판매현황" parent="Sales" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>주문</h5>
                                </div>
                                <div className="card-body order-datatable">
                                    <Table title={"주문요청"} columns={columns} data={data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ordersReducer
