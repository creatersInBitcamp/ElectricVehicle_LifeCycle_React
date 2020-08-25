import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBrands, getMinMaxPrice} from "../../atomic/services/services";
import {filterBrand, filterPrice, filterSort} from '../../newCar'
import { SlideToggle } from 'react-slide-toggle';
import InputRange from "react-input-range";

const Filter = () => {
    const [value] = useState({ min: 100, max: 3500 })

    const { brands, prices, filters } = useSelector(state=>({
        brands: getBrands(state.usedData.products),
        prices: getMinMaxPrice(state.usedData.products),
        filters: state.filters
    }))

    useEffect(()=>{
        dispatch(filterPrice({value}))
        dispatch(filterBrand(brands))
        dispatch(filterSort(''))
    },[])

    const closeFilter = () => { document.querySelector(".collection-filter").style = "left: -365px"; }

    const clickBrandHandle = (event, brands) => {
        const index = brands.indexOf(event.target.value);

        if (event.target.checked)
            brands.push(event.target.value);
        else
            brands.splice(index, 1);

        dispatch(filterBrand(brands));
    }

    const filteredBrands = filters.brand;

    const dispatch = useDispatch()

    return <>
        <div className="collection-filter-block">
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
                                    filteredBrands.includes(brand)
                                    return (
                                        <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                            <input type="checkbox"
                                                   onClick={(e)=>clickBrandHandle(e,filteredBrands)}
                                                   value={brand}
                                                   defaultChecked={true}
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
            <SlideToggle>
                {({onToggle, setCollapsibleElement}) => (
                    <div className="collection-collapse-block open">
                        <h3 className="collapse-block-title" onClick={onToggle}>price</h3>
                        <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
                            <div className="collection-brand-filter">
                                <div className="custom-control custom-checkbox collection-filter-checkbox">
                                    <InputRange
                                        maxValue={prices.max-16500}
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
    </>
}
export default Filter