import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMinMaxUsedPrice} from "../../atomic/services/services";
import { SlideToggle } from 'react-slide-toggle';
import InputRange from "react-input-range";
import {usedCars} from "./UsedProductReducer";

const FILTER_BRAND = 'FILTER_BRAND'
const FILTER_PRICE = 'FILTER_PRICE'
const SORT_BY = 'SORT_BY'

const filterBrand = (brand) => ({
    type: FILTER_BRAND,
    brand
});
const filterPrice = (value) => ({
    type: FILTER_PRICE,
    value
});
const filterSort = (sort_by) => ({
    type: SORT_BY,
    sort_by
});

export const filtersReducerDefaultState = {
    usedBrand: ["르노삼성"],
    value: { min: 100, max: 5000 },
    sortBy: ""
};

const usedFiltersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case FILTER_BRAND:
            return {
                ...state,
                usedBrand: action.brand
            }
        case FILTER_PRICE:
            return {
                ...state,
                value: {min: action.value.value.min, max: action.value.value.max }
            };

        case SORT_BY:
            return {
                ...state,
                sortBy: action.sort_by
            };
        default:
            return state;
    }
}

export const Filter = () => {
    const [items,setItems] = useState([])

    useEffect(()=>{
        usedCars().then(r => setItems(r))
    },[])

    const { usedFilters } = useSelector(state=>({
        usedFilters: state.usedFilters
    }))

    const prices = getMinMaxUsedPrice(items)

    const filteredBrands = usedFilters.usedBrand

    const closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    const getUsedBrands = (products) => {
        const uniqueBrands = [];
        products.map((product, index) => {
            if (product.usedBrand) {
                if (uniqueBrands.indexOf(product.usedBrand) === -1) {
                    uniqueBrands.push(product.usedBrand);
                }
            }
        })
        console.log(uniqueBrands)
        return uniqueBrands;
    }
    const brands = getUsedBrands(items)

    const clickBrandHandle = (event, brands) => (dispatch) => {
        const index = brands.indexOf(event.target.value);
        if (event.target.checked)
            brands.push(event.target.value) // push in array checked value
        else
            brands.splice(index, 1) // removed in array unchecked value
        dispatch(filterBrand(brands))
    }

    const dispatch = useDispatch()

    return <>
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
                                                   defaultChecked={getUsedBrands(items).includes(brand)}
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
                                        value={usedFilters.value}
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
export default usedFiltersReducer