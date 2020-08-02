import React, {Component, useState} from 'react';
import {Helmet} from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "./common/filter";
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";

const Purchase = () => {
    const [layoutColumns,setlayoutColumns] =useState(3)
    const LayoutViewClicked = (colums) => {
        setlayoutColumns(colums)
    }
    const openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }
    return (
        <div>
            {/*SEO Support*/}
            <Helmet>
                <title>MultiKart | Collection of Products</title>
                <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
            </Helmet>
            {/*SEO Support End */}
            <Breadcrumb title={'Collection'}/>

            <section className="section-b-space">
                <div className="collection-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 collection-filter">

                                <StickyBox offsetTop={20} offsetBottom={20}>
                                    <div>
                                        <Filter/>
                                        <NewProduct/>
                                        <div className="collection-sidebar-banner">
                                            <a href="#">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/side-banner.png`} className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </StickyBox>
                                {/*side-bar banner end here*/}
                            </div>
                            <div className="collection-content col">
                                <div className="page-main-content ">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="top-banner-wrapper">
                                                    <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/carimg/그랜저배경.png`} className="img-fluid" alt=""/></a>
                                                    <div className="top-banner-content small-section">
                                                        <h4>친환경</h4>
                                                        <h5>전기차의 작동원리</h5>
                                                        <p>전기차는 고전압 배터리에서 전기에너지를 전기모터로 공급하여 구동력을 발생시키는 차량으로, 화석연료를 전혀 사용하지 않는 무공해 차량입니다</p>
                                                    </div>
                                                </div>
                                                <div className="collection-product-wrapper">
                                                    <div className="product-top-filter">
                                                        <div className="container-fluid p-0">
                                                            <div className="row">
                                                                <div className="col-xl-12">
                                                                    <div className="filter-main-btn">
                                                                            <span onClick={openFilter}
                                                                                  className="filter-btn btn btn-theme"><i
                                                                                className="fa fa-filter"
                                                                                aria-hidden="true"></i> Filter</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <FilterBar onLayoutViewClicked={(colmuns) => LayoutViewClicked(colmuns)}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/*Products Listing Component*/}
                                                    <ProductListing colSize={layoutColumns}/>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Purchase;