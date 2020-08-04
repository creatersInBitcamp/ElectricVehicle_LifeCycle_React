import React from 'react'
import {Breadcrumb} from '../common';
import data from '../../assets/data/listMenu';
import {Datatable} from '../common'

const list_menuTypes = {REQUEST: 'list_menu/REQUEST'}
const list_menuRequest = action => ({type: list_menuTypes.REQUEST, payload: action.payload})
const list_menuReducer = ( state={}, action ) => {
    switch (action.type) {
        case list_menuTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Notice = () => {
        return (
            <>
                <Breadcrumb title="공지사항" parent="Menu" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>공지사항</h5>
                                </div>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                    <Datatable
                                            multiSelectOption={true}
                                            myData={data}
                                            pageSize={6}
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

export default Notice
