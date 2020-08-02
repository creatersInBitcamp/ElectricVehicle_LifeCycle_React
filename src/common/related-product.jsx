import React from 'react';
import {useSelector} from 'react-redux';
import ProductItem from '../layouts/common/product-item';
const getBestSeller = products => {
    const items = products.filter(product => {
        return product.sale === true;
    })
    return items.slice(0,8)
}
const addToCart = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))
}
const addToWishlist = (product) => (dispatch) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))
}
const addToCompare = (product) => (dispatch) => {
    toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))
}

const RelatedProduct = props => {
    const items = useSelector(state =>getBestSeller(state.data.products))
    const symbol = useSelector(state =>state.data.symbol)
        return (
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12 product-related">
                            <h2>related products</h2>
                        </div>
                    </div>
                    <div className="row search-product">
                        { items.slice(0, 6).map((product, index ) =>
                            <div key={index} className="col-xl-2 col-md-4 col-sm-6">
                                <ProductItem product={product} symbol={symbol}
                                             onAddToCompareClicked={() => addToCompare(product)}
                                             onAddToWishlistClicked={() => addToWishlist(product)}
                                             onAddToCartClicked={() => addToCart(product, 1)} key={index} />
                            </div>)
                        }
                    </div>
                </div>
            </section>
        )

}




export default RelatedProduct