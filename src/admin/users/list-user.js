import React, { Component, Fragment } from 'react';
import {Breadcrumb} from '../common';
import data from '../../assets/data/listUser';
import {Datatable} from '../common'
import axios from 'axios'

const list_userTypes = {REQUEST: 'list_user/REQUEST'}
const list_userRequest = action => ({type: list_userTypes.REQUEST, payload: action.payload})
const list_userReducer = ( state= {}, action ) => {
    switch (action.type) {
        case list_userTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

const userThunk = () => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response =>{
                const users = response.data
                dispatch(list_userRequest(users))
            })
            .catch(error => {
                const errorMsg = error.message
            })
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
                            <div className="clearfix"/>
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
