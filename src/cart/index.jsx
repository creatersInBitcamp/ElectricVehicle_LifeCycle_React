import React from 'react';
import {Helmet} from 'react-helmet'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Breadcrumb from "../common/breadcrumb";
import {getCartTotal} from "../atomic/services";
import {toast} from "react-toastify";
import CartPage from "../common/headers/common/cart-header";

/* type */
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const INCREMENT_QTY = 'INCREMENT_QTY'
const DECREMENT_QTY = 'DECREMENT_QTY'

/* actions */
export const addToCart = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const addToCartUnsafe = (product, qty) => ({
    type: ADD_TO_CART,
    product,
    qty
})
export const removeFromCart = product_id => (dispatch) => {
    toast.error("Item Removed from Cart");
    dispatch({
        type: REMOVE_FROM_CART,
        product_id
    })
}
export const incrementQty = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const decrementQty = productId => (dispatch) => {
    toast.warn("Item Decrement Qty to Cart");

    dispatch({
        type: DECREMENT_QTY,
        productId})
}

/* reducer */
const cartReducer = (state = {cart: []}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productId = action.product.id
            if (state.cart.findIndex(product => product.id === productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product, qty: product.qty+1, sum: (product.price*product.discount/100)*(product.qty+1) }) // Increment qty
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }

            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: (action.product.price*action.product.discount/100)*action.qty }] }

        case DECREMENT_QTY:

            if (state.cart.findIndex(product => product.id === action.productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === action.productId && product.qty > 1) {
                        //console.log('price: '+product.price+'Qty: '+product.qty)
                        cartAcc.push({ ...product, qty: product.qty-1, sum: (product.price*product.discount/100)*(product.qty-1) }) // Decrement qty
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }

            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: action.product.price*action.qty }] }

        case REMOVE_FROM_CART:
            return {
                cart: state.cart.filter(item => item.id !== action.product_id.id)
            }

        default:
    }
    return state;
}

export const CartContainer = () => {
    const {cartList, symbol, total} = useSelector(state=>({
        cartList: state.cartList.cart,
        symbol: state.data.symbol,
        total: getCartTotal(state.cartList.cart)
    }))
    return <>
        <li  className="onhover-div mobile-cart"><div className="cart-qty-cls">{cartList.length}</div>
            <Link to={`${process.env.PUBLIC_URL}/cart`}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/cart.png`} className="img-fluid" alt=""/>
                <i className="fa fa-shopping-cart"/></Link>
            <ul className="show-div shopping-cart">
                { cartList.map((item,index) => (
                    <CartPage key={index} item={item} total={total} symbol={symbol} removeFromCart={()=>removeFromCart(item)}  />
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
export const CartComponent = () => {
    const {cartItems, symbol, total} = useSelector(state=>({
        cartItems: state.cart.items,
        symbol: state.data.symbol,
        total: getCartTotal(state.cart)
    }))

    return <>
        <div>
            {/*SEO Support*/}
            <Helmet>
                <title>MultiKart | Cart List Page</title>
                <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
            </Helmet>
            {/*SEO Support End */}

            <Breadcrumb title={'Cart Page'}/>

            {cartItems.length>0 ?
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col">action</th>
                                        <th scope="col">total</th>
                                    </tr>
                                    </thead>
                                    {cartItems.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                            <tr>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>
                                                        <img src={item.variants?
                                                            item.variants[0].images
                                                            :item.pictures[0]} alt="" />
                                                    </Link>
                                                </td>
                                                <td><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>{item.name}</Link>
                                                    <div className="mobile-cart-content row">
                                                        <div className="col-xs-3">
                                                            <div className="qty-box">
                                                                <div className="input-group">
                                                                    <input type="text" name="quantity"
                                                                           className="form-control input-number" defaultValue={item.qty} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{symbol}{item.price-(item.price*item.discount/100)}</h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                                <a href="#" className="icon" onClick={removeFromCart(item)}>
                                                                    <i className="icon-close"></i>
                                                                </a>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><h2>{symbol}{item.price-(item.price*item.discount/100)}</h2></td>
                                                <td>
                                                    <div className="qty-box">
                                                        <div className="input-group">
                                                            <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-left-minus" onClick={decrementQty(item.id)} data-type="minus" data-field="">
                                                                 <i className="fa fa-angle-left"></i>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quantity" value={item.qty} readOnly={true} className="form-control input-number" />

                                                            <span className="input-group-prepend">
                                                            <button className="btn quantity-right-plus" onClick={incrementQty(item, 1)}  data-type="plus" disabled={(item.qty >= item.stock)? true : false}>
                                                            <i className="fa fa-angle-right"></i>
                                                            </button>
                                                           </span>
                                                        </div>
                                                    </div>{(item.qty >= item.stock)? 'out of Stock' : ''}
                                                </td>
                                                <td>
                                                    <a href="#" className="icon" onClick={removeFromCart(item)}>
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </td>
                                                <td><h2 className="td-color">{symbol}{item.sum}</h2></td>
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                                <table className="table cart-table table-responsive-md">
                                    <tfoot>
                                    <tr>
                                        <td>total price :</td>
                                        <td><h2>{symbol} {total} </h2></td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div className="row cart-buttons">
                            <div className="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">continue shopping</Link>
                            </div>
                            <div className="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid">check out</Link>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Your Cart is Empty</strong>
                                        </h3>
                                        <h4>Explore more shortlist some items.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    </>
}
export default cartReducer