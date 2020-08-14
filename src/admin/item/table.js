import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import axios from 'axios'
import myData from "../../map/data/data-charging-station";
import {imgb64} from "react-smart-data-table/lib/helpers/tests";

const Table = () => {

    const[data,setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/user/findAll`)
            .then((res)=>{
                setData(res.data)
                console.log(res.data)
            })
            .catch(()=>{
                alert("통신실패")
            })
    },[])


    const columns = [
        {
            title:'아이디', field:'userId'
        },
        {
            title:'이미지', field: 'profileImage',
            render: rowData => <img src={rowData.profileImage} style={{width: 50, borderRadius: '50%'}} alt="" />
        },
        {
            title:'이름', field:'name'
        },
        {
            title:'이메일', field:'email'
        },
        {
            title:'등록날짜', field:'registerDate'
        },
        {
            title:'주소', field:'addr'
        },
        {
            title:'등급', field:'grade'
        },
        {
            title:'차단일자', field:'banDate'
        }
    ]

    return (
        <>
            <MaterialTable title="사용자" columns={columns} data={data}/>
        </>
    );
};

export default Table;