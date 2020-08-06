import React from 'react';
import {Home} from 'react-feather';
import {Link} from 'react-router-dom'

const breadcrumbTypes = {REQUEST: 'breadcrumb/REQUEST'}
const breadcrumbReducer = (state={}, action) => {
    switch (action.type) {
        case breadcrumbTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const AdminBreadcrumb = (props) => {

        return (
                <div className="container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="page-header-left">
                                    <h3>{props.title}
                                    <small>Admin Page</small>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ol className="breadcrumb pull-right">
                                    <li className="breadcrumb-item">
                                    <Link to="mutikart-admin/dashboard">
                                            <Home />
                                    </Link>
                                    </li>
                                    <li className="breadcrumb-item active">{props.title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default breadcrumbReducer
