import React from 'react';
import {Helmet} from 'react-helmet'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Breadcrumb} from "../../common";
import {getCartTotal} from "../../atomic/services/services";
import {removeFromCart} from "./CartReducer"

export const CartComponent = () => {
    const dispatch = useDispatch();

    const {cartItems, symbol, total} = useSelector(state=>({
        cartItems: state.cartList.cart,
        symbol: state.data.symbol,
        total: getCartTotal(state.cartList.cart)
    }))
    const session = sessionStorage.getItem('user')
    return <>
        <div>
            {/*SEO Support*/}
            <Helmet>
                <title>EV | Cart List Page</title>
                <meta name="description" content="EV" />
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
                                        <th scope="col">delete</th>
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
                                                <td><Link to={`${process.env.PUBLIC_URL}/new-car/product/${item.eccarId}`}>{item.carName}</Link>                                              </td>
                                                <td>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</h2>
                                                    </div>
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
                                {(cartItems.length > 1 )?
                                    <button className="btn btn-solid" onClick={()=>alert('주문은 한 대의 차량만 가능합니다.')}>주문 요청 제한</button>
                                    :
                                    (session)?
                                <Link to={`${process.env.PUBLIC_URL}/checkout/${cartItems[0].eccarId}`} className="btn btn-solid">check out</Link>
                                        :
                                <Link to={`${process.env.PUBLIC_URL}/pages/login`} className="btn btn-solid" onClick={(e)=>{alert('로그인이 필요합니다.')}}>check out</Link>
                                }
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