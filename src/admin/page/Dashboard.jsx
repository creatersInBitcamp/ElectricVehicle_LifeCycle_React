import React, {useEffect, useState} from 'react';
import {AdminBreadcrumb} from '../common';
import order from '../../atomic/constants/convertcsv.json'
import { Box, Users, CreditCard, ShoppingCart } from 'react-feather';
import CountUp from 'react-countup';
import {Bar, Line} from 'react-chartjs-2';
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
    const [usedBrandCar, setUsedBrandCar] = useState({})
    const [usedBrandCarData, setUsedBrandCarData] = useState({})
    const [popular, setPopular] = useState([])

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
        axios.get(`http://localhost:8080/user/findBrandUsedCar`)
            .then((res)=>{
                setUsedBrandCar(res.data)
            })
    },[])

    // 매출 및 판매 현황
    useEffect(()=>{

        const orderKeys = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]
        const intOnly = []
        const price = []
        const name = []
        for(let i in order){
            intOnly.push(order[i].slice(2))
            price.push(order[i][1])
            name.push(order[i][0])
        }

        let sales = 0
        let count = 0
        let sum = 0
        let all = 0
        const monthSales = []

        for(let i=0; i<12; i++){
            sum = 0
            for(let j in intOnly){
                sum += intOnly[j][i]
            }
            count += sum
            setSellCount(count)
        }

        // 월별 차량 판매 수
        const total = []
        for(let j in intOnly){
            all = 0
            for(let i=0; i<12; i++){
                all += intOnly[j][i]
            }
            total.push(all)
        }

        for(let i in intOnly){
            sales = 0
            for(let j=0; j<12; j++){
                sales += (intOnly[j][i] * price[j])
            }
            monthSales.push(sales)
        }

        //총 매출
        for(let i in total){
            sales = 0
            sales += (total[i]*price[i])
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
        const popularColr = []
        for(let i in name){
            popularColr.push(makeColors())
        }

        setPopular({
                labels: name,
                datasets:[
                    {
                        data: total,
                        backgroundColor: popularColr
                    },
                ],
            }

        )

        // 신차 브랜드별 차량 수드
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

        // 중고 브랜드별 차량 수드
        const usedCarBrandKey = []
        const usedCarBrandValues = []
        const usedBrandColor = []

        for(let i in usedBrandCar){
            usedCarBrandKey.push(usedBrandCar[i].BRAND)
            usedCarBrandValues.push(usedBrandCar[i].COUNT)
            usedBrandColor.push(makeColors())
        }
        setUsedBrandCarData(
            {
                labels: usedCarBrandKey,
                datasets:[
                    {
                        data: usedCarBrandValues,
                        backgroundColor: brandColor
                    },
                ],
            }
        )
    },[userCount, brandCar, usedBrandCar])

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
                                            <h3 className="mb-0"> <CountUp className="counter" separator={','} end={sales} /> <small>만원</small></h3>
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
                                            <h3 className="mb-0"> <CountUp className="counter" separator={','} end={sellCount} /><small> 대</small> </h3>
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
                                            <h3 className="mb-0"> <CountUp className="counter" separator={','} end={usedCarCount} /> <small> 대</small></h3>
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
                                            <h3 className="mb-0"><CountUp className="counter" separator={','} end={userCount} /> <small> 명</small></h3>
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
                                    <h5>차량별 누적 판매수</h5>
                                </div>
                                <div className="card-body">
                                    <div className="user-status table-responsive latest-order-table">
                                        <div className="market-chart">
                                            <Bar data={popular} options={{
                                                dragData: true, dragDataRound: 0, legend:{ display: false}}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 xl-100">
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
                        <div className="col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>중고차 브랜드별 차량 수</h5>
                                </div>
                                <div className="card-body sell-graph">
                                    <Bar data={usedBrandCarData} options={{
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
