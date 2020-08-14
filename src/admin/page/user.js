import React, {useEffect, useState} from 'react';
import {AdminBreadcrumb} from '../common';
import data from '../../assets/data/listUser';
import {Datatable} from '../item'
import Table from '../item/table'
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux";

const userTypes = {REQUEST: 'list_user/REQUEST'}
const userRequest = action => ({type: userTypes.REQUEST, payload: action})
const userReducer = ( state= {}, action ) => {
    switch (action.type) {
        case userTypes.REQUEST: return {payload: action.payload}
        default: return state
    }
}

export const userThunk = () => (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res =>{
                dispatch(userRequest(res.data))
            })
            .catch(error => {
                throw error.message
            })
}

export const User = () => {
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const  user = useSelector(state=> state.userReducer)

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
                                <Table/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default userReducer
