import React, {useState} from 'react';
import {Helmet} from 'react-helmet'
import {Breadcrumb} from "../../common";
import {Filter,FilterBar,ProductListing} from "../index";
import StickyBox from "react-sticky-box";
import Slider from "react-slick";
import {Recent} from "../../board/items";

export const CollectionLeftSidebar = () => {
    const [layoutColumns, setLayoutColumns] = useState(6)
    const LayoutViewClicked = columns => { setLayoutColumns(columns) }
    const openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }
    return <>
        <div>
            <Helmet>
                <title>EV | Collection of Products</title>
                <meta name="description" content="EV" />
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
                                                    <Recent />
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