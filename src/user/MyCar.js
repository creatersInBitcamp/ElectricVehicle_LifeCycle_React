import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Breadcrumb} from "../common";
import {Link} from "react-router-dom";

/* type */
const ADD_TO_MY_CAR = 'ADD_TO_MY_CAR'
const REMOVE_FROM_MY_CAR = 'REMOVE_FROM_MY_CAR'

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

export const MyCarPage = () => {
    const [openEdit,setOpenEdit] = useState(false)
    const [targetId,setTargetId] = useState(0)

    const {products, myCars} = useSelector(state=>({
        products: state.data.products,
        myCars: state.myCar.list
    }))

    const onClickEdit = () => {
        setOpenEdit(true)
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
                                        <li><Link to={"/pages/myaccount"}>Account Info</Link></li>
                                        <li><a href="#">Address Book</a></li>
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
                                            <div className="col-sm-6">
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>내 차 정보</h3>
                                                        <a onClick={onClickEdit}>Edit</a>
                                                    </div>
                                                    <div className="box-content">
                                                        <img className="img-fluid"
                                                             src="https://imgauto-phinf.pstatic.net/20200205_218/auto_1580892688565gVui9_PNG/20200205175126_tJ5cbvuq.png?type=f567_410" 
                                                             alt=""/>
                                                        <h6>2019 테슬라 모델3</h6>
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
                                                        <p>
                                                            You are currently not subscribed to any newsletter.
                                                        </p>
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
                                                            <button onClick={()=>dispatch(removeFromMyCar(myCars.find(x => x.id == targetId)))}>삭제</button>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <select>
                                                                <option value="default">메인차량을 선택해주세요.</option>
                                                                {
                                                                    myCars.map((item,index)=>{
                                                                        return <option key={index} value={item.id}>{item.name}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <button>선택</button>
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