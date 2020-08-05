import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet'
import '../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import mapimg from '../assets/images/mainPage/mapimg.png'
import communityimg from '../assets/images/mainPage/community.jpg'

// Import custom components
import TopCollection from './top-collection';
import SpecialProducts from "./common/products";

const Fashion = () => {
    useEffect(()=>{
        document.getElementById("color").setAttribute("href", `#` );
    })
    return <>
        <div>
            <Helmet>
                <title>ElectricVehicle | LifeCycle</title>
                <meta name="description" content="ElectricVehicle_LifeCycle" />
            </Helmet>
            {/*Home Slider*/}
            <section className="p-0">
                <Slider className="slide-1 home-slider" >
                    <div>
                        <div className="home home2 text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="slider-contain">
                                            <div>
                                                <h4>Why Eelectric Vehicle?.</h4>
                                                <h1>Why?</h1>
                                                <Link to={`${process.env.PUBLIC_URL}/pages/about-us`} className="btn btn-solid">Intro</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
            {/*Home Section End*/}
            {/*collection banner*/}
            <section className="pb-0">
                <div className="container">
                    <div className="row partition2">
                        <div className="col-md-6">
                            <Link to={`${process.env.PUBLIC_URL}/service`}>
                                <div className="collection-banner p-right text-center">
                                    <img src={mapimg} className="img-fluid" alt=""/>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>전국 방방 곳곳.</h4>
                                            <h2>MAP</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to={`${process.env.PUBLIC_URL}/post/main`}>
                                <div className="collection-banner p-right text-center">
                                    <img src={communityimg} className="img-fluid" alt=""/>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>손에 잡히는 전기차 정보</h4>
                                            <h2>NEWS</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*collection banner end*/}
            <TopCollection type={'women'} />
            {/*Parallax banner*/}
            <section className="p-0">
                <div className="full-banner parallax-banner1 parallax text-center p-left">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="banner-contain">
                                    <h2>2020</h2>
                                    <h3>ElectricVehicle trends</h3>
                                    <h4>special offer</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Parallax banner End*/}
            <SpecialProducts />
        </div>
    </>
}
export default Fashion;