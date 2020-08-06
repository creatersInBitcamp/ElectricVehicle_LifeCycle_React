import React, {} from 'react';
import Slider from 'react-slick';
import {connect, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

import {getBestSeller} from "../atomic/services";

const NewProduct = () => {
    const {items, symbol} = useSelector(state => ({
        items: getBestSeller(state.data.products),
        symbol: state.data.symbol
    }))

    var arrays = [];
    while (items.length > 0) {
        arrays.push(items.splice(0, 3));
    }

    return (
        <div className="theme-card">
            <h5 className="title-border">new product</h5>
            <Slider className="offer-slider slide-1">
                {arrays.map((products, index) =>
                    <div key={index}>
                        {products.map((product, i) =>
                            <div className="media" key={i}>
                                <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.id}`}><img className="img-fluid" src={`${product.variants[0].images}`} alt="" /></Link>
                                <div className="media-body align-self-center">
                                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.id}`}><h6>{product.name}</h6></Link>
                                    <h4>{symbol}{(product.price)}</h4>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default NewProduct;
