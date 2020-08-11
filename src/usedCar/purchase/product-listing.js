import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import {getVisibleproducts} from '../../atomic/services/services';
import {addToUsedWishlist} from '../wishlist/UsedCarWishlist'

const ProductListing = props => {
    const [limit, setLimit] = useState(5)
    const [hasMoreItems, setHasMoreItems] = useState(true)
    const [image] = useState('')

    const {products, symbol} = useSelector(state=>({
        products: getVisibleproducts(state.data, state.filters),
        symbol: state.data.symbol,
    }))

    /*useComponentWillMount(()=>{
        fetchMoreItems()
    })*/

    useEffect(()=>{
        fetchMoreItems()
    })

    const fetchMoreItems = () =>{
        if (limit >= products.length) {
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
                {products.length > 0 ?
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
                            { products.slice(0, limit).map((product, index) =>
                                <div className={`${props.colSize===3?'col-xl-3 col-md-6 col-grid-box':'col-lg-'+props.colSize}`} key={index}>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <Link to={`${process.env.PUBLIC_URL}/used-car/product/${product.id}`} >
                                                    <img src={product.variants?
                                                        image?image:product.variants[0].images
                                                        :product.pictures[0]}
                                                         className="img-fluid"
                                                         alt="" />
                                                </Link>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <a title="Add to Wishlist" onClick={()=>{dispatch(addToUsedWishlist(product))}} >
                                                    <i className="fa fa-heart" aria-hidden="true"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div>
                                                <Link to={`${process.env.PUBLIC_URL}/used-car/product/${product.id}`}>
                                                    <h6>{product.name}</h6>
                                                </Link>
                                                <h4>{symbol}{product.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </InfiniteScroll>
                    :
                    <div className="row">
                        <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                            <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" />
                            <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                            <p>Please check if you have misspelt something or try searching with other words.</p>
                            <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                        </div>
                    </div>
                }
            </div>
        </div>

    </>
}
export default ProductListing
