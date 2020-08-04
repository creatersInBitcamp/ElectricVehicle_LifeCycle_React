import {removeFromUsedCompare} from "./usedcompareReducer";
import {useDispatch, useSelector} from 'react-redux'
import {MarketPrice} from "../usedPurchase";
import {Link} from 'react-router-dom'
import React from "react";

export const CompareList = () => {
    const {Items, symbol} = useSelector(state=>({
        Items: state.usedcompare.items,
        symbol: state.data.symbol
    }))
    const dispatch = useDispatch()
    return <>
        {Items.map((item,index) =>
            <div key={index}>
                <div className="compare-part">
                    <button type="button" className="close-btn" onClick={()=>{dispatch(removeFromUsedCompare(item))}}>
                        <span aria-hidden="true">×</span>
                    </button>
                    <div className="img-secton">
                        <Link to={`${process.env.PUBLIC_URL}/used-car/product/${item.id}`}>
                            <img src={item.variants?
                                item.variants[0].images
                                :item.pictures[0]} className="img-fluid" alt="" />
                            <h5>{item.name}</h5></Link>
                        <h5>{symbol}{item.price}</h5>
                    </div>
                    <div className="detail-part">
                        <div className="title-detail">
                            market price
                        </div>
                        <div className="inner-detail">
                            <MarketPrice/>
                        </div>
                    </div>
                    <div className="detail-part">
                        <div className="title-detail">
                            <h5>description</h5>
                        </div>
                        <div className="inner-detail">
                            <p>shortdetail</p>
                        </div>
                    </div>
                    <div className="detail-part">
                        <div className="title-detail">
                            <h5>Brand Name</h5>
                        </div>
                        <div className="inner-detail">
                            <p>{item.tags}</p>
                        </div>
                    </div>
                    <div className="detail-part">
                        <div className="title-detail">
                            <h5>size</h5>
                        </div>
                        <div className="inner-detail">
                            <p>{item.size}</p>
                        </div>
                    </div>
                    <div className="detail-part">
                        <div className="title-detail">
                            <h5>color</h5>
                        </div>
                        <div className="inner-detail">
                            <p>{item.colors}</p>
                        </div>
                    </div>
                    <div className="detail-part">
                        <div className="title-detail">
                            <h5>availability</h5>
                        </div>
                        <div className="inner-detail">
                            <p>In stock</p>
                        </div>
                    </div>
                    <div className="btn-part">
                        <a className="btn btn-solid">
                            <Link to={`${process.env.PUBLIC_URL}/used-car/purchase`}>
                                purchase request
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        )}
    </>
}