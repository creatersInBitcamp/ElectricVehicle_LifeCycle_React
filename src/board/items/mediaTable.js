import React from 'react';
import MaterialTable from 'material-table'
const MediaTable = () => {
    return (
        <>
            <MaterialTable
                title={"Category board"}
                columns={[
                {title: 'Title', field: 'title'},
                {title: 'Name', field: 'name'},
                {title: 'Date', field: 'date'},
                {title: 'Hits', field: 'hits'},
                {title: 'Comments', field: 'comments'}
                ]}
                data={[
                    {title: '제목', name:'작성자', date:'작성일', hits:'좋아요', comments:'조회수'}
                ]}
            />
        </>
    );
};

export default MediaTable;