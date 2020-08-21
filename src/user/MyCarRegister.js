import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Slider from "react-slick";
import {Table} from "../admin/item";

/* type */
const ADD_TO_MY_CAR = 'ADD_TO_MY_CAR'
const REMOVE_FROM_MY_CAR = 'REMOVE_FROM_MY_CAR'
const ADD_TO_FIRST_CAR = 'ADD_TO_FIRST_CAR'
const REMOVE_FROM_FIRST_CAR = 'REMOVE_FROM_FIRST_CAR'
const REMOVE_ALL_CAR = 'REMOVE_ALL_CAR'
const REMOVE_ALL_FIRST_CAR = 'REMOVE_ALL_FIRST_CAR'

/* action */
const addToMyCar = (product) => (dispatch) => {
    dispatch(addToMyCarUnsafe(product))
}
const addToMyCarUnsafe = (product) => ({
    type: ADD_TO_MY_CAR,
    product
})
const removeFromMyCar = product_id => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_MY_CAR,
        product_id
    })
}
const removeAllCar = () => ({
    type: REMOVE_ALL_CAR
})
const addToFirstCar = (product) => ({
    type: ADD_TO_FIRST_CAR,
    product
})
const removeFromFirstCar = product_id => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_FIRST_CAR,
        product_id
    })
}
const removeAllFirstCar = () => ({
    type: REMOVE_ALL_FIRST_CAR
})
const changeFirstCar = (product) => (dispatch) => {
    dispatch(addToFirstCar(product))
}

/* reducer */
export const myCarReducer = (state={list:[]}, action) => {
    switch (action.type) {
        case ADD_TO_MY_CAR:
            console.log(action)
            const productId = action.product.eccarId
            if (state.list.findIndex(product => product.eccarId === productId) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.eccarId === productId) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }
                    return cartAcc
                }, [])
                return { ...state, list }
            }
            return { ...state, list: [...state.list, action.product] }

        case REMOVE_ALL_CAR:
            return {
                list: []
            }
        case REMOVE_FROM_MY_CAR:
            return {
                list: state.list.filter(id => id !== action.product_id)
            }
        default:
    }
    return state
}

export const firstCarReducer = (state={list:[]}, action) => {
    switch (action.type) {
        case ADD_TO_FIRST_CAR:
            const productId = action.product.eccarId
            state.list = []
            if (state.list.findIndex(product => product.eccarId === productId) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.eccarId === productId) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }
                    return cartAcc
                }, [])
                return { ...state, list }
            }
            return { ...state, list: [...state.list, action.product] }

        case REMOVE_FROM_FIRST_CAR:
            return {
                list: state.list.filter(id => id !== action.product_id)
            }

        case REMOVE_ALL_FIRST_CAR:
            return {
                list: []
            }

        default:
    }
    return state
}

export const MyCarRegister = ({used}) => {
    const [openEdit,setOpenEdit] = useState(false)
    const [targetId,setTargetId] = useState(0)
    const [state, setState] = useState({ nav1: null, nav2: null })
    const [product,setProduct] = useState([])

    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        })
    }, [])

    let usedNew = used.find(x=>x.usedCarSalesList)
    useEffect(()=>{

        axios.get(`http://localhost:8080/usedCars/getDetail/${usedNew.usedCarId}`)
            .then((res)=>{
                console.log(res.data)
                console.log(product)
                setProduct(res.data)
            })
            .catch(()=>{
                alert('product fail')
            })
    },[])

    const {products, myCars, first} = useSelector(state=>({
        products: state.data.products,
        myCars: state.myCar.list,
        first: state.firstCar.list
    }))

    const setting = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true
    }

    const saleColumns = [
        {
            title:'매물번호', field:'usedCarId', editable: 'never'
        },
        {
            title:'품명', field: 'carName', editable: 'never'
        },
        {
            title:'연식', field:'age', editable: 'never'
        },
        {
            title:'주행거리', field:'mileage', editable: 'never'
        },
        {
            title:'가격', field:'price', editable: 'never'
        },
        {
            title:'구매요청', field: '', editable: 'never'
        }
    ]
    const purchaseColumns = [
        {
            title:'차종', field:'carName', editable: 'never'
        },
        {
            title:'이름', field: 'buyerName', editable: 'never'
        },
        {
            title:'이메일', field:'buyerEmail', editable: 'never'
        },
        {
            title:'지역', field:'buyerAddr', editable: 'never'
        },
        {
            title:'전화번호', field:'buyerPhoneNumber', editable: 'never'
        }
    ]

    const dispatch = useDispatch()

    return<>
        <Container>
            <Row>
                <Col/>
                <Col xs={10}>
                    <div className="page-title">
                        <h2>My Car</h2>
                    </div>
                    <div className="box-account box-info">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="box">
                                    <div className="box-title">
                                        <h3>내 차 정보</h3>
                                        <a onClick={() => { setOpenEdit(true) }}>Edit</a>
                                    </div>
                                    <div className="box-content">
                                        <Slider {...setting} asNavFor={state.nav2} ref={slider => (state.nav1 = slider)} className="product-slick">
                                            {
                                                myCars.length > 0 ?
                                                    myCars.map((item,index)=>{
                                                        return (
                                                            <div key={index}>
                                                                <img src={item.img} className="img-fluid image_zoom_cls-0"  alt={""} />
                                                                <h4>{item.carName}</h4>
                                                            </div>
                                                        )})
                                                    : <h5>등록된 차량이 없습니다.</h5>
                                            }
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="box">
                                    <div className="box-title">
                                        <h3>메인 차</h3>
                                        <a onClick={() => { setOpenEdit(true) }}>Edit</a>
                                    </div>
                                    <div className="box-content">
                                        {
                                            first.length>0?

                                                first.map((item,index)=>{
                                                    return (
                                                        <div key={index}>
                                                            <img src={item.img} className="img-fluid image_zoom_cls-0"  alt={""} />
                                                            <h4>{item.carName}</h4>
                                                        </div>
                                                    )})
                                                : <h5>등록된 차량이 없습니다.</h5>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {openEdit?
                            <div>
                                <div className="box">
                                    <div className="box-title">
                                        <h3>변경하기</h3>
                                        <Link to={'/pages/faq'}>전기차 등록요청</Link>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <select onChange={e=>setTargetId(e.target.value)}>
                                                <option value="default">차종을 선택해주세요.</option>
                                                {
                                                    products.map((item,index)=>{
                                                        return <option key={index} value={item.eccarId}>{item.carName}</option>
                                                    })
                                                }
                                            </select>
                                            <button onClick={()=>dispatch(addToMyCar(products.find(x => x.eccarId == targetId)))}>추가</button>
                                            <br/>
                                            <select onChange={e=>setTargetId(e.target.value)}>
                                                <option value="default">삭제할 차량을 선택해주세요.</option>
                                                {
                                                    myCars.map((item,index)=>{
                                                        return <option key={index} value={item.eccarId}>{item.carName}</option>
                                                    })
                                                }
                                            </select>
                                            <button onClick={()=> {
                                                dispatch(removeFromMyCar(myCars.find(x => x.eccarId == targetId)))
                                                dispatch(removeFromFirstCar(myCars.find(x => x.eccarId == targetId)))
                                            }}>삭제</button>
                                            <button onClick={()=>dispatch(removeAllCar())}>전체삭제</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <select onChange={e=>setTargetId(e.target.value)}>
                                                <option value="default">메인차량을 선택해주세요.</option>
                                                {
                                                    myCars.map((item,index)=>{
                                                        return <option key={index} value={item.eccarId}>{item.carName}</option>
                                                    })
                                                }
                                            </select>
                                            <button onClick={()=>dispatch(changeFirstCar(myCars.find(x => x.eccarId == targetId)))}>변경</button>
                                            <button onClick={()=>dispatch(removeAllFirstCar())}>전체삭제</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''}<br/><br/>
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <Tabs className="tab-content nav-material">
                                    <TabList className="nav nav-tabs nav-material">
                                        <Tab className="nav-item">
                                            <span className="nav-link active">
                                                판매
                                            </span>
                                        </Tab>
                                        <Tab className="nav-item">
                                            <span className="nav-link active">
                                                구매요청
                                            </span>
                                        </Tab>
                                    </TabList>
                                    <TabPanel className="tab-pane fade mt-4 show active">
                                        <Table title={null} columns={saleColumns} data={product}/>
                                    </TabPanel>
                                    <TabPanel className="tab-pane fade mt-4 show active">
                                        <Table title={null} columns={purchaseColumns} data={usedNew.usedCarSalesList}/>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col/>
            </Row>
        </Container>
    </>
}
export default myCarReducer
