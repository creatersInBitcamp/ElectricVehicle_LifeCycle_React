import React, {useState} from 'react';
import StickyBox from "react-sticky-box";
import FilterBar from "../item/Filter-bar";
import ProductListing from "../item/Product-listing";
import {Filter} from "..";
import MyCar from "../item/MyCar";
import {Breadcrumb} from "../../common";

export const UsedPurchaseCollection = () => {
    const [layoutColumns, setLayoutColumns] = useState(3)
    const LayoutViewClicked = columns => { setLayoutColumns(columns) }

    return <>
        <Breadcrumb title={'Collection'}/>
        <section className="section-b-space">
            <div className="collection-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 collection-filter">
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <MyCar/>
                                <Filter/>
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
                                                                <FilterBar onLayoutViewClicked={(columns) => LayoutViewClicked(columns)} />
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
    </>
}
export default UsedPurchaseCollection