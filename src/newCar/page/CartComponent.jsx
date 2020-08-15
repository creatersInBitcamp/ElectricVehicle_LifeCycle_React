import React from 'react';
import {Helmet} from 'react-helmet'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Breadcrumb} from "../../common";
import {getCartTotal} from "../../atomic/services/services";
import {removeFromCart,decrementQty,incrementQty} from "./cartReducer"

export const CartComponent = () => {
    const dispatch = useDispatch();

    const {cartItems, symbol, total} = useSelector(state=>({
        cartItems: state.cartList.cart,
        symbol: state.data.symbol,
        total: getCartTotal(state.cartList.cart)
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
                                                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${item.eccarId}`}>
                                                        <img src={item.variants?
                                                            item.variants[0].images
                                                            :item.img} alt="" />
                                                    </Link>
                                                </td>
                                                <td><Link to={`${process.env.PUBLIC_URL}/new-car/product/${item.eccarId}`}>{item.carName}</Link>
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
                                                            <h2 className="td-color">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                                <a className="icon" onClick={()=>{dispatch(removeFromCart(item))}}>
                                                                    <i className="icon-close"/>
                                                                </a>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</h2>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="qty-box">
                                                        <div className="input-group">
                                                            <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-left-minus" onClick={()=>{dispatch(decrementQty(item.eccarId))}} data-type="minus" data-field="">
                                                                 <i className="fa fa-angle-left"/>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quantity" value={item.qty} readOnly={true} className="form-control input-number" />

                                                            <span className="input-group-prepend">
                                                            <button className="btn quantity-right-plus" onClick={()=>{dispatch(incrementQty(item, 1))}}  data-type="plus" disabled={(item.qty >= item.stock)? true : false}>
                                                            <i className="fa fa-angle-right"/>
                                                            </button>
                                                           </span>
                                                        </div>
                                                    </div>{(item.qty >= item.stock)? 'out of Stock' : ''}
                                                </td>
                                                <td>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">
                                                            <a className="icon" onClick={()=>{dispatch(removeFromCart(item))}}>
                                                                <i className="icon-close"/>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td><h2 className="td-color">{item.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</h2></td>
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                                <table className="table cart-table table-responsive-md">
                                    <tfoot>
                                    <tr>
                                        <td>
                                            <div className="col-xs-3">
                                                <h2 className="td-color">total price :</h2>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-xs-3">
                                                <h2 className="td-color">{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol} </h2>
                                            </div>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div className="row cart-buttons">
                            <div className="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/new-car/collection`} className="btn btn-solid">continue shopping</Link>
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
export default CartComponent