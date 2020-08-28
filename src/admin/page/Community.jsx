import React, {useEffect, useState} from 'react'
import {AdminBreadcrumb} from '../common';
import axios from "axios";
import {useDispatch} from "react-redux";
import {BACK_PATH} from "../../api/key";
import {Table} from "../item";
const communityTypes = {REQUEST: 'community/REQUEST'}

const communityReducer = ( state={}, action ) => {
    switch (action.type) {
        case communityTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const communityThunk = () => (dispatch) => {
    axios.get(`http://${BACK_PATH}/posts/getall`)
        .then(res =>{
            // dispatch(userRequest(res.data))
        })
        .catch(error => {
            throw error.message
        })
}


export const Community = () => {
    const dispatch = useDispatch()
    const [posts, setPosts] = useState([])
    // const  usposts = useSelector(state=> state.communityReducer)

    useEffect(() => {
        axios.get(`http://${BACK_PATH}/posts/getall`)
            .then((res) => {
                setPosts(res.data)
            })
            .catch(()=>{
                alert("통신실패")
            })
    },[posts])
    const columns = [
        {
            title:'아이디', field:'postId', editable: 'never'
        },
        {
            title:'제목', field:'title', editable: 'never'
        },
        {
            title:'추천수', field:'recommendation', editable: 'never'
        },
        {
            title:'신고수', field:'report', editable: 'never'
        },
        {
            title:'조회수', field:'hits', editable: 'never'
        },
        {
            title:'카테고리', field:'category'
        },
        {
            title:'작성일자', field:'date', editable: 'never'
        }
    ]
        return (
            <>
                <AdminBreadcrumb title="커뮤니티" parent="Community" />
                <div className="container-fluid bulk-cate">
                    <div className="card">
                        <div className="card-header">
                            <h5>Community</h5>
                        </div>
                        <div className="card-body">
                            <div id="batchDelete" className="category-table media-table coupon-list-delete">
                                <Table title="커뮤니티" columns={columns} data={posts}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default communityReducer
