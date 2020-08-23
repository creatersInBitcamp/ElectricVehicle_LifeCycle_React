import React, {useEffect, useState,useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useRouteMatch} from 'react-router-dom';
import axios from "axios";
import Slider from 'react-slick';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import '../../common/index.scss';
import {Breadcrumb, NewProduct} from "../../common";
import {MyCar,MarketPrice} from "../index";
import {addToUsedWishlist} from "./UsedCarWishlist";

const sessionUser = JSON.parse(sessionStorage.getItem('user'))

export const productDetail = (props) => {
    const [user] = useState(sessionUser)
    const [state, setState] = useState({ nav1: null, nav2: null });

    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        })
    }, [])

    const { nav1, nav2 } = state;

    const match = useRouteMatch('/used-car/product/:usedCarId')
    const {symbol, item} = useSelector((state)=>{
        let productId = match.params.usedCarId
        return {
            item: state.usedData.products.find(el => el.usedCarId == productId),
            symbol: state.usedData.symbol
        }
    })

    const products = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true
    }
    const productsNav = {
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        focusOnSelect: true
    }
    const backClick = () => {
        document.getElementById("filter").style.left = "-365px";
    }

    const onClickDelete = () => {
        if (window.confirm('삭제하시겠습니까?')) {
            axios.get(`http://localhost:8080/usedCars/delete/${item.usedCarId}`)
                .then(alert('삭제되었습니다.'), props.history.push(`${process.env.PUBLIC_URL}/used-car/collection`))
                .catch(()=>{
                    alert('취소되었습니다.')
                })
        } else {

        }
    }

    const dispatch = useDispatch()

    return <>
        <div>
            <Breadcrumb parent={'Product'} title={item.carName} />
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
                                    <NewProduct/>
                                </div>
                                <div className="col-lg-9 col-sm-12 col-xs-12">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-lg-6 product-thumbnail">
                                                <Slider {...products} asNavFor={nav2} ref={slider => (slider1.current = slider)} className="product-slick">
                                                    <img src={item.img.img1} className="img-fluid image_zoom_cls-0" alt={""} />
                                                    <img src={item.img.img2} className="img-fluid image_zoom_cls-0" alt={""} />
                                                    <img src={item.img.img3} className="img-fluid image_zoom_cls-0" alt={""} />
                                                    <img src={item.img.img4} className="img-fluid image_zoom_cls-0" alt={""} />
                                                </Slider>
                                                <div className="row">
                                                    <div className="col-12 p-0">
                                                        <Slider {...productsNav} asNavFor={nav1} ref={slider => (slider2.current = slider)} className="slider-nav">
                                                            <img src={`${item.img.img1}`} className="img-fluid image_zoom_cls-0" alt={""} />
                                                            <img src={`${item.img.img2}`} className="img-fluid image_zoom_cls-0" alt={""} />
                                                            <img src={`${item.img.img3}`} className="img-fluid image_zoom_cls-0" alt={""} />
                                                            <img src={`${item.img.img4}`} className="img-fluid image_zoom_cls-0" alt={""} />
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 rtl-text">
                                                <div className="product-right">
                                                    <h2> {item.carName} </h2>
                                                    <h3>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol} </h3>
                                                    <div className="product-description border-product">
                                                        <div className="qty-box">
                                                            <MarketPrice product={item}/>
                                                        </div>
                                                    </div>
                                                    <div className="product-buttons" >
                                                        <Link to={`${process.env.PUBLIC_URL}/used-car/purchase/request/${item.usedCarId}`}
                                                              className="btn btn-solid" >purchase request</Link>
                                                    </div>
                                                    <div className="border-product">
                                                        <div className="product-icon">
                                                            <button className="wishlist-btn" onClick={()=>dispatch(addToUsedWishlist(item))}><i
                                                                className="fa fa-heart"/><span
                                                                className="title-font">Add To WishList</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="border-product"/>
                                                </div>
                                            </div>
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
                                                            <span className="nav-link active">
                                                                <i className="icofont icofont-ui-home"/>
                                                                Details
                                                            </span>
                                                            <div className="material-border"/>
                                                        </Tab>
                                                        <Tab className="nav-item">
                                                            <span className="nav-link" >
                                                                <i className="icofont icofont-contacts"/>
                                                                Chart
                                                            </span>
                                                            <div className="material-border"/>
                                                        </Tab>
                                                    </TabList>
                                                    <TabPanel className="tab-pane fade mt-4 show active">
                                                        <p className="mt-4 p-0">
                                                            {item.pictures.map((vari, index) =>{
                                                                if(vari !== ""){
                                                                    return (
                                                                        <div key={index}>
                                                                            <img width={1000} height={300} src={`${vari}`} key={index} alt=""  className="img-fluid" />
                                                                            <br/><br/>
                                                                        </div>
                                                                    )
                                                                }
                                                            })}
                                                        </p>
                                                    </TabPanel>
                                                    <TabPanel className="tab-pane fade mt-4 show active">
                                                        <table className="table table-striped mb-0">
                                                            <tbody>
                                                            <tr>
                                                                <th>브랜드 :</th>
                                                                <td>{item.brand}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>연형 :</th>
                                                                <td>{item.yyyy}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>모델명 :</th>
                                                                <td>{item.modelName}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>트림 :</th>
                                                                <td>{item.trim}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>연식 :</th>
                                                                <td>{item.age}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>주행거리 :</th>
                                                                <td>{item.mileage}</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <div className="mt-4 text-center">
                                                            <MarketPrice product={item}/>
                                                        </div>
                                                    </TabPanel>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </section>
                                    { user !== null && (user.userSeq === item.user.userSeq) ?
                                        <div className="text-right">
                                            <Link to={`${process.env.PUBLIC_URL}/used-car/product/update/${item.usedCarId}`}>
                                                <button className="btn-solid btn">수정</button>&nbsp;
                                            </Link>
                                            <button onClick={onClickDelete} className="btn-solid btn">삭제</button>
                                        </div>
                                        :''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section> : ''}
        </div>
    </>
}
