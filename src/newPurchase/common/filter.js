import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { SlideToggle } from 'react-slide-toggle';

import {getBrands, getColors, getMinMaxPrice} from '../../atomic/services';
import {filterBrand, filterColor, filterPrice} from '../../filters'

const Filter = () => {
    // const [openFilter, setOpenFilter] = useState(false)

    const { brands, colors, prices, filters } = useSelector(state=>({
        brands: getBrands(state.data.products),
        colors: getColors(state.data.products),
        prices: getMinMaxPrice(state.data.products),
        filters: state.filters
    }))

    const closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    const clickBrandHendle = (event, brands) => {

        const index = brands.indexOf(event.target.value);
        if (event.target.checked)
            brands.push(event.target.value); // push in array checked value
        else
            brands.splice(index, 1); // removed in array unchecked value

        dispatch(filterBrand(brands));
    }

    const colorHandle = (event, color) => {
        const elems = document.querySelectorAll(".color-selector ul li");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        event.target.classList.add('active');
        dispatch(filterColor(color))
    }

    const filteredBrands = filters.brand;
    const dispatch = useDispatch()
    return (
        <div className="collection-filter-block">
            {/*brand filter start*/}
            <div className="collection-mobile-back">
                        <span className="filter-back" onClick={(e) => closeFilter(e)} >
                            <i className="fa fa-angle-left" aria-hidden="true"/> back
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
                                            <input type="checkbox" onClick={(e)=>clickBrandHendle(e,filteredBrands)} value={brand} defaultChecked={filteredBrands.includes(brand)} className="custom-control-input" id={brand} />
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
                                            <li className={color} title={color} onClick={(e) => colorHandle(e, color)} key={index}/> )
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
    )
}
export default Filter




