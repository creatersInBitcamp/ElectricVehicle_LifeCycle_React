import React from 'react'
import {AdminBreadcrumb} from '../common';

const ordersTypes = {REQUEST: 'orders/REQUEST'}
const ordersReducer = ( state, action ) => {
    switch (action.type) {
        case ordersTypes.REQUEST: return {...state, payload: action.payload}
        default: return null
    }
}

export const Orders = () => {
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ordersReducer
