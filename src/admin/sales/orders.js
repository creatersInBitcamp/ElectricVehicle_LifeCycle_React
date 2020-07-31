import React from 'react'
import {Breadcrumb} from '../common';
import data from '../../assets/data/orders';
import {Datatable} from '../common'

const ordersTypes = {REQUEST: 'orders/REQUEST'}
const ordersRequest = action => ({type: ordersTypes.REQUEST, payload: action.payload})
const ordersReducer = ( state, action ) => {
    switch (action.type) {
        case ordersTypes.REQUEST: return {...state, payload: action.payload}
        default: return null
    }
}

export const Orders = () => {
        return (
            <>
                <Breadcrumb title="판매현황" parent="Sales" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>주문</h5>
                                </div>
                                <div className="card-body order-datatable">
                                <Datatable
                                            multiSelectOption={false}
                                            myData={data}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ordersReducer
