import React from "react";
import {Table} from "../admin/item";

const MyUsedTrading = ({posts}) => {
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
            <Table title="My Post" columns={columns} data={posts}/>
        </>
    )
}
export default MyUsedTrading