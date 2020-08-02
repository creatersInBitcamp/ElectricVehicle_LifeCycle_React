import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Breadcrumb from '../common/breadcrumb';
import {toast} from "react-toastify";
import {addToCartUnsafe} from "../cart";


/* type */
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'


/* action */
export const addToWishlist = (product) => (dispatch) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))

}
export const addToWishlistUnsafe = (product) => ({
    type: ADD_TO_WISHLIST,
    product
});
export const removeFromWishlist = product_id => (dispatch) => {
    toast.error("Item Removed from Wishlist");
    dispatch({
        type: REMOVE_FROM_WISHLIST,
        product_id
    })
};
export const addToCartAndRemoveWishlist = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty));
    dispatch(removeFromWishlist(product));
}


/* reducer */
export const wishlistReducer = (state = {list: []}, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const productId = action.product.id
            if (state.list.findIndex(product => product.id === productId) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, list }
            }

            return { ...state, list: [...state.list, action.product] }

        case REMOVE_FROM_WISHLIST:
            return {
                list: state.list.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}


export const wishList = () => {
    const {Items, symbol} = useSelector(state=>({
        Items: state.wishlist.list,
        symbol: state.data.symbol
    }))

    const changeQty = e => {
        this.setState({ quantity: parseInt(e.target.value) })
    }


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
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>
                                                        <img src={item.variants?
                                                            item.variants[0].images
                                                            :item.pictures[0]} alt="" />
                                                    </Link>
                                                </td>
                                                <td><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>{item.name}</Link>
                                                    <div className="mobile-cart-content row">
                                                        <div className="col-xs-3">
                                                            <p>in stock</p>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{symbol}{item.price-(item.price*item.discount/100)}
                                                                <del><span className="money">{symbol}{item.price}</span></del></h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                                <a href="javascript:void(0)" className="icon" onClick={removeFromWishlist(item)}>
                                                                    <i className="fa fa-times"></i>
                                                                </a>
                                                                <a href="javascript:void(0)" className="cart" onClick={addToCartAndRemoveWishlist(item, 1)}>
                                                                    <i className="fa fa-shopping-cart"></i>
                                                                </a>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><h2>{symbol}{item.price-(item.price*item.discount/100)}
                                                    <del><span className="money">{symbol}{item.price}</span></del></h2></td>
                                                <td >
                                                    <p>in stock</p>
                                                </td>
                                                <td>
                                                    <a className="icon" onClick={removeFromWishlist(item)}>
                                                        <i className="fa fa-times"/>
                                                    </a>
                                                    <a className="cart" onClick={addToCartAndRemoveWishlist(item, 1)}>
                                                        <i className="fa fa-shopping-cart"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                            </div>
                        </div>
                        <div className="row wishlist-buttons">
                            <div className="col-12">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">continue shopping</Link>
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
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-wishlist.png`} className="img-fluid mb-4" alt="" />
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

export default wishlistReducer