import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {toast} from "react-toastify";
import {Breadcrumb} from "../../common";

/* type */
const ADD_TO_USED_WISHLIST = 'ADD_TO_USED_WISHLIST'
const REMOVE_FROM_USED_WISHLIST = 'REMOVE_FROM_USED_WISHLIST'

/* action */
export const addToUsedWishlist = (product) => (dispatch) => {
    toast.success("Item Added to UsedWishlist")
    dispatch(addToUsedWishlistUnsafe(product))
}
export const addToUsedWishlistUnsafe = (product) => ({
    type: ADD_TO_USED_WISHLIST,
    product
})
export const removeFromUsedWishlist = product_id => (dispatch) => {
    toast.error("Item Removed from UsedWishlist")
    dispatch({
        type: REMOVE_FROM_USED_WISHLIST,
        product_id
    })
}

/* reducer */
export const usedWishlistReducer = (state = {list: []}, action) => {
    switch (action.type) {
        case ADD_TO_USED_WISHLIST:
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

        case REMOVE_FROM_USED_WISHLIST:
            return {
                list: state.list.filter(id => id !== action.product_id)
            }

        default:
    }
    return state
}

export const UsedWishlist = () => {
    const {Items, symbol} = useSelector(state=>({
        Items: state.usedWishlist.list,
        symbol: state.data.symbol
    }))

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
                                        <th scope="col">purchase</th>
                                        <th scope="col">action</th>
                                    </tr>
                                    </thead>
                                    {Items.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                            <tr>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${item.id}`}>
                                                        <img src={item.variants?
                                                            item.variants[0].images
                                                            :item.pictures[0]} alt="" />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/used-car/product/${item.id}`}>
                                                        {item.name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">
                                                            <span className="money">
                                                                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}
                                                            </span>
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-xs-3">
                                                        <Link className="btn btn-solid" to={`${process.env.PUBLIC_URL}/used-car/purchase`}>
                                                            purchase request
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">
                                                            <a className="icon" onClick={()=>{dispatch(removeFromUsedWishlist(item))}}>
                                                                <i className="fa fa-times"/>
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
                                <Link to={`${process.env.PUBLIC_URL}/used-car/collection`} className="btn btn-solid">continue shopping</Link>
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
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-usedWishlist.png`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>WishList is Empty</strong>
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
export default usedWishlistReducer