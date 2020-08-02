import React from 'react'
import {Breadcrumb} from '../common'
import data from '../../assets/data/listPages';
import {Datatable} from '../common';

const usedCarTypes = {REQUEST: 'usedCar/REQUEST'}
const usedCarRequest = action => ({type: usedCarTypes.REQUEST, payload: action.payload})
const usedCarReducer = ( state={}, action ) => {
    switch (action.type) {
        case usedCarTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const UsedCar = () => {
        return (
            <>
                <Breadcrumb title="중고차 현황" parent="Pages" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>중고차 관리</h5>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                        <Datatable
                                            multiSelectOption={true}
                                            myData={data}
                                            pageSize={7}
                                            pagination={false}
                                            class="-striped -highlight"
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

export default usedCarReducer
