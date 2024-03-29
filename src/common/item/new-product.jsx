import React, {} from 'react';
import Slider from 'react-slick';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

import {getNewProducts} from "../../atomic/services/services";

const NewProduct = () => {
    const {items, symbol} = useSelector(state => ({
        items: getNewProducts(state.data.products),
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
                                <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`}><img height={50} width={200} className="img-fluid" src={`${product.variants[0].images}`} alt="" /></Link>
                                <div className="media-body align-self-center">
                                    <h4>{product.yyyy}</h4><br/>
                                    {/*<Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`}><h5>{product.yyyy}</h5></Link><br/>*/}
                                    {/*<Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`}><h7>{product.brand}</h7></Link><br/>*/}
                                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`}><h5>{product.modelName}</h5></Link>
                                    <h4>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</h4>
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
