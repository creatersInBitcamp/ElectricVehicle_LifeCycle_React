import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {filterSort} from '../../newCar'
import {getVisibleUsedProducts} from "../../atomic/services/services";

const FilterBar = ({onLayoutViewClicked}) => {
    const {items} = useSelector((state) => ({
        items: getVisibleUsedProducts(state.usedData, state.filters)
    }))

    const listLayout = () => {
        document.querySelector(".collection-grid-view").style = "opacity:0";
        document.querySelector(".product-wrapper-grid").style = "opacity:0.2";
        document.querySelector(".product-wrapper-grid").classList.add("list-view");
        const elem = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elem, function(el) {
            el.className = '';
            el.classList.add('col-lg-12');
        })
        setTimeout(()=>{
            document.querySelector(".product-wrapper-grid").style = "opacity: 1";
        }, 500)
    }

    const gridLayout = () => {
        document.querySelector(".collection-grid-view").style = "opacity:1";
        document.querySelector(".product-wrapper-grid").classList.remove("list-view");
        const elem = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elem, function(el) {
            el.className = '';
            el.classList.add('col-lg-3');
        })
    }

    const LayoutView = colSize =>{
        if(!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
            const elem = document.querySelector(".infinite-scroll-component .row").childNodes;
            [].forEach.call(elem, function(el) {
                el.className = '';
                el.classList.add('col-lg-'+colSize);
            })
        }
        onLayoutViewClicked(colSize);
    }

    const dispatch = useDispatch()

    return <>
        <div className="product-filter-content">
            <div className="search-count">
                <h5>Showing Products 1-{items.length} Result</h5>
            </div>
            <div className="collection-view">
                <ul>
                    <li><i className="fa fa-th grid-layout-view" onClick={gridLayout}/></li>
                    <li><i className="fa fa-list-ul list-layout-view" onClick={listLayout}/></li>
                </ul>
            </div>
            <div className="collection-grid-view">
                <ul>
                    <li>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/icon/2.png`}
                            alt=""
                            className="product-2-layout-view" onClick={()=>LayoutView(6)} />
                    </li>
                    <li>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/icon/3.png`}
                            alt=""
                            className="product-3-layout-view" onClick={()=>LayoutView(4)} />
                    </li>
                    <li>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/icon/4.png`}
                            alt=""
                            className="product-4-layout-view" onClick={()=>LayoutView(3)} />
                    </li>
                    <li>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/icon/6.png`}
                            alt=""
                            className="product-6-layout-view" onClick={()=>LayoutView(2)} />
                    </li>
                </ul>
            </div>
            <div className="product-page-filter">
                <select onChange={(e) => dispatch(filterSort(e.target.value))}>
                    <option value="">Sorting items</option>
                    <option value="HighToLow">Price: High to Low</option>
                    <option value="LowToHigh">Price: Low to High</option>
                    <option value="Newest">Newest Items</option>
                    <option value="AscOrder">Sort By Name: A To Z</option>
                    <option value="DescOrder">Sort By Name: Z To A</option>
                </select>
            </div>
        </div>
    </>
}
export default FilterBar