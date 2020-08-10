import React, {useState} from 'react'
import {AdminBreadcrumb, Image} from '../common';

const list_menuTypes = {REQUEST: 'list_menu/REQUEST'}
const list_menuReducer = ( state={}, action ) => {
    switch (action.type) {
        case list_menuTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Notice = () => {

    const [picture, setPicture] = useState([])

    const getPicture = (picture) => {
        setPicture(picture)
    }
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

export default list_menuReducer
