import React from 'react'
import {AdminBreadcrumb} from '../common';

const communityTypes = {REQUEST: 'community/REQUEST'}
const communityReducer = ( state={}, action ) => {
    switch (action.type) {
        case communityTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Community = () => {
        return (
            <>
                <AdminBreadcrumb title="커뮤니티" parent="Community" />
                <div className="container-fluid bulk-cate">
                    <div className="card">
                        <div className="card-header">
                            <h5>Community File List</h5>
                        </div>
                        <div className="card-body">
                            <div id="batchDelete" className="category-table media-table coupon-list-delete">
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default communityReducer
