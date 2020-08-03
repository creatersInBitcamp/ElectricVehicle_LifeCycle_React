import React, {useState} from 'react';
import {Helmet} from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "./common/filter";
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";
import MyCar from "./MyCar";

export const UsedPurchaseCollection = () => {
    const [layoutColumns, setLayoutColumns] = useState(3)
    const LayoutViewClicked = columns => { setLayoutColumns(columns) }
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
                                    <MyCar/>
                                    <Filter/>
                                    <NewProduct/>
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

export default UsedPurchaseCollection