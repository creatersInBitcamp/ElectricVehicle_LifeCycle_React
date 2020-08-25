import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Slider from "react-slick";
import {Table} from "../admin/item";

/* type */
const RECEIVE_MY_CARS = 'RECEIVE_MY_CARS'
const REMOVE_FROM_MY_CAR = 'REMOVE_FROM_MY_CAR'
const REMOVE_ALL_CAR = 'REMOVE_ALL_CAR'

const RECEIVE_FIRST_CAR = 'RECEIVE_FIRST_CAR'
const ADD_TO_FIRST_CAR = 'ADD_TO_FIRST_CAR'
const REMOVE_FROM_FIRST_CAR = 'REMOVE_FROM_FIRST_CAR'
const REMOVE_ALL_FIRST_CAR = 'REMOVE_ALL_FIRST_CAR'
const CLEAR_MY_CAR = 'CLEAR_MY_CAR'

/* action */
const receiveMyCar = myCars => ({
    type: RECEIVE_MY_CARS,
    myCars
})
const addToMyCar = ({product,user}) => {
    const info = {
        price: null,
        age: null,
        mileage: null,
        sale: false,
        img: product.img,
        eccarId: product.eccarId,
        userSeq: user
    }
    axios.post(`http://localhost:8080/usedCars/register`, info)
        .then((res)=>{
            window.location.reload()
        })
        .catch((err)=>{ throw err })
}
const removeFromMyCar = product_id => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_MY_CAR,
        product_id
    })
}
const removeAllCar = (myCars) => (dispatch) => {
    axios.post(`http://localhost:8080/usedCars/deleteAllCar`,myCars)
        .then((res)=> dispatch({ type: REMOVE_ALL_CAR, result: res.data }), window.location.reload())
        .catch(()=>alert(`삭제 실패`))
}
export const receiveFirstCar = firstCar => ({
    type: RECEIVE_FIRST_CAR,
    firstCar
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
const changeFirstCar = (myCars,targetId) => {
    const product = myCars.find(x=> (x.usedCarId == targetId))
    const before = myCars.filter(x=> {
            if(x.usedCarId != targetId){
                return x.usedCarId
            }
        })

    axios.get(`http://localhost:8080/usedCars/updateFirstCar/${product.usedCarId}`)
        .then((res)=>{
            window.location.reload()
        })
        .catch((err)=>{ throw err })

    if (before) {
        axios.post(`http://localhost:8080/usedCars/updateFirstCar`,before)
            .then((res)=>{})
            .catch((err)=>{ throw err })
    }
}

export const clearMyCar = () =>({
    type :CLEAR_MY_CAR
})

const initialState = {
    list: []
}

/* reducer */
export const myCarReducer = (state=initialState, action) => {
    switch (action.type) {
        case RECEIVE_MY_CARS:
            return { ...state,
                list: action.myCars
            }

        case REMOVE_ALL_CAR:
            if (action.result === true) {
                return {
                    list: []
                }
            } else {
                alert('remove all error')
                return {
                    ...state
                }
            }

        case REMOVE_FROM_MY_CAR:
            axios.get(`http://localhost:8080/usedCars/deleteMyCar/${action.product_id}`)
                .then((res)=> res.data, window.location.reload())
                .catch(()=> alert(`삭제 실패`))
            return {
                list: state.list.filter(id => id !== action.product_id)
            }

        case CLEAR_MY_CAR:
            return{
                list:[]
            }

        default:
    }
    return state
}

export const firstCarReducer = (state={list:[]}, action) => {
    switch (action.type) {
        case ADD_TO_FIRST_CAR:
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

        case RECEIVE_FIRST_CAR:
            return { list: action.firstCar }

        case REMOVE_FROM_FIRST_CAR:
            return {
                list: state.list.filter(id => id !== action.product_id)
            }

        case REMOVE_ALL_FIRST_CAR:
            return {
                list: []
            }
        case CLEAR_MY_CAR:
            return {
                list:[]
            }

        default:
    }
    return state
}

export const MyCarRegister = () => {
    const [openEdit,setOpenEdit] = useState(false)
    const [targetId,setTargetId] = useState(0)
    const [state,setState] = useState({ nav1: null, nav2: null })
    const [product,setProduct] = useState([])
    const [value,setValue] = useState(0)
    const [used,setUsed] = useState([])
    let [result,setResult] = useState([])
    const [userSession,setUserSession] = useState(JSON.parse(sessionStorage.getItem("user")))

    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setUserSession(JSON.parse(sessionStorage.getItem("user")))
    },[value])


    useEffect(()=> {
        setUsed(userSession.usedCarList)
        let usedNew = []
        if (used.length > 0){
            usedNew = used.find(x=>x.usedCarSalesList)
            axios.get(`http://localhost:8080/usedCars/getDetailList/${userSession.userSeq}`)
                .then((res)=>{
                    setProduct(res.data)
                })
            setResult(usedNew.usedCarSalesList)
        } else {
            setResult(usedNew)
        }

        axios.get(`http://localhost:8080/usedCars/getAllMyCar/${userSession.userSeq}`)
            .then((res)=>{
                dispatch(receiveMyCar(res.data))
            })
            .catch(()=>{})

        axios.get(`http://localhost:8080/usedCars/getFirstCar/${userSession.userSeq}`)
            .then((res)=>{
                dispatch(receiveFirstCar(res.data))
            })

    }, [userSession])

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        })
    }, [])

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

    return <>
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
                                        <Link onClick={() => { setOpenEdit(true) }}>Edit</Link>
                                    </div>
                                    <div className="box-content">
                                        <Slider {...setting} asNavFor={state.nav2} ref={slider => (state.nav1 = slider)} className="product-slick">
                                            {
                                                myCars.length > 0 ?
                                                    myCars.map((item,index)=>{
                                                        return (
                                                            <div key={index}>
                                                                <img src={item.img.img1 ? item.img.img1 : item.img} className="img-fluid image_zoom_cls-0"  alt={""} />
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
                                        <Link onClick={() => { setOpenEdit(true) }}>Edit</Link>
                                    </div>
                                    <div className="box-content">
                                        {
                                            first.length>0?

                                                first.map((item,index)=>{
                                                    return (
                                                        <div key={index}>
                                                            <img src={item.img.img1} className="img-fluid image_zoom_cls-0"  alt={""} />
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
                                            <button onClick={()=>dispatch(addToMyCar({product: products.find(x => x.eccarId == targetId), user: userSession.userSeq}))}>추가</button>
                                            <br/>
                                            <select onChange={e=>setTargetId(e.target.value)}>
                                                <option value="default">삭제할 차량을 선택해주세요.</option>
                                                {
                                                    myCars.map((item,index)=>{
                                                        return <option key={index} value={item.usedCarId}>{item.carName}</option>
                                                    })
                                                }
                                            </select>
                                            <button onClick={()=> {
                                                dispatch(removeFromMyCar(myCars.find(x => x.usedCarId == targetId).usedCarId))
                                                dispatch(removeFromFirstCar(myCars.find(x => x.usedCarId == targetId)))
                                            }}>삭제</button>
                                            <button onClick={()=>dispatch(removeAllCar(myCars))}>전체삭제</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <select onChange={e=>setTargetId(e.target.value)}>
                                                <option value="default">메인차량을 선택해주세요.</option>
                                                {
                                                    myCars.map((item,index)=>{
                                                        return <option key={index} value={item.usedCarId}>{item.carName}</option>
                                                    })
                                                }
                                            </select>
                                            <button onClick={()=>dispatch(changeFirstCar(myCars,targetId))}>변경</button>
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
                                        <Table title={null} columns={purchaseColumns} data={result}/>
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
