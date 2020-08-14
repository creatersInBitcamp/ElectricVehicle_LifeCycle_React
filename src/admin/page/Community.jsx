import React, {useEffect, useState} from 'react'
import {AdminBreadcrumb} from '../common';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import Table from "../item/Table";
import MaterialTable from "material-table";

const communityTypes = {REQUEST: 'community/REQUEST'}
const communityReducer = ( state={}, action ) => {
    switch (action.type) {
        case communityTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const communityThunk = () => (dispatch) => {
    axios.get(`http://localhost:8080/posts/getall`)
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
        axios.get(`http://localhost:8080/posts/getall`)
            .then((res)=>{
                setPosts(res.data)
            })
            .catch(()=>{
                alert("통신실패")
            })
    },[posts])
// @Column(name = "post_id", nullable = false) private Long postId;
// @Column(name = "user_name", nullable = false, length = 30) private String userId;
// @Column(name = "link", nullable = false) private String link;
// @Column(name = "title", nullable = false) private String title;
// @Column(name = "date") private String date;
// @Column(name = "img", nullable = false, length = 700) private String img;
// @Column(name = "content", nullable = false) private String content;
// @Column(name = "recomendation", nullable = false) private int recommendation;
// @Column(name = "", nullable = false) private int report;
// @Column(name = "hits", nullable = false) private int hits;
// @Column(name = "category", nullable = false, length = 45) private String category;
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
                                <MaterialTable title="커뮤니티" columns={columns} data={posts}
                                               // editable={{
                                               //     onRowUpdate: (newData, oldData) =>
                                               //         new Promise((resolve, reject)=>{
                                               //             setTimeout(()=>{
                                               //                 const dataUpdate = [...data]
                                               //                 const index = oldData.tableData.id;
                                               //                 dataUpdate[index] = newData
                                               //                 setData([...dataUpdate])
                                               //                 resolve()
                                               //                 axios.post(`http://localhost:8080/posts/allUpdate`, [...dataUpdate])
                                               //                     .then((res) => {
                                               //                     })
                                               //                     .catch(() => {
                                               //                         alert("통신실패")
                                               //                     })
                                               //             }, 1000)
                                               //         })
                                               // }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default communityReducer
