import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import MarketPrice from "../../MarketPrice";


const DetailsWithPrice = props => {
    const [state, setState] = useState({
        open:false,
        quantity:1,
        stock: 'InStock',
        nav3: null
    });

    const slider3 = useRef();

    useEffect(() => {
        setState({
            nav3: slider3.current
        });
    }, []);

    return (
        <div className="col-lg-6 rtl-text">
            <div className="product-right">
                <h2> {props.item.name} </h2>
                <h3>{props.symbol}{props.item.price} </h3>
                <div className="product-description border-product">
                    <div className="qty-box">
                        <MarketPrice/>
                    </div>
                </div>
                <div className="product-buttons" >
                    <Link to={`${process.env.PUBLIC_URL}/used-car/purchase`} className="btn btn-solid">purchase request</Link>
                </div>
                <div className="border-product">
                    <div className="product-icon">
                        <button className="wishlist-btn" onClick={() => props.addToWishlistClicked(props.item)}><i
                            className="fa fa-heart"/><span
                            className="title-font">Add To WishList</span>
                        </button>
                    </div>
                </div>
                <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>{props.item.shortDetails}</p>
                </div>
            </div>
        </div>
    )
}


export default DetailsWithPrice;