import React, {useEffect, useState,useRef} from 'react';
import Slider from 'react-slick';
import '../common/index.scss';
import {useDispatch, useSelector} from "react-redux";
import { useRouteMatch } from 'react-router-dom';

// import custom Components
import NewProduct from "../common/new-product";
import Breadcrumb from "../common/breadcrumb";
import DetailsWithPrice from "./common/product/details-price";
import ImageZoom from './common/product/image-zoom'
import SmallImages from './common/product/small-image'
import MyCar from "./MyCar";
import DetailedContents from "./DetailedContents";
import {addToCart} from "../cart/cartReducer";
import {addToCartUnsafe} from "../cart/cartReducer";
import {addToUsedWishlist} from "../usedWishlist/usedwishlistReducer";

const productDetail = () => {
    const [state, setState] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, []);

    const { nav1, nav2 } = state;

    const match = useRouteMatch('/used-car/product/:id')
    const {symbol, item} = useSelector((state) => {
        let productId = match.params.id
        return {
            item: state.data.products.find(el => el.id == productId),
            symbol: state.data.symbol
        }
    })

    const products = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true
    };
    const productsnav = {
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        focusOnSelect: true
    };

    const backClick = () => {
        document.getElementById("filter").style.left = "-365px";
    }
    const dispatch = useDispatch()
    return <>
        <div>
            <Breadcrumb parent={'Product'} title={item.name} />

            {/*Section Start*/}
            {(item)?
                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">

                                <div className="col-sm-3 collection-filter" id="filter">
                                    <div  className="collection-mobile-back pl-5">
                                        <span onClick={backClick}  className="filter-back">
                                            <i className="fa fa-angle-left" aria-hidden="true"/> back
                                        </span>
                                    </div>
                                    <MyCar/>
                                    {/* post */}
                                    {/* video */}
                                </div>
                                <div className="col-lg-9 col-sm-12 col-xs-12">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-lg-6 product-thumbnail">
                                                <Slider {...products} asNavFor={nav2} ref={slider => (slider1.current = slider)} className="product-slick">
                                                    {item.variants?
                                                        item.variants.map((vari, index) =>
                                                            <div key={index}>
                                                                <ImageZoom image={vari.images} />
                                                            </div>
                                                        ):
                                                        item.pictures.map((vari, index) =>
                                                            <div key={index}>
                                                                <ImageZoom image={vari} />
                                                            </div>
                                                        )}
                                                </Slider>
                                                <SmallImages item={item} settings={productsnav} navOne={nav1} />
                                            </div>
                                            <DetailsWithPrice symbol={symbol} item={item} navOne={nav1} addToCartClicked={()=>dispatch(addToCart(item,1))} BuynowClicked={()=>dispatch(addToCartUnsafe(item,1))} addToWishlistClicked={()=>dispatch(addToUsedWishlist(item))} />
                                        </div>
                                    </div>
                                    <DetailedContents item={item} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> : ''}
            {/*Section End*/}
        </div>
    </>
}

export default productDetail