import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import axios from 'axios'

const Table = () => {

    const[data,setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/user/findAll`)
            .then((res)=>{
                setData(res.data)
            })
            .catch(()=>{
                alert("통신실패")
            })
    },[])

    const columns = [
        {
            title:'아이디', field:'userId', editable: 'never'
        },
        {
            title:'이미지', field: 'profileImage', editable: 'never',
            render: rowData => <img src={rowData.profileImage} style={{width: 50, borderRadius: '50%'}} alt="" />
        },
        {
            title:'이름', field:'name', editable: 'never'
        },
        {
            title:'이메일', field:'email', editable: 'never'
        },
        {
            title:'등록날짜', field:'registerDate', editable: 'never'
        },
        {
            title:'주소', field:'addr', editable: 'never'
        },
        {
            title:'등급', field:'grade'
        },
        {
            title:'차단일자', field:'banDate', editable: 'never'
        }
    ]

    return (
        <>
            <MaterialTable title="사용자" columns={columns} data={data}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject)=>{
                            setTimeout(()=>{
                                const dataUpdate = [...data]
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData
                                setData([...dataUpdate])
                                resolve()
                                axios.post(`http://localhost:8080/user/allUpdate`, [...dataUpdate])
                                    .then((res) => {
                                    })
                                    .catch(() => {
                                        alert("통신실패")
                                    })
                            }, 1000)
                        })
                }}
            />
        </>
    );
};

export default Table;