import React, {useState} from 'react';
import {Helmet} from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "./common/filter";
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {posts} from "../board/data";
import Recent from "../board/classic/recent";

export const CollectionLeftSidebar = () => {
    const [layoutColumns, setLayoutColumns] = useState(3)
    const LayoutViewClicked = columns => { setLayoutColumns(columns) }
    const openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }
    return <>
        <div>
            <Helmet>
                <title>MultiKart | Collection of Products</title>
                <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
            </Helmet>

            <Breadcrumb title={'Collection'}/>

            <section className="section-b-space">
                <div className="collection-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 collection-filter">
                                <StickyBox offsetTop={20} offsetBottom={20}>
                                    <Filter/>
                                    <div className="theme-card">
                                        <h5 className="title-border">Recent Post</h5>
                                        <Slider className="offer-slider slide-1">
                                            <div className="theme-card">
                                                <ul className="recent-blog">
                                                    {
                                                        posts.map(post => {
                                                            if (post.postId < 5) {
                                                                return (
                                                                    <Recent post={post} key={post.postId}/>
                                                                )
                                                            }
                                                            return null
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </Slider>
                                    </div>
                                </StickyBox>
                            </div>
                            <div className="collection-content col">
                                <div className="page-main-content ">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-sm-12">

                                                <div className="collection-product-wrapper">
                                                    <div className="product-top-filter">
                                                        <div className="container-fluid p-0">
                                                            <div className="row">
                                                                <div className="col-xl-12">
                                                                    <div className="filter-main-btn">
                                                                            <span onClick={openFilter}
                                                                                  className="filter-btn btn btn-theme"><i
                                                                                className="fa fa-filter"
                                                                                aria-hidden="true"/> Filter</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <FilterBar onLayoutViewClicked={(columns) => LayoutViewClicked(columns)}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
    </>
}

export default CollectionLeftSidebar