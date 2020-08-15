import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {toast} from "react-toastify";
import Slider from 'react-slick';
import {Breadcrumb} from "../../common";
import {MarketPrice} from "../item/MarketPrice";

/* types */
const ADD_TO_USED_COMPARE = 'ADD_TO_USED_COMPARE'
const REMOVE_FROM_USED_COMPARE = 'REMOVE_FROM_USED_COMPARE'

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

/* reducer */
const usedCompareReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case ADD_TO_USED_COMPARE:
            const productId = action.product.id
            if (state.items.findIndex(product => product.id === productId) !== -1) {
                const items = state.items.reduce((cartAcc, product) => {
                    if (product.id === productId) {
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

        default:
    }
    return state;
}

export const MyCarComparison = () => {
    const {myCar, symbol, Items} = useSelector((state) => ({
        myCar: state.myCar.list,
        Items: state.usedCompare.items,
        symbol: state.data.symbol
    }))

    const dispatch = useDispatch()

    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
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
        {Items.length>0 ?
            <section className="compare-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings} className="slide-4">
                                <div className="compare-part">
                                    {/*<button type="button" className="close-btn" onClick={()=>{dispatch(removeFromCompare(item))}}>
                                        <span aria-hidden="true">×</span>
                                    </button>*/}
                                    {myCar.map((item) => {
                                        return (
                                            <>
                                                <div className="img-section">
                                                    <img className="img-fluid" src={item.variants?
                                                        item.variants[0].images
                                                        :item.pictures[0]} alt=""/>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>name</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.name}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        market price
                                                    </div>
                                                    <div className="inner-detail">
                                                        <MarketPrice/>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>description</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>shortDetail</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>Brand Name</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.tags}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>size</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.size}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>color</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.colors}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}

                                    {/*<div className="btn-part">
                                        <a className="btn btn-solid" onClick={()=>{dispatch(addToCart(item, 1))}}>add to cart</a>
                                    </div>*/}
                                </div>
                                {Items.map((item,index) =>
                                    <div key={index}>
                                        <div className="compare-part">
                                            <button type="button" className="close-btn" onClick={()=>{dispatch(removeFromUsedCompare(item))}}>
                                                <span aria-hidden="true">×</span>
                                            </button>
                                            <div className="img-section">
                                                <img src={item.variants?
                                                    item.variants[0].images
                                                    :item.pictures[0]} className="img-fluid" alt="" />
                                                <Link to={`${process.env.PUBLIC_URL}/used-car/product/${item.id}`}>
                                                    <h5>{item.name}</h5>
                                                </Link>
                                                <h5>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</h5>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>name</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    market price
                                                </div>
                                                <div className="inner-detail">
                                                    <MarketPrice/>
                                                </div>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>description</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>shortDetail</p>
                                                </div>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>Brand Name</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>{item.tags}</p>
                                                </div>
                                            </div>
                                            <div className="detail-part">
                                                <div className="title-detail">
                                                    <h5>color</h5>
                                                </div>
                                                <div className="inner-detail">
                                                    <p>{item.colors}</p>
                                                </div>
                                            </div>
                                            <div className="btn-part">
                                                <a className="btn btn-solid">
                                                    <Link to={`${process.env.PUBLIC_URL}/used-car/purchase`}>
                                                        purchase request
                                                    </Link>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Slider>
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