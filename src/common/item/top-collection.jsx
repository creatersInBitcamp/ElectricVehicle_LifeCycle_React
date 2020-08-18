import React from 'react';
import Slider from 'react-slick';
import {useDispatch, useSelector} from 'react-redux'
import {getTrendingCollection} from '../../atomic/services/services'
import {ProductStyleFive} from '../index';
import {addToCart,addToWishlist,addToCompare} from "../../newCar";

export const TopCollection = () => {
    const {items,symbol} = useSelector((state)=>({
        items: getTrendingCollection(state.data.products),
        symbol: state.data.symbol
    }))
    let properties = {
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
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
                    slidesToShow:2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const dispatch = useDispatch()
    return <>

        <div>
            {/*Paragraph*/}
            <div className="title1  section-t-space">
                <h4>most</h4>
                <h2 className="title-inner1">popular</h2>
            </div>
            {/*Paragraph End*/}
            <section className="section-b-space p-t-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Slider {...properties} className="product-4 product-m no-arrow">
                                {
                                    items.map((product, index ) =>
                                    <div key={index}>
                                        {console.log(product)}
                                        <ProductStyleFive product={product} symbol={symbol}
                                                     onAddToCompareClicked={()=>{dispatch(addToCompare(product))}}
                                                     onAddToWishlistClicked={()=>{dispatch(addToWishlist(product))}}
                                                     onAddToCartClicked={()=>{dispatch(addToCart(product, 1))}} key={index} />
                                    </div>)
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}
export default TopCollection