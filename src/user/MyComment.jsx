import React, {useEffect, useState} from 'react';
import Breadcrumb from "../common";
import {Table} from "../admin/item";

const MyComment = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        setPosts(JSON.parse(sessionStorage.getItem('user').posts))
    }, [])
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
            <Breadcrumb title="My Comments - 내 댓글"/>
            <div className="container-fluid bulk-cate">
                <div className="card">
                    <div className="card-header">
                        <h5>My Comment</h5>
                    </div>
                    <div className="card-body">
                        <div id="batchDelete" className="category-table media-table coupon-list-delete">
                            <Table title="My Comment" columns={columns} data={comments}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyComment;