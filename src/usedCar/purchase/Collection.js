import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import StickyBox from "react-sticky-box";
import InputRange from "react-input-range";
import { SlideToggle } from 'react-slide-toggle';
import Breadcrumb from "../../common/breadcrumb";
import NewProduct from "../../common/new-product";
import FilterBar from "./filter-bar";
import ProductListing from "./product-listing";
import MyCar from "../compare/MyCar";
import {filterBrand, filterColor, filterPrice} from "../../common/items/filters";
import {getBrands, getColors, getMinMaxPrice} from "../../atomic/services/services";

export const UsedPurchaseCollection = () => {
    const [layoutColumns, setLayoutColumns] = useState(3)
    const LayoutViewClicked = columns => { setLayoutColumns(columns) }
    const { brands, colors, prices, filters } = useSelector(state=>({
        brands: getBrands(state.data.products),
        colors: getColors(state.data.products),
        prices: getMinMaxPrice(state.data.products),
        filters: state.filters
    }))

    const closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    const clickBrandHandle = (event, brands) => {
        const index = brands.indexOf(event.target.value);
        if (event.target.checked)
            brands.push(event.target.value) // push in array checked value
        else
            brands.splice(index, 1) // removed in array unchecked value
        dispatch(filterBrand(brands))
    }

    const colorHandle = (event, color) => {
        const elems = document.querySelectorAll(".color-selector ul li");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active")
        })
        event.target.classList.add('active')
        dispatch(filterColor(color))
    }

    const filteredBrands = filters.brand

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
                                    <div className="collection-mobile-back">
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
                                                        {brands.map((brand, index) => {
                                                            return (
                                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                                    <input type="checkbox"
                                                                           onClick={(e)=>clickBrandHandle(e,filteredBrands)}
                                                                           value={brand}
                                                                           defaultChecked={filteredBrands.includes(brand)}
                                                                           className="custom-control-input"
                                                                           id={brand} />
                                                                    <label className="custom-control-label"
                                                                           htmlFor={brand}>{brand}</label>
                                                                </div> )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </SlideToggle>

                                    {/*color filter start here*/}
                                    <SlideToggle>
                                        {({onToggle, setCollapsibleElement}) => (
                                            <div className="collection-collapse-block">
                                                <h3 className="collapse-block-title" onClick={onToggle}>colors</h3>
                                                <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                                    <div className="color-selector">
                                                        <ul>
                                                            {colors.map((color, index) => {
                                                                return (
                                                                    <li className={color}
                                                                        title={color}
                                                                        onClick={(e) => colorHandle(e, color)}
                                                                        key={index}/> )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </SlideToggle>
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