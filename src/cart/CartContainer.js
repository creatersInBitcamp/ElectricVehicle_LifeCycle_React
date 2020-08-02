import {useSelector} from "react-redux";
import {getCartTotal} from "../atomic/services";
import {Link} from "react-router-dom";
import CartPage from "../common/headers/common/cart-header";
import React from "react";
import {removeFromCart} from "./cartReducer";

export const CartContainer = () => {
    const cartList = useSelector(state => state.cartList.cart)
    const symbol = useSelector(state => state.data.symbol)
    const total = useSelector(state => getCartTotal(state.cartList.cart))
    return <>
        <li  className="onhover-div mobile-cart"><div className="cart-qty-cls">{cartList.length}</div>
            <Link to={`${process.env.PUBLIC_URL}/cart`}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/cart.png`} className="img-fluid" alt=""/>
                <i className="fa fa-shopping-cart"/></Link>
            <ul className="show-div shopping-cart">
                { cartList.map((item,index) => (
                    <CartPage key={index} item={item} total={total} symbol={symbol} removeFromCart={removeFromCart(item)}  />
                ))}
                {(cartList.length > 0) ?
                    <div>
                        <li>
                            <div className="total">
                                <h5>subtotal : <span>{symbol}{total}</span></h5>
                            </div>
                        </li>
                        <li>
                            <div className="buttons">
                                <Link to={`${process.env.PUBLIC_URL}/cart`} className="view-cart">view cart</Link>
                                <Link to={`${process.env.PUBLIC_URL}/checkout`} className="checkout">checkout</Link>
                            </div>
                        </li></div>
                    :
                    <li><h5>Your cart is currently empty.</h5></li>}
            </ul>

        </li>
    </>
}
export default CartContainer