import React, {useState} from 'react';
import {Table} from "../admin/item";


const MyPost = ({posts}) => {

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
            <div className="container-fluid bulk-cate">
                <div className="card">
                    <div className="card-header">
                        <h5>My Post</h5>
                    </div>
                    <div className="card-body">
                        <div id="batchDelete" className="category-table media-table coupon-list-delete">
                            <Table title="My Post" columns={columns} data={posts}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPost;