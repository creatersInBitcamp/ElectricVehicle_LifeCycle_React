import React from 'react';
import {Table} from "../admin/item";


const MyPost = ({posts}) => {

    const columns = [
        {
            title:'ID', field:'postId', editable: 'never'
        },
        {
            title:'제목', field:'title', editable: 'never'
        },
        {
            title:'추천', field:'recommendation', editable: 'never'
        },
        {
            title:'신고', field:'report', editable: 'never'
        },
        {
            title:'조회', field:'hits', editable: 'never'
        },
        {
            title:'category', field:'category'
        },
        {
            title:'작성일자', field:'date', editable: 'never'
        }
    ]
    return (
        <>
            <Table title="My Post" columns={columns} data={posts}/>
        </>
    );
};

export default MyPost;