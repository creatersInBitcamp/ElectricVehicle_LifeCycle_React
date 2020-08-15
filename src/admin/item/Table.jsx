import React from 'react';
import MaterialTable from "material-table";
import axios from 'axios'

const Table = ({title, columns, data, setDate }) => {

    return (
        <>
            <MaterialTable title={title} columns={columns} data={data}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject)=>{
                            setTimeout(()=>{
                                const dataUpdate = [...data]
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData
                                setDate([...dataUpdate])
                                resolve()
                                if(title === '사용자'){
                                    axios.post(`http://localhost:8080/user/allUpdate`, [...dataUpdate])
                                        .then((res) => {
                                        })
                                        .catch(() => {
                                            alert("통신실패")
                                        })
                                }
                            }, 1000)
                        })
                }}
            />
        </>
    );
};

export default Table;