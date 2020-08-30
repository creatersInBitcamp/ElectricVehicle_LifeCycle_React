import React, {useEffect, useState} from 'react';
import Breadcrumb from "../common";
import {Table} from "../admin/item";

const MyComment = ({comments}) => {

    const columns = [
        {
            title:'번호', field:'commentId', editable: 'never'
        },
        {
            title:'내용', field:'comment', editable: 'never'
        },
        {
            title:'작성일자', field:'regDate', editable: 'never'
        }
    ]
    return (
        <>
            <Table title="My Comment" columns={columns} data={comments}/>
        </>
    );
};

export default MyComment;