import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {toast} from "react-toastify";
import Slider from 'react-slick';
import {Breadcrumb} from "../../common";
import {MarketPrice} from "..";

/* types */
const ADD_TO_USED_COMPARE = 'ADD_TO_USED_COMPARE'
const REMOVE_FROM_USED_COMPARE = 'REMOVE_FROM_USED_COMPARE'
const CLEAR_USED_COMPARE = 'CLEAR_USED_COMPARE'

/* actions */
export const addToUsedCompare = (product) => (dispatch) => {
    toast.success("Item Added to UsedCompare");
    dispatch(addToUsedCompareUnsafe(product))
}
export const addToUsedCompareUnsafe= (product) => ({
    type: ADD_TO_USED_COMPARE,
    product
})
export const removeFromUsedCompare = product_id => ({
    type: REMOVE_FROM_USED_COMPARE,
    product_id
})
export const clearUsedCompare = ()=>({
    type: CLEAR_USED_COMPARE
})

/* reducer */
const usedCompareReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case ADD_TO_USED_COMPARE:
            const productId = action.product.usedCarId
            state.items = []
            if (state.items.findIndex(product => product.usedCarId === productId) !== -1) {
                const items = state.items.reduce((cartAcc, product) => {
                    if (product.usedCarId === productId) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, items }
            }

            return { ...state, items: [...state.items, action.product] }

        case REMOVE_FROM_USED_COMPARE:
            return {
                items: state.items.filter(id => id !== action.product_id)
            }
        case CLEAR_USED_COMPARE:
            return {
                items: []
            }
        default:
    }
    return state;
}

export const MyCarComparison = () => {
    const {first, symbol, Items} = useSelector((state) => ({
        first: state.firstCar.list,
        Items: state.usedCompare.items,
        symbol: state.data.symbol
    }))

    const dispatch = useDispatch()

    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return <>
        <Breadcrumb title={'Compare'} />
        {first.length>0 ?
            <section className="compare-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-row">
                                <div className="col">
                                    <div className="compare-part">
                                        {first.map((item) => {
                                            return (
                                                <>
                                                    <div className="img-section">
                                                        <img className="img-fluid" src={item.img.img1} alt=""/>
                                                    </div>
                                                    <div className="detail-part">
                                                        <div className="title-detail">
                                                            <h5>name</h5>
                                                        </div>
                                                        <div className="inner-detail">
                                                            <p>{item.carName}</p>
                                                        </div>
                                                    </div>
                                                    <div className="detail-part">
                                                        <div className="title-detail">
                                                            <h5>Brand</h5>
                                                        </div>
                                                        <div className="inner-detail">
                                                            <p>{item.brand}</p>
                                                        </div>
                                                    </div>
                                                    <div className="detail-part">
                                                        <div className="title-detail">
                                                            <h5>Trim</h5>
                                                        </div>
                                                        <div className="inner-detail">
                                                            <p>{item.trim}</p>
                                                        </div>
                                                    </div>
                                                    <div className="detail-part">
                                                        <div className="title-detail">
                                                            <h5>Age</h5>
                                                        </div>
                                                        <div className="inner-detail">
                                                            <p>{item.yyyy}년형 {item.age}</p>
                                                        </div>
                                                    </div>
                                                    <div className="detail-part">
                                                        <div className="title-detail">
                                                            <h5>Price</h5>
                                                        </div>
                                                        <div className="inner-detail">
                                                            <p>{item.price}{symbol}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="col">
                                {Items.map((item,index) =>
                                    <div key={index}>
                                        <div className="compare-part">
                                            <button type="button" className="close-btn" onClick={()=>{dispatch(removeFromUsedCompare(item))}}>
                                                <span aria-hidden="true">×</span>
                                            </button>
                                            <div className="img-section">
                                                <Link to={`${process.env.PUBLIC_URL}/used-car/product/${item.usedCarId}`}>
                                                    <img src={item.img.img1} className="img-fluid" alt="" />
                                                </Link>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>Name</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>{item.carName}</p>
                                                </div>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>Brand</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>{item.brand}</p>
                                                </div>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>Trim</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>{item.trim}</p>
                                                </div>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>Age</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>{item.yyyy}년형 {item.age}</p>
                                                </div>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>mileage</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>{item.mileage}</p>
                                                </div>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>Price</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>{item.price}{symbol}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )}
                                </div>
                                <div className="col-5">
                                    <h2>비교 차량 중고시세</h2>
                                    {Items.map((item,index) =>
                                        <>
                                            <MarketPrice product={item}/>
                                            <br/>
                                            <div className="text-right">
                                                <a className="btn btn-solid">
                                                    <Link to={`${process.env.PUBLIC_URL}/used-car/purchase/request/${item.usedCarId}`}>
                                                        구매요청
                                                    </Link>
                                                </a>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            :
            <section className="cart-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div >
                                <div className="col-sm-12 empty-cart-cls text-center">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/empty-compare.png`} className="img-fluid mb-4" alt="" />
                                    <h3>
                                        <strong>Compare List is Empty</strong>
                                    </h3>
                                    <h4>Explore more shortlist some items.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }
    </>
}
export default usedCompareReducer