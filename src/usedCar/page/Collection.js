import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import StickyBox from "react-sticky-box";
import InputRange from "react-input-range";
import { SlideToggle } from 'react-slide-toggle';
import FilterBar from "../item/filter-bar";
import ProductListing from "../item/product-listing";
import MyCar from "../item/MyCar";
import {Breadcrumb,NewProduct} from "../../common";
import {filterPrice} from "../item/UsedFilterReducer"
import {getMinMaxPrice} from "../../atomic/services/services";
import {getAllProducts} from "../item/UsedProductReducer";

export const UsedPurchaseCollection = () => {
    const [layoutColumns, setLayoutColumns] = useState(3)
    const LayoutViewClicked = columns => { setLayoutColumns(columns) }
    const { prices, filters } = useSelector(state=>({
        // ages: getAges(state.usedData.products),
        // mileages: getMileages(state.usedData.products),
        prices: getMinMaxPrice(state.usedData.products),
        filters: state.usedFilters
    }))

    useEffect(()=>{
        getAllProducts()
    })

    const closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    // const clickBrandHandle = (event, brands) => {
    //     const index = brands.indexOf(event.target.value);
    //     if (event.target.checked)
    //         brands.push(event.target.value) // push in array checked value
    //     else
    //         brands.splice(index, 1) // removed in array unchecked value
    //     dispatch(filterAge(ages))
    // }
    //
    // const colorHandle = (event, mileages) => {
    //     const elems = document.querySelectorAll(".color-selector ul li");
    //     [].forEach.call(elems, function(el) {
    //         el.classList.remove("active")
    //     })
    //     event.target.classList.add('active')
    //     dispatch(filterMileage(mileages))
    // }
    //
    // const filteredBrands = filters.brand

    const dispatch = useDispatch()

    return <>
        <Breadcrumb title={'Collection'}/>
        <section className="section-b-space">
            <div className="collection-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 collection-filter">
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <MyCar/>
                                <div className="collection-filter-block">
                                    {/*brand filter start*/}
                                    {/*<div className="collection-mobile-back">
                                        <span className="filter-back"
                                              onClick={(e) => closeFilter(e)} >
                                            <i className="fa fa-angle-left" aria-hidden="true"/>
                                            back
                                        </span>
                                    </div>
                                    <SlideToggle>
                                        {({onToggle, setCollapsibleElement}) => (
                                            <div className="collection-collapse-block">
                                                <h3 className="collapse-block-title" onClick={onToggle}>brand</h3>
                                                <div className="collection-collapse-block-content"  ref={setCollapsibleElement}>
                                                    <div className="collection-brand-filter">
                                                        {ages.map((age, index) => {
                                                            return (
                                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                                    <input type="checkbox"
                                                                           onClick={(e)=>clickBrandHandle(e,filteredBrands)}
                                                                           value={age}
                                                                           defaultChecked={filteredBrands.includes(age)}
                                                                           className="custom-control-input"
                                                                           id={age} />
                                                                    <label className="custom-control-label"
                                                                           htmlFor={age}>{age}</label>
                                                                </div> )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </SlideToggle>*/}

                                    {/*color filter start here*/}
                                    {/*<SlideToggle>
                                        {({onToggle, setCollapsibleElement}) => (
                                            <div className="collection-collapse-block">
                                                <h3 className="collapse-block-title" onClick={onToggle}>colors</h3>
                                                <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                                    <div className="color-selector">
                                                        <ul>
                                                            {mileages.map((mileage, index) => {
                                                                return (
                                                                    <li className={mileage}
                                                                        title={mileage}
                                                                        onClick={(e) => colorHandle(e, mileage)}
                                                                        key={index}/> )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </SlideToggle>*/}
                                    {/*price filter start here */}
                                    <SlideToggle>
                                        {({onToggle, setCollapsibleElement}) => (
                                            <div className="collection-collapse-block open">
                                                <h3 className="collapse-block-title" onClick={onToggle}>price</h3>
                                                <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
                                                    <div className="collection-brand-filter">
                                                        <div className="custom-control custom-checkbox collection-filter-checkbox">
                                                            <InputRange
                                                                maxValue={prices.max}
                                                                minValue={prices.min}
                                                                value={filters.value}
                                                                onChange={value => dispatch(filterPrice({ value }))} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </SlideToggle>
                                </div>
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
    </>
}
export default UsedPurchaseCollection