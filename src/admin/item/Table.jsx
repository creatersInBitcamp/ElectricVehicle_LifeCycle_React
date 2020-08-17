import React from 'react';
import MaterialTable from "material-table";

const Table = ({title, columns, data, editable }) => {

    return (
        <>
            <MaterialTable title={title} columns={columns}
                           data={data} editable={editable}
            />
        </>
    );
};

export default Table;