import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import {getVisibleUsedProducts} from '../../atomic/services/services';
import {addToUsedWishlist} from '../page/UsedCarWishlist'
import ProductItem from "./product-item";
import {getAllProducts} from "./UsedProductReducer";
import axios from "axios";

const ProductListing = props => {
    const [limit, setLimit] = useState(5)
    const [hasMoreItems, setHasMoreItems] = useState(true)
    const [image,setImage] = useState('')
    const [items,setItems] = useState([])

    const {symbol} = useSelector(state=>({
        symbol: state.usedData.symbol,
    }))

    /*useComponentWillMount(()=>{
        fetchMoreItems()
    })*/

    useEffect(()=>{
        axios.get(`http://localhost:8080/usedCars/getall`)
            .then((res) => {
                console.log(res.data)
                setItems(res.data)
            })
            .catch(err => {
                alert('axios error')
                throw err
            });
        fetchMoreItems();
    },[])

    const fetchMoreItems = () =>{
        if (limit >= items.length) {
            setHasMoreItems(false)
            return
        }
        // a fake async api call
        setTimeout(() => {
            setLimit(limit+5)
        }, 3000)
    }

    const dispatch = useDispatch()


    return <>
        <div className="product-wrapper-grid">
            <div className="container-fluid">
                {items.length > 0 ?
                    <InfiniteScroll
                        dataLength={limit} //This is important field to render the next data
                        next={fetchMoreItems}
                        hasMore={hasMoreItems}
                        loader={<div className="loading-cls"/>}
                        endMessage={
                            <p className="seen-cls seen-it-cls">
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <div className="row">
                            { items.slice(0, limit).map((item, index) =>
                                <div className={`${props.colSize===3?'col-xl-3 col-md-6 col-grid-box':'col-lg-'+props.colSize}`}>
                                    <ProductItem product={item} symbol={symbol}
                                                 onAddToWishlistClicked={()=>{dispatch(addToUsedWishlist(item))}} />
                                </div>)
                            }
                        </div>
                    </InfiniteScroll>
                    :
                    <div className="row">
                        <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                            <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" alt={""} />
                            <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                            <p>Please check if you have misspell something or try searching with other words.</p>
                            <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                        </div>
                    </div>
                }
            </div>
        </div>

    </>
}
export default ProductListing
