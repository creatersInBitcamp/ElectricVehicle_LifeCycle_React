import React, {useState} from 'react'
import {AdminBreadcrumb} from '../common';
import {Image} from '../item'

const noticeTypes = {REQUEST: 'notice/REQUEST'}
const noticeReducer = ( state={}, action ) => {
    switch (action.type) {
        case noticeTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Notice = () => {

        return (
            <>
                <AdminBreadcrumb title="공지사항" parent="Menu" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>공지사항</h5>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                    </div>
                                    <Image/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default noticeReducer
