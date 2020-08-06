import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link, useRouteMatch} from 'react-router-dom'

import Slider from 'react-slick';
import Breadcrumb from '../common/breadcrumb';
import {addToCart} from "../cart/cartReducer";
import {removeFromUsedCompare} from '../usedCompare/usedcompareReducer'
import {MarketPrice} from "../usedPurchase";

const MyCarComparison = (props) => {
    const [quantity, setQuantity] = useState('')
    // const {Items, symbol} = useSelector(state=>({
    //     Items: state.usedcompare.items,
    //     symbol: state.data.symbol
    // }))
    const {params} = props.match

    const match = useRouteMatch(`/used-car/comparison/:id`)
    const {symbol, item} = useSelector((state) => {
        let productId = match.params.id
        return {
            item: state.usedcompare.items.find(el => el.id == productId),
            symbol: state.data.symbol
        }
    })

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
    };

    const changeQty = e => {
        setQuantity(parseInt(e.target.value))
    }
    return <>
        <div>
            <Breadcrumb title={'Compare'} />
            {item ?
                <section className="compare-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Slider {...settings} className="slide-4">
                                    <div className="compare-part">
                                        {/*<button type="button" className="close-btn" onClick={()=>{dispatch(removeFromCompare(item))}}>
                                            <span aria-hidden="true">×</span>
                                        </button>*/}
                                        <div className="img-secton">
                                            <img className="img-fluid"
                                                 src="https://imgauto-phinf.pstatic.net/20200205_218/auto_1580892688565gVui9_PNG/20200205175126_tJ5cbvuq.png?type=f567_410" alt=""/>
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
                                                <h5>discription</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>shortdetail</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>Brand Name</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>tag</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>size</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>size</p>
                                            </div>
                                        </div>
                                        <div className="detail-part">
                                            <div className="title-detail">
                                                <h5>color</h5>
                                            </div>
                                            <div className="inner-detail">
                                                <p>color</p>
                                            </div>
                                        </div>
                                        {/*<div className="btn-part">
                                            <a className="btn btn-solid" onClick={()=>{dispatch(addToCart(item, 1))}}>add to cart</a>
                                        </div>*/}
                                    </div>
                                    {item.map((item,index) =>
                                        <div key={index}>
                                            <div className="compare-part">
                                                <button type="button" className="close-btn" onClick={()=>{dispatch(removeFromUsedCompare(item))}}>
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                                <div className="img-secton">
                                                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${item.id}`}>
                                                        <img src={item.variants?
                                                            item.variants[0].images
                                                            :item.pictures[0]} className="img-fluid" alt="" />
                                                        <h5>{item.name}</h5>
                                                    </Link>
                                                    <h5>{symbol}{item.price}</h5>
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
                                                        <h5>discription</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>shortdetail</p>
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
                                                <div className="detail-part">
                                                    <div className="title-detail">
                                                        <h5>availability</h5>
                                                    </div>
                                                    <div className="inner-detail">
                                                        <p>In stock</p>
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
        </div>
    </>
}
export default MyCarComparison