import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Breadcrumb from '../common/breadcrumb';
import {removeFromWishlist,addToCartAndRemoveWishlist} from './wishlistReducer'

const wishlist = () => {
    const {Items, symbol} = useSelector(state=>({
        Items: state.wishlist.list,
        symbol: state.data.symbol
    }))

    // const changeQty = e => {
    //     this.setState({ quantity: parseInt(e.target.value) })
    // }

    const dispatch = useDispatch()
    return <>
        <div>
            <Breadcrumb title={'Wishlist'} />
            {Items.length>0 ?
                <section className="wishlist-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">availability</th>
                                        <th scope="col">action</th>
                                    </tr>
                                    </thead>
                                    {Items.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                            <tr>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${item.id}`}>
                                                        <img src={item.variants?
                                                            item.variants[0].images
                                                            :item.pictures[0]} alt="item" />
                                                    </Link>
                                                </td>
                                                <td><Link to={`${process.env.PUBLIC_URL}/new-car/product/${item.id}`}>{item.name}</Link>
                                                    <div className="mobile-cart-content row">
                                                        <div className="col-xs-3">
                                                            <p>in stock</p>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                                <span className="money">{symbol}{item.price}</span></h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                                <a className="icon" onClick={()=>{dispatch(removeFromWishlist(item))}}>
                                                                    <i className="fa fa-times"/>
                                                                </a>
                                                                <a className="cart" onClick={()=>{dispatch(addToCartAndRemoveWishlist(item, 1))}}>
                                                                    <i className="fa fa-shopping-cart"/>
                                                                </a>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">
                                                            <span className="money">{symbol}{item.price}</span></h2>
                                                    </div>
                                                </td>
                                                <td >
                                                    <div className="col-xs-3">
                                                        <p>in stock</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">
                                                            <a className="icon" onClick={()=>{dispatch(removeFromWishlist(item))}}>
                                                                <i className="fa fa-times"/>
                                                            </a>
                                                            <a className="cart" onClick={()=>{dispatch(addToCartAndRemoveWishlist(item, 1))}}>
                                                                <i className="fa fa-shopping-cart"/>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                            </div>
                        </div>
                        <div className="row wishlist-buttons">
                            <div className="col-12">
                                <Link to={`${process.env.PUBLIC_URL}/new-car/collection`} className="btn btn-solid">continue shopping</Link>
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
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-wishlist.png`} className="img-fluid mb-4" alt="router tag" />
                                        <h3>
                                            <strong>WhishList is Empty</strong>
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

export default wishlist