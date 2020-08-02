import React from 'react';
import { useSelector} from 'react-redux'
// import {filterSort} from '../../atomic/actions'
// import {getVisibleproducts} from '../../atomic/services';
// import * as types from "../../atomic/constants/ActionTypes";

export const SORT_BY = 'SORT_BY'

export const filterSort = (sort_by) => ({
    type: SORT_BY,
    sort_by
});
export const getVisibleproducts = (data, { brand, color, value, sortBy }) => {
    return data.products.filter(product => {

        let brandMatch;
        if(product.tags)
            brandMatch = product.tags.some(tag => brand.includes(tag))
        else
            brandMatch = true;

        let colorMatch;
        if(color && product.colors) {
            colorMatch = product.colors.includes(color)
        }else{
            colorMatch = true;
        }

        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        return brandMatch && colorMatch && startPriceMatch && endPriceMatch;
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.name.localeCompare(product2.name);
        } else if (sortBy === 'DescOrder') {
            return product2.name.localeCompare(product1.name);
        } else{
            return product2.id > product1.id ? -1 : 1;
        }
    });
}

const  FilterBar = () => {
    const products = useSelector(state => getVisibleproducts(state.data, state.filters))
    const filters = useSelector(state => state.filters)

    //List Layout View
    const listLayout = () => {
        document.querySelector(".collection-grid-view").style = "opacity:0";
        document.querySelector(".product-wrapper-grid").style = "opacity:0.2";
        document.querySelector(".product-wrapper-grid").classList.add("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-12');
        });
        setTimeout(function(){
            document.querySelector(".product-wrapper-grid").style = "opacity: 1";
        }, 500);
    }

    //Grid Layout View
    const gridLayout = () =>{
        document.querySelector(".collection-grid-view").style = "opacity:1";
        document.querySelector(".product-wrapper-grid").classList.remove("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-3');
        });
    }

    // Layout Column View
    const LayoutView = (colSize) =>{
        if(!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
            var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
            [].forEach.call(elems, function(el) {
                el.className = '';
                el.classList.add('col-lg-'+colSize);
            });
        }

        // props.onLayoutViewClicked(colSize);
    }
        return (
            <div className="product-filter-content">
                <div className="search-count">
                    <h5>Showing Products 1-{products.length} Result</h5>
                </div>
                <div className="collection-view">
                    <ul>
                        <li><i
                            className="fa fa-th grid-layout-view" onClick={gridLayout}></i>
                        </li>
                        <li><i
                            className="fa fa-list-ul list-layout-view" onClick={listLayout}></i>
                        </li>
                    </ul>
                </div>
                <div className="collection-grid-view">
                    <ul>
                        <li>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/2.png`}
                                alt=""
                                className="product-2-layout-view" onClick={() => LayoutView(6)} />
                        </li>
                        <li>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/3.png`}
                                alt=""
                                className="product-3-layout-view" onClick={() => LayoutView(4)} />
                        </li>
                        <li>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/4.png`}
                                alt=""
                                className="product-4-layout-view" onClick={() =>LayoutView(3)} />
                        </li>
                        <li>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/6.png`}
                                alt=""
                                className="product-6-layout-view" onClick={() => LayoutView(2)} />
                        </li>
                    </ul>
                </div>
                <div className="product-page-filter">
                    <select onChange={(e) => filterSort(e.target.value)}>
                        <option value="">Sorting items</option>
                        <option value="HighToLow">Price: High to Low</option>
                        <option value="LowToHigh">Price: Low to High</option>
                        <option value="Newest">Newest Items</option>
                        <option value="AscOrder">Sort By Name: A To Z</option>
                        <option value="DescOrder">Sort By Name: Z To A</option>
                    </select>
                </div>
            </div>
        )

}


export default FilterBar
// const mapStateToProps = state => ({
//     products: getVisibleproducts(state.data, state.filters),
//     filters: state.filters
// })

// export default connect(mapStateToProps, {filterSort})(FilterBar);
