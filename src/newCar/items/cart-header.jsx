import React from 'react';
import {Link} from 'react-router-dom'

export const CartHeader  = ({item, total, symbol, removeFromCart}) => (
    <li >
        <div className="media">
            <Link to={`${process.env.PUBLIC_URL}/new-car/product/${item.eccarId}`}>
                <img alt="" className="mr-3" src={`${item.img}`} />
            </Link>
            <div className="media-body">
                <Link to={`${process.env.PUBLIC_URL}/new-car/product/${item.eccarId}`}>
                    <h4>{item.carName}</h4>
                </Link>
                <h4>
                    <span>{item.qty} x {(item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}{symbol}</span>
                </h4>
            </div>
        </div>
        {/*<span>{cart}</span>*/}
        <div className="close-circle">
            <a href={null} onClick={ removeFromCart}><i className="fa fa-times" aria-hidden="true"/></a>
        </div>
    </li>
)



export default CartHeader
