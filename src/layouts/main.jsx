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
import LogoBlock from "./common/logo-block";

import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../atomic/services/script"

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
                        <div className="home home1 text-center" color={'red'}>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="slider-contain">
                                            <div>
                                                <h4>welcome to EV life cycle.</h4>
                                                <h1>news</h1>
                                                <Link to={`${process.env.PUBLIC_URL}/new-car/collection`} className="btn btn-solid">NEW now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="home home2 text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="slider-contain">
                                            <div>
                                                <h4>welcome to EV life cycle.</h4>
                                                <h1>used</h1>
                                                <Link to={`${process.env.PUBLIC_URL}/used-car/collection`} className="btn btn-solid">USED now</Link>
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
                                            <h4>같은 차, 다른 차, 내차 자랑.</h4>
                                            <h2>POST</h2>
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
            {/*service layout*/}
            {/*<div className="container">*/}
            {/*    <section className="service border-section small-section ">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-4 service-block">*/}
            {/*                <div className="media">*/}
            {/*                    <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />*/}
            {/*                    <div className="media-body">*/}
            {/*                        <h4>free shipping</h4>*/}
            {/*                        <p>free shipping world wide</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-4 service-block">*/}
            {/*                <div className="media">*/}
            {/*                    <div dangerouslySetInnerHTML={{ __html: svgservice }} />*/}
            {/*                    <div className="media-body">*/}
            {/*                        <h4>24 X 7 service</h4>*/}
            {/*                        <p>online service for new customer</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-4 service-block">*/}
            {/*                <div className="media">*/}
            {/*                    <div dangerouslySetInnerHTML={{ __html: svgoffer }} />*/}
            {/*                    <div className="media-body">*/}
            {/*                        <h4>festival offer</h4>*/}
            {/*                        <p>new online special festival offer</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*</div>*/}
            {/*Blog Section end*/}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title1 section-t-space">
                            <h4>Recent Story</h4>
                            <h2 className="title-inner1">from the Post</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/*logo section*/}
            <LogoBlock />
            {/*logo section end*/}
        </div>
    </>
}
export default Fashion;