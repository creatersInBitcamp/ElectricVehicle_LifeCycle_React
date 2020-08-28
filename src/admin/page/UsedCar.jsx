import React, {useEffect, useState} from 'react'
import {AdminBreadcrumb} from '../common'
import axios from "axios";
import {Table} from "../item";
import CsvDownload from 'react-json-to-csv'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BACK_PATH} from "../../api/key";

const usedCarTypes = {REQUEST: 'usedCar/REQUEST'}
const usedCarReducer = ( state={}, action ) => {
    switch (action.type) {
        case usedCarTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const UsedCar = () => {
    const[data,setData] = useState([])
    const [message] = useState("중고차 DB수: ")
    const [message2] = useState(" ** 중고차 데이터는 SK엔카를 파이썬으로 크롤링해서 DB에 저장해서 사용했습니다.")

    useEffect(() => {
        axios.get(`http://${BACK_PATH}/user/usedCar`)
            .then((res)=>{
                setData(res.data)
            })
            .catch(()=>{
                alert("통신실패")
            })
    },[])

    const columns = [
        {
            title:'자동차명', field: 'carName'
        },
        {
            title: '소유주', field: 'name'
        },
        {
            title: '소유주 아이디', field: 'userId'
        },
        {
            title: '가격(만원)', field: 'price'
        },
        {
            title: '마일리지', field: 'mileage'
        },
    ]
        return (
            <>
                <AdminBreadcrumb title="중고차 현황" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>중고차 관리</h5>
                                </div>
                                <Container>
                                    <Row>
                                        <Col/>
                                        <Col md="auto"/>
                                        <Col xs lg={3}>
                                            <CsvDownload data={data}
                                                         filename="usedCar.csv"
                                                         style={{ //pass other props, like styles
                                                             boxShadow:"inset 0px 1px 0px 0px #e184f3",
                                                             background:"linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
                                                             backgroundColor:"#10ae13",
                                                             borderRadius:"6px",
                                                             border:"1px solid #a511c0",
                                                             display:"inline-block",
                                                             cursor:"pointer","color":"#ffffff",
                                                             fontSize:"15px",
                                                             fontWeight:"bold",
                                                             padding:"6px 24px",
                                                             textDecoration:"none",
                                                             textShadow:"0px 1px 0px #9b14b3"
                                                         }}
                                            >중고차 데이터 다운로드</CsvDownload>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className="card-body">
                                    <div id="batchDelete" className="category-table order-table coupon-list-delete">
                                        <Table title={message.concat(data.length).concat(message2)} data={data} columns={columns} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default usedCarReducer
