import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import {addToUsedWishlist} from '../page/UsedCarWishlist'
import ProductItem from "./Product-item";
import {getVisibleUsedProducts} from "../../atomic/services/services";

const ProductListing = props => {
    const [limit, setLimit] = useState(5)
    const [hasMoreItems, setHasMoreItems] = useState(true)

    const {symbol,items} = useSelector(state => ({
        symbol: state.usedData.symbol,
        items: getVisibleUsedProducts(state.usedData,state.filters)
    }))

    useEffect(()=>{
        fetchMoreItems()
    })

    const fetchMoreItems = () =>{
        if (limit >= items.length) {
            setHasMoreItems(false)
            return
        }
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
                                <b>모든 상품을 확인하셨습니다.</b>
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
                            <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" alt={''} />
                            <h3>현재 판매중인 차량이 없습니다!!</h3>
                            <p>검색 조건을 다시 설정해주세요!</p>
                            <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                        </div>
                    </div>
                }
            </div>
        </div>

    </>
}
export default ProductListing
