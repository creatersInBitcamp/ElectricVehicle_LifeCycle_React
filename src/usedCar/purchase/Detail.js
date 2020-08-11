import React, {useEffect, useState,useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import { useRouteMatch } from 'react-router-dom';
import Slider from 'react-slick';
import '../../common/index.scss';
import Breadcrumb from "../../common/breadcrumb";
import DetailsWithPrice from "./details-price";
import MyCar from "../compare/MyCar";
import {addToCart,addToCartUnsafe} from "../../newCar/page";
import {addToUsedWishlist} from "../wishlist/UsedCarWishlist";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {MarketPrice} from './MarketPrice'

export const productDetail = () => {
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


    useEffect(() => {
        setState({
            nav2: slider2.current
        });
    }, []);



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
                                                                <img src={vari.images}  className="img-fluid image_zoom_cls-0" />
                                                            </div>
                                                        ):
                                                        item.pictures.map((vari, index) =>
                                                            <div key={index}>
                                                                <img src={vari.images}  className="img-fluid image_zoom_cls-0" />
                                                            </div>
                                                        )}
                                                </Slider>
                                                <div className="row">
                                                    <div className="col-12 p-0">
                                                        <Slider {...productsnav} asNavFor={nav1} ref={slider => (slider2.current = slider)} className="slider-nav">
                                                            {item.variants?
                                                                item.variants.map((vari, index) =>
                                                                    <div key={index}>
                                                                        <img src={`${vari.images}`} key={index} alt=""  className="img-fluid" />
                                                                    </div>
                                                                ):
                                                                item.pictures.map((vari, index) =>
                                                                    <div key={index}>
                                                                        <img src={`${vari}`} key={index} alt=""  className="img-fluid" />
                                                                    </div>
                                                                )}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>
                                            <DetailsWithPrice symbol={symbol}
                                                              item={item}
                                                              navOne={nav1}
                                                              addToCartClicked={()=>dispatch(addToCart(item,1))}
                                                              BuynowClicked={()=>dispatch(addToCartUnsafe(item,1))}
                                                              addToWishlistClicked={()=>dispatch(addToUsedWishlist(item))} />
                                        </div>
                                    </div>
                                    <section className="tab-product m-0">
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-12">
                                                <Tabs className="tab-content nav-material">
                                                    <TabList className="nav nav-tabs nav-material">
                                                        <Tab className="nav-item">
                                    <span className="nav-link active">
                                        <i className="icofont icofont-ui-home"/>Description</span>
                                                            <div className="material-border"/>
                                                        </Tab>
                                                        <Tab className="nav-item">
                                                            <span className="nav-link" ><i className="icofont icofont-man-in-glasses"/>Details</span>
                                                            <div className="material-border"/>
                                                        </Tab>
                                                        <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"/>Chart</span>
                                                            <div className="material-border"/>
                                                        </Tab>
                                                        <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"/>Write Comments</span>
                                                            <div className="material-border"/>
                                                        </Tab>
                                                    </TabList>
                                                    <TabPanel className="tab-pane fade mt-4 show active">
                                                        <table className="table table-striped mb-0">
                                                            <tbody>
                                                            <tr>
                                                                <th>Ideal For :</th>
                                                                <td>Women's</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Pattern :</th>
                                                                <td>Embroidered</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Dress Fabric :</th>
                                                                <td>Silk</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Type :</th>
                                                                <td>Ghagra, Choli, Dupatta Set</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Neck :</th>
                                                                <td>Round Neck</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Sleeve :</th>
                                                                <td>3/4 Sleeve</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Work :</th>
                                                                <td>N/A</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <p className="mt-4 p-0">
                                                            판매자의 말
                                                        </p>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <div className="mt-4 text-center">
                                                            <MarketPrice/>
                                                        </div>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        {/* 댓글 리스트 */}
                                                        <MDBTable>
                                                            <MDBTableHead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th rowSpan={5}>댓글</th>
                                                                    <th>글쓴이</th>
                                                                </tr>
                                                            </MDBTableHead>
                                                            <MDBTableBody>
                                                                <td>1</td>
                                                                <td rowSpan={5}>test</td>
                                                                <td>김수빈</td>
                                                            </MDBTableBody>
                                                        </MDBTable>
                                                        {/* 댓글 쓰기 */}
                                                        <form className="theme-form mt-4">
                                                            <div className="form-row">
                                                                <h6>궁금한 점이 있다면 물어보세요!</h6>
                                                                <div className="col-md-12">
                                                                    <textarea className="form-control" placeholder="Wrire Your Question Here" id="exampleFormControlTextarea1" rows="6"/>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button className="btn btn-solid" type="submit">Submit YOur DetailContents</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </TabPanel>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> : ''}
            {/*Section End*/}
        </div>
    </>
}
