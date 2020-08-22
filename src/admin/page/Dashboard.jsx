import React, {useEffect, useState} from 'react';
import {AdminBreadcrumb} from '../common';
import order from '../../atomic/constants/convertcsv.json'
import { Navigation, Box, MessageSquare, Users, Briefcase, CreditCard, ShoppingCart, Calendar } from 'react-feather';
import CountUp from 'react-countup';
import { Bar, Line } from 'react-chartjs-2';
import {lineOptions, buyOption,} from '../../atomic/constants/chartData'
import axios from 'axios'

const dashboardTypes = {REQUEST: 'dashboard/REQUEST'}
const dashboardReducer = ( state={}, action ) => {
    switch (action.type) {
        case dashboardTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Dashboard = () => {

    const [userCount, setUserCount] = useState(0)
    const [usedCarCount, setUsedCarCount] = useState(0)
    const [sellCount, setSellCount] = useState(0)
    const [sales, setSales] = useState(0)
    const [monthSalesChatData,setMonthSalesChatData] = useState([])
    const [brandCar, setBrandCar] = useState({})
    const [brandCarData, setBrandCarData] = useState({})

    const makeColors = () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return "rgb(" + r + "," + g + "," + b + ")"
    }
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/count`)
            .then((res)=>{
                setUserCount(res.data)
            })
        axios.get(`http://localhost:8080/usedCars/count`)
            .then((res)=>{
                setUsedCarCount(res.data)
            })
        axios.get(`http://localhost:8080/user/findBrandCar`)
            .then((res)=>{
                setBrandCar(res.data)
            })
    },[])

    // 매출 및 판매 현황
    useEffect(()=>{

        const orderKeys = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]
        const intOnly = []
        const price = []
        for(let i in order){
            intOnly.push(order[i].slice(2))
            price.push(order[i][1])
        }

        let sales = 0
        let count = 0
        let sum = 0
        let all = 0
        const monthSales = []

        for(let i=0; i<12; i++){
            for(let j in intOnly){
                sum += intOnly[j][i]
            }
            count += sum
            setSellCount(count)
        }
        const total = []
        for(let j in intOnly){
            for(let i=0; i<12; i++){
                all += intOnly[j][i]
            }
        // 총 판매 차량수
            total.push(all)
        }

        for(let i in total){
            sales += (total[i]*price[i])
            monthSales.push(sales)
        }
        setSales(sales)
        // 월별 매출
        setMonthSalesChatData({
                labels: orderKeys,
                datasets:[
                    {
                        data: monthSales,
                        borderColor: "#13c9ca",
                    },
                ],
            }

        )
        // 브랜드별 차량 수드
        const carBrandKey = []
        const carBrandValues = []
        const brandColor = []

        for(let i in brandCar){
            carBrandKey.push(brandCar[i].BRAND)
            carBrandValues.push(brandCar[i].COUNT)
            brandColor.push(makeColors())
        }
        setBrandCarData(
            {
                labels: carBrandKey,
                datasets:[
                    {
                        data: carBrandValues,
                        backgroundColor: brandColor
                    },
                ],
            }
        )
    },[userCount, brandCar])

        const buyData = {
            labels: ["", "10", "20", "30", "40", "50"],
            datasets: [{
                backgroundColor: "transparent",
                borderColor: "#13c9ca",
                data: [20, 5, 80, 10, 100, 15],
            },
            {
                backgroundColor: "transparent",
                borderColor: "#a5a5a5",
                data: [0, 50, 20, 70, 30, 27],
            },
            {
                backgroundColor: "transparent",
                borderColor: "#ff8084",
                data: [0, 30, 40, 10, 86, 40],
            }]
        }

        return (

            <>
                <AdminBreadcrumb title="종합현황" parent="Dashboard" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 xl-50">
                            <div className="card o-hidden widget-cards">
                                <div className="bg-warning card-body">
                                    <div className="media static-top-widget row">
                                        <div className="icons-widgets col-4">
                                            <div className="align-self-center text-center"><CreditCard className="font-danger" /></div>
                                        </div>
                                        <div className="media-body col-15"><span className="m-0">총 매출</span>
                                            <h3 className="mb-0"> <CountUp className="counter" end={sales} /> <small>만원</small></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 xl-50">
                            <div className="card o-hidden  widget-cards">
                                <div className="bg-secondary card-body">
                                    <div className="media static-top-widget row">
                                        <div className="icons-widgets col-4">
                                            <div className="align-self-center text-center"><Box className="font-secondary" /></div>
                                        </div>
                                        <div className="media-body col-8"><span className="m-0">판매 차량 수</span>
                                            <h3 className="mb-0"> <CountUp className="counter" end={sellCount} /> 대</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 xl-50">
                            <div className="card o-hidden widget-cards">
                                <div className="bg-primary card-body">
                                    <div className="media static-top-widget row">
                                        <div className="icons-widgets col-4">
                                            <div className="align-self-center text-center"><ShoppingCart className="font-primary" /></div>
                                        </div>
                                        <div className="media-body col-8"><span className="m-0">보유 중고차</span>
                                            <h3 className="mb-0"> <CountUp className="counter" end={usedCarCount} /> 대</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 xl-50">
                            <div className="card o-hidden widget-cards">
                                <div className="bg-danger card-body">
                                    <div className="media static-top-widget row">
                                        <div className="icons-widgets col-4">
                                            <div className="align-self-center text-center"><Users className="font-danger" /></div>
                                        </div>
                                        <div className="media-body col-8"><span className="m-0">총 회원 수</span>
                                            <h3 className="mb-0"><CountUp className="counter" end={userCount} /> 명</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>월별 매출현황</h5>
                                </div>
                                <div className="card-body">
                                    <div className="market-chart">
                                        <Line data={monthSalesChatData} options={{
                                            dragData: true, dragDataRound: 0, legend:{ display: false}}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>인기 차종</h5>
                                </div>
                                <div className="card-body">
                                    <div className="user-status table-responsive latest-order-table">
                                        <table className="table table-bordernone">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Order ID</th>
                                                    <th scope="col">Order Total</th>
                                                    <th scope="col">Payment Method</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td className="digits">$120.00</td>
                                                    <td className="font-danger">Bank Transfers</td>
                                                    <td className="digits">On Way</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td className="digits">$90.00</td>
                                                    <td className="font-secondary">Ewallets</td>
                                                    <td className="digits">Delivered</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td className="digits">$240.00</td>
                                                    <td className="font-warning">Cash</td>
                                                    <td className="digits">Delivered</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td className="digits">$120.00</td>
                                                    <td className="font-primary">Direct Deposit</td>
                                                    <td className="digits">$6523</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td className="digits">$50.00</td>
                                                    <td className="font-primary">Bank Transfers</td>
                                                    <td className="digits">Delivered</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a className="btn btn-primary">주문현황 더보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>신차 브랜드별 차량 수</h5>
                                </div>
                                <div className="card-body sell-graph">
                                    <Bar data={brandCarData} options={{
                                        dragData: true, dragDataRound: 0, legend:{ display: false}}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default dashboardReducer
