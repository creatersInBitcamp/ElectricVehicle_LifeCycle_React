import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Breadcrumb} from "../common";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

/* type */
const ADD_TO_MY_CAR = 'ADD_TO_MY_CAR'
const REMOVE_FROM_MY_CAR = 'REMOVE_FROM_MY_CAR'
const ADD_TO_FIRST_CAR = 'ADD_TO_FIRST_CAR'
const REMOVE_FROM_FIRST_CAR = 'REMOVE_FROM_FIRST_CAR'

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
const changeFirstCar = (product) => (dispatch) => {
    dispatch(addToFirstCar(product))
}

/* reducer */
export const myCarReducer = (state={list:[]}, action) => {
    switch (action.type) {
        case ADD_TO_MY_CAR:
            const productId = action.product.id
            if (state.list.findIndex(product => product.id === productId) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }
                    return cartAcc
                }, [])
                return { ...state, list }
            }
            return { ...state, list: [...state.list, action.product] }

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
            const productId = action.product.id
            state.list = []
            if (state.list.findIndex(product => product.id === productId) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.id === productId) {
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

        default:
    }
    return state
}

export const MyCarPage = () => {
    const [openEdit,setOpenEdit] = useState(false)
    const [targetId,setTargetId] = useState(0)
    const [state, setState] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();

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

    const onClickEdit = () => {
        setOpenEdit(true)
    }

    const setting = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true
    }

    const dispatch = useDispatch()

    return (

        <div>
            <Breadcrumb title={'MyAccount'}/>


            {/*Dashboard section*/}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="account-sidebar">
                                <a className="popup-btn">
                                    my account
                                </a>
                            </div>
                            <div className="dashboard-left">
                                <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"/> back
                                    </span>
                                </div>
                                <div className="block-content">
                                    <ul>
                                        <li><Link to={"/pages/profile"}>Account Info</Link></li>
                                        <li className="active"><Link to={"/pages/myCar"}>My Car</Link></li>
                                        <li><a href="#">My Orders</a></li>
                                        <li><a href="#">My Wishlist</a></li>
                                        <li><a href="#">Newsletter</a></li>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Change Password</a></li>
                                        <li className="last"><a href="#">Log Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="dashboard-right">
                                <div className="dashboard">
                                    <div className="page-title">
                                        <h2>My Car</h2>
                                    </div>
                                    <div className="box-account box-info">
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-12">
                                                <Tabs className="tab-content nav-material">
                                                    <TabList className="nav nav-tabs nav-material">
                                                        <Tab className="nav-item">
                                                            <span className="nav-link active">
                                                                    판매
                                                                </span>
                                                            <div className="material-border"/>
                                                        </Tab>
                                                        <Tab className="nav-item">
                                                            <span className="nav-link active">
                                                                    구매
                                                                </span>
                                                            <div className="material-border"/>
                                                        </Tab>
                                                    </TabList>
                                                    <TabPanel className="tab-pane fade mt-4 show active">
                                                        <table className="table table-striped mb-0">
                                                            <tbody>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>제목</th>
                                                                <th>조회수</th>
                                                                <th>댓글수</th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1</td>
                                                                <td>1</td>
                                                                <td>1</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </TabPanel>
                                                    <TabPanel className="tab-pane fade mt-4 show active">
                                                        <table className="table table-striped mb-0">
                                                            <tbody>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>제목</th>
                                                                <th>조회수</th>
                                                                <th>댓글수</th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1</td>
                                                                <td>1</td>
                                                                <td>1</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </TabPanel>
                                                </Tabs>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>내 차 정보</h3>
                                                        <a onClick={onClickEdit}>Edit</a>
                                                    </div>
                                                    <div className="box-content">
                                                        <Slider {...setting} asNavFor={state.nav2} ref={slider => (state.nav1 = slider)} className="product-slick">
                                                            {myCars.map((item,index)=>{
                                                                return (
                                                                    <div key={index}>
                                                                        <img src={item.pictures[0]} className="img-fluid image_zoom_cls-0"  alt={""} />
                                                                        <h4>{item.name}</h4>
                                                                    </div>
                                                                )
                                                            })}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>메인 차</h3>
                                                        <a onClick={onClickEdit}>Edit</a>
                                                    </div>
                                                    <div className="box-content">
                                                        {
                                                            first.length>0?

                                                                first.map((item,index)=>{
                                                                return (
                                                                    <div key={index}>
                                                                        <img src={item.pictures[0]} className="img-fluid image_zoom_cls-0"  alt={""} />
                                                                        <h4>{item.name}</h4>
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
                                                        <a href="/pages/faq">전기차 등록요청</a>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <select onChange={e=>setTargetId(e.target.value)}>
                                                                <option value="default">차종을 선택해주세요.</option>
                                                                {
                                                                    products.map((item,index)=>{
                                                                        return <option key={index} value={item.id}>{item.name}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <button onClick={()=>dispatch(addToMyCar(products.find(x => x.id == targetId)))}>추가</button>
                                                            <br/>
                                                            <select onChange={e=>setTargetId(e.target.value)}>
                                                                <option value="default">삭제할 차량을 선택해주세요.</option>
                                                                {
                                                                    myCars.map((item,index)=>{
                                                                        return <option key={index} value={item.id}>{item.name}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <button onClick={()=> {
                                                                dispatch(removeFromMyCar(myCars.find(x => x.id == targetId)))
                                                                dispatch(removeFromFirstCar(myCars.find(x => x.id == targetId)))
                                                            }}>삭제</button>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <select onChange={e=>setTargetId(e.target.value)}>
                                                                <option value="default">메인차량을 선택해주세요.</option>
                                                                {
                                                                    myCars.map((item,index)=>{
                                                                        return <option key={index} value={item.id}>{item.name}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <button onClick={()=>dispatch(changeFirstCar(myCars.find(x => x.id == targetId)))}>변경</button>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default myCarReducer