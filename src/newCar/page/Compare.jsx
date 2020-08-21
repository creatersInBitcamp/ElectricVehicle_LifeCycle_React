import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import {Breadcrumb} from '../../common';
import {addToCart} from "./cartReducer";
import {removeFromCompare} from './compareReducer'

/* component */
export const Compare = () => {
    const {Items, symbol} = useSelector(state=>({
        Items: state.compare.items,
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
    };

    return <>
        <div>
            <Breadcrumb title={'Compare'} />
            {Items.length>0 ?
                <section className="compare-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Slider {...settings} className="slide-4">
                                    {Items.map((item,index) =>
                                        <div key={index}>
                                            <div className="compare-part">
                                                <button type="button" className="close-btn" onClick={()=>{dispatch(removeFromCompare(item))}}>
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                                <div className="img-secton">
                                                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${Items.eccarId}`}>
                                                        <img src={item.img} className="img-fluid" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>car name</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <h5>{item.carName}</h5>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>price</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <h5><span className="money">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</span></h5>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>passengersNumber</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.passengersNumber}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>drivingMethod</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.drivingMethod}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>transmission</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.transmission}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>distanceDriven</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.distanceDriven}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>energy</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.energy}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>maximumOutput</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.maximumOutput}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>maximumTorque</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.maximumTorque}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>accelerationPerformance</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.accelerationPerformance}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>length</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.length}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>width</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.width}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>height</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.height}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>wheelBase</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.wheelBase}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>frontDistance</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.frontDistance}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>backDistance</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.backDistance}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>weight</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.weight}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>frontWheel</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.frontWheel}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>rearWheel</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.rearWheel}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>frontSuspension</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.frontSuspension}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>rearSuspension</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.rearSuspension}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>frontBraking</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.frontBraking}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>rearBraking</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.rearBraking}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>steering</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.steering}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>boostingCharge</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.boostingCharge}</p>
                                                    </div>
                                                </div>
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>slowCharging</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>{item.slowCharging}</p>
                                                    </div>
                                                </div>
                                                <div className="btn-part">
                                                    <a className="btn btn-solid" onClick={()=>{dispatch(addToCart(item))}}>add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                                <br/><br/>
                                <div className="row cart-buttons">
                                    <div className="col-6">
                                        <Link to={`${process.env.PUBLIC_URL}/new-car/collection`} className="btn btn-solid">continue shopping</Link>
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
        </div>
    </>
}
export default Compare