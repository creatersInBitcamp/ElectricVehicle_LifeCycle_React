import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { SlideToggle } from 'react-slide-toggle';


const FILTER_BRAND = 'FILTER_BRAND'
const FILTER_COLOR = 'FILTER_COLOR'
const FILTER_PRICE = 'FILTER_PRICE'
const SORT_BY = 'SORT_BY'
// Get Unique Brands from Json Data
const getBrands = (products) => {
    var uniqueBrands = [];
    products.map((product, index) => {
        if (product.tags) {
            product.tags.map((tag) => {
                if (uniqueBrands.indexOf(tag) === -1) {
                    uniqueBrands.push(tag);
                }
            })
        }
    })
    //console.log(uniqueBrands)
    return uniqueBrands;
}
// Get Unique Colors from Json Data
const getColors = (products) => {
    var uniqueColors = [];
    products.map((product, index) => {
        if(product.colors) {
            product.colors.map((color) => {
                if (uniqueColors.indexOf(color) === -1) {
                    uniqueColors.push(color);
                }
            })
        }
    })
    //console.log(uniqueBrands)
    return uniqueColors;
}

// Filters
const filterBrand = (brand) => ({
    type: FILTER_BRAND,
    brand
});

const filterColor = (color) => ({
    type: FILTER_COLOR,
    color
});
const filterPrice = (value) => ({
    type: FILTER_PRICE,
    value
});
// Get Minimum and Maximum Prices from Json Data
const getMinMaxPrice = (products) => {
    let min = 100, max = 1000;

    products.map((product, index) => {
        let v = product.price;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    })

    return {'min':min, 'max':max};
}
const filtersReducerDefaultState = {
    brand: ["nike", "caprese", "lifestyle"],
    value: { min: 250, max: 950 },
    sortBy: ""
};

export const filtersReducer = (state = filtersReducerDefaultState, action) => {
    // console.log('Action Result');
    // console.log(action);
    switch (action.type) {
        case FILTER_BRAND:
            return {
                ...state,
                brand: action.brand
            };
        case FILTER_COLOR:
            return {
                ...state,
                color: action.color
            };
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



const Filter = (props) => {

    const [openFilter,setopenFilter] = useState(false)
    const brands = useSelector(state => getBrands(state.data.products))
    const colors = useSelector(state => getColors(state.data.products))
    const prices = useSelector(state => getMinMaxPrice(state.data.products))
    const filters = useSelector(state => state.filters)

    const closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    const clickBrandHendle = (event, brands) => {
        const index = {}
        // const index = brands.indexOf(event.target.value) || '-';
        // if (event.target.checked)
        //     brands.push(event.target.value); // push in array checked value
        // else
        //     brands.splice(index, 1); // removed in array unchecked value
        // props.filterBrand(brands);
    }

    const colorHandle = (event, color) => {
        var elems = document.querySelectorAll(".color-selector ul li");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        event.target.classList.add('active');
        filterColor(color)
    }

        const filteredBrands = filtersReducer.brand;
        //console.log(this.props.brands);
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
                                                    <input type="checkbox" onClick={(e) => clickBrandHendle(e,filteredBrands)} value={brand} defaultChecked={filtersReducer.brand? true : false}  className="custom-control-input" id={brand} />
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
                                                    <li className={color} title={color} onClick={(e) => colorHandle(e, color)} key={index}></li> )
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
                                                value={filtersReducer.value}
                                                onChange={value => filterPrice({ value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>
                </div>
        )

}



// const mapStateToProps = state => ({
//     brands: getBrands(state.data.products),
//     colors: getColors(state.data.products),
//     prices: getMinMaxPrice(state.data.products),
//     filters: state.filters
// })
// export default connect(
//     mapStateToProps,
//     { filterBrand, filterColor, filterPrice }
// )(Filter);

export default Filter