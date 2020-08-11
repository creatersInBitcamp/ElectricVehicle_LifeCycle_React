import React, {useEffect, useState,useRef} from 'react';
import Slider from 'react-slick';
import '../../common/index.scss';
import {useDispatch, useSelector} from "react-redux";
import { useRouteMatch } from 'react-router-dom';

// import custom Components
import Breadcrumb from "../../common/breadcrumb";
import {DetailsWithPrice,DetailsTopTabs,ImageZoom,SmallImages} from "../index";
import {addToCart} from "./cartReducer";
import {addToCartUnsafe} from "./cartReducer";
import {addToWishlist} from "./wishlistReducer";
import {Recent} from "../../board/items";

const initinalState = [
        {
            postId: 1,
            userId: "tedd911",
            title: "쏘울(SOUL) EV 시승기 – 감성과 테크놀로지의 조화",
            name: "이형태",
            link: "https://www.evpost.co.kr/wp/쏘울soul-ev-시승기-감성과-테크놀로지의-조화/",
            img: "https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2020/05/13112107/05-13-%ED%95%9C%EC%9A%A9%EB%8D%95-%EC%8F%98%EC%9A%B8-EV-%EC%8B%9C%EC%8A%B9%EA%B8%B0-%EA%B0%90%EC%84%B1%EA%B3%BC-%ED%85%8C%ED%81%AC%EB%86%80%EB%A1%9C%EC%A7%80%EC%9D%98-%EC%A1%B0%ED%99%94-696x365.jpg",
            hits: 123,
            like: 12,
            content: 'post 글쓴이의 글',
            comments: [
                {
                    commentId: 1,
                    userId: 'wnsghk16',
                    comment: '코멘트 출력 테스트'
                },
                {
                    commentId: 2,
                    userId: 'tedd911',
                    comment: '코멘트 출력 테스트2'
                },
                {
                    commentId: 3,
                    userId: 'karkky',
                    comment: '다시 연습 중.'
                }
            ],
            dateTime: "time",
        },
    ]

export const LeftSideBar = () => {
    const [state, setState] = useState({ nav1: null, nav2: null });
    const [posts, setposts] = useState(initinalState)
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, []);

    const { nav1, nav2 } = state;

    const match = useRouteMatch('/new-car/product/:id')

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
                                    {/*side-bar single product slider start*/}
                                    <div className="theme-card">
                                        <h5 className="title-border">Recent Post</h5>
                                        <Slider className="offer-slider slide-1">
                                            <div className="theme-card">
                                                <ul className="recent-blog">
                                                    <Recent posts={posts} />
                                                </ul>
                                            </div>
                                        </Slider>
                                    </div>
                                    {/*side-bar single product slider end*/}
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
                                            <DetailsWithPrice symbol={symbol} item={item} navOne={nav1} addToCartClicked={()=>dispatch(addToCart(item,1))} BuynowClicked={()=>dispatch(addToCartUnsafe(item,1))} addToWishlistClicked={()=>dispatch(addToWishlist(item))} />
                                        </div>
                                    </div>
                                    <DetailsTopTabs item={item} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> : ''}
            {/*Section End*/}
        </div>
    </>
}

export default LeftSideBar