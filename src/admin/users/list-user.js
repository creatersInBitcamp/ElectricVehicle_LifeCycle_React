import React, { Component, Fragment } from 'react';
import {Breadcrumb} from '../common';
import data from '../../assets/data/listUser';
import {Datatable} from '../common'

const list_userTypes = {REQUEST: 'list_user/REQUEST'}
const list_userRequest = action => ({type: list_userTypes.REQUEST, payload: action.payload})
const list_userReducer = ( state= {}, action ) => {
    switch (action.type) {
        case list_userTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const List_user = () => {
        return (
            <>
                <Breadcrumb title="사용자 현황" parent="Users" />
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>사용자 정보</h5>
                        </div>
                        <div className="card-body">
                            <div className="clearfix"></div>
                            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                                <Datatable
                                    multiSelectOption={true}
                                    myData={data}
                                    pageSize={10}
                                    pagination={true}
                                    class="-striped -highlight"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default list_userReducer
