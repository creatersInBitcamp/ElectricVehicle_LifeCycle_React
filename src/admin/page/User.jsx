import React, {useEffect, useState, useRef} from 'react';
import {AdminBreadcrumb} from '../common';
import {Table} from '../item'
import {Bar, Doughnut} from "react-chartjs-2";
import axios from "axios";
import {lineOptions} from "../../atomic/constants/chartData";
const userReducer = ( state= {}, action ) => {
    switch (action.type) {
        default: return state
    }
}

export const User = () => {

    const[data,setData] = useState([])

    const makeColors = () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return "rgb(" + r + "," + g + "," + b + ")"
    }

    // 유저 테이블
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
    const editable = {
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
    }

    const[ageChart,setAgeChart] = useState({})
    const[ageChartData, setAgeCharData] = useState({})

    //연령대별 차트

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/countAge`)
            .then((res)=>{
                setAgeChart(res.data)
            }).catch((err)=>{
                throw err
        })
    },[])

    useEffect(()=>{

        const ageKeys = []
        const ageValues = []
        const ageColor = []

        for(let i in ageChart) {
            ageKeys.push(ageChart[i].AGE+"대")
            ageValues.push(ageChart[i].CNT)
            ageColor.push(makeColors())
        }
        setAgeCharData({
            labels: ageKeys,
            datasets:[
                {
                    data: ageValues,
                    backgroundColor: ageColor
                },
            ],
        })
    },[ageChart])

    const[sexChart, setSexChart] = useState({})
    const[sexChartData, setSexChartData] = useState({})

    // 남녀 성비차트
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/countSex`)
            .then((res)=>{
                console.log(res.data)
                setSexChart(res.data)
            })
    },[])

    useEffect(()=>{

        const sexKeys = []
        const sexValues = []

        for(let i in sexChart) {
            sexKeys.push(sexChart[i].SEX)
            sexValues.push(sexChart[i].COUNT)
        }
        setSexChartData({
            labels: sexKeys,
            datasets:[
                {
                    data: sexValues,
                    backgroundColor: [
                        '#36A2EB',
                        '#FF6384',
                    ],
                    hoverBackgroundColor: [
                        '#36A2EB',
                        '#FF6384',
                    ]
                },
            ],
        })
    },[sexChart])

        return (
            <>
                <AdminBreadcrumb title="사용자 현황" parent="Users" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12"/>
                        <div className="col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>사용자 연령분포</h5>
                                </div>
                                <div className="card-body">
                                    <div className="market-chart">
                                        <Bar data={ageChartData} options={{
                                            dragData: true, dragDataRound: 0, legend:{ display: false}}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>사용자 성비</h5>
                                </div>
                                <div className="card-body">
                                    <div className="user-status table-responsive latest-order-table">
                                        <Doughnut data={sexChartData} options={{dragData: true, dragDataRound: 0}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="clearfix"/>
                            <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                                <Table title={"사용자"} data={data} columns={columns} editable={editable} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default userReducer
