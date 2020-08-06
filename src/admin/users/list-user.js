import React, {useEffect, useState} from 'react';
import {AdminBreadcrumb} from '../common';
import data from '../../assets/data/listUser';
import {Datatable} from '../common'
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux";

const list_userTypes = {REQUEST: 'list_user/REQUEST'}
const list_userRequest = action => ({type: list_userTypes.REQUEST, payload: action})
const list_userReducer = ( state= {}, action ) => {
    switch (action.type) {
        case list_userTypes.REQUEST: return {payload: action.payload}
        default: return state
    }
}

export const userThunk = () => (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res =>{
                dispatch(list_userRequest(res.data))
            })
            .catch(error => {
                throw error.message
            })
}

export const List_user = () => {
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const  user = useSelector(state=> state.list_userReducer)

    useEffect(()=>{
        /*dispatch(userThunk())*/
        },[user])

        return (
            <>
                <AdminBreadcrumb title="사용자 현황" parent="Users" />
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
