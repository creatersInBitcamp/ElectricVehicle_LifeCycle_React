import React, {useEffect, useState} from 'react'
import {AdminBreadcrumb} from '../common';
import Table from "../item/Table";
import axios from 'axios'
import order from '../../atomic/constants/convertcsv.json'
import {Bar, Line} from "react-chartjs-2";
import {BACK_PATH} from "../../api/key";

const ordersTypes = {REQUEST: 'orders/REQUEST'}
const ordersReducer = ( state, action ) => {
    switch (action.type) {
        case ordersTypes.REQUEST: return {...state, payload: action.payload}
        default: return null
    }
}

export const Orders = () => {
    const [data, setData] = useState([])

    const columns = [
        {title:'OrderID', field:'orderId'},
        {title:'주문자', field: 'userName'},
        {title:'차량명', field:'carName'},
        {title:'색상', field:'color'},
        {title:'방식', field:'purchasingMethod'},
        {title:'가격', field:'purchasePrice'},
        {title:'요청시간', field:'purchaseTime'},
    ]
    useEffect(()=>{
        axios.get(`http://${BACK_PATH}/purchases/getall`)
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>{
                console.log(err.status)
            })
    },[])

    // 차량별 구매 차트 데이터
    const [carChartData, setCarChartData] = useState({})
    const [orderData, setOrderData] = useState(order[0].slice(2))
    const [totalChartData, setTotalChartData] = useState({})

    const [targetId, setTargetId] = useState("테슬라 모델3")
    const [eccarName, setEccarName] = useState([])

    const makeColors = () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return "rgb(" + r + "," + g + "," + b + ")"
    }

    useEffect(()=>{
        for(let i in order){
            if(order[i][0] === targetId){
                setOrderData(order[i].slice(2))
            }
        }
    },[targetId])

    useEffect(()=>{
        const orderKeys = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]
        const orderColor = []
        const eccarName = []
        for(let i in order) {
            orderColor.push(makeColors())
            eccarName.push(order[i][0])
        }
        setEccarName(eccarName)
        console.log(eccarName)
        setCarChartData({
                labels: orderKeys,
                datasets:[
                    {
                        data: orderData,
                        backgroundColor: orderColor
                    },
                ],
            })
    },[orderData])

    // 월별 전체 구매 차트
    useEffect(()=>{

        const orderKeys = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]
        const intOnly = []
        for(let i in order){
            intOnly.push(order[i].slice(2))
        }
        const total = []
        let sum = 0
        for(let i=0; i<12; i++){
            sum = 0
            for(let j in intOnly){
                sum += intOnly[j][i]
            }
            total.push(sum)
        }
        setTotalChartData({
                labels: orderKeys,
                datasets:[
                    {
                        data: total,
                        borderColor: "#13c9ca",
                    },
                ],
            }
        )
    },[])

        return (
            <>
                <AdminBreadcrumb title="판매현황" parent="Sales" />

                <div className="container-fluid">
                    <div className="row">
                            <div className="col-xl-6 xl-100">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>월별 판매량</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-body sell-graph">
                                            <Line data={totalChartData} options={{
                                                dragData: true, dragDataRound: 0, legend:{ display: false}}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 xl-100">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>모델별 현황: {targetId}</h5>
                                        <select onChange={(e)=>setTargetId(e.target.value)}>
                                            <option value={0}>상품을 선택해주세요.</option>
                                            {
                                                eccarName.map((item,index)=>{
                                                    return <option key={index} value={item}>{item}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-body sell-graph">
                                            <Bar data={carChartData} options={{
                                                dragData: true, dragDataRound: 0, legend:{ display: false}}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="card-body order-datatable">
                            <Table title={"주문요청"} columns={columns} data={data}/>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ordersReducer
