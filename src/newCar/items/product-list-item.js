import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


export const ProductListItem = props => {
    const [open,setOpen] = useState(false)
    const [stock,setStock] = useState('InStock')
    const [quantity,setQuantity] = useState(1)
    const [image,setImage] = useState('')


    const onOpenModal = () => {
        setOpen(true)
    };

    const onCloseModal = () => {
        setOpen(false)
    };

    const onClickHandle = img =>{
        setImage(img);
    }

    const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = props;

    return (
        <div className="product-box">
            <div className="img-wrapper">
                <div className="front">
                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`} ><img
                        src={product.variants?
                                image?image
                                    :product.variants[0].images
                            :product.img}
                        className="img-fluid"
                        alt="" /></Link>
                </div>
                <div className="cart-info cart-wrap">
                    <button title="Add to cart" onClick={() => onAddToCartClicked(product, 1)}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"/>
                    </button>
                    <a title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                        <i className="fa fa-heart" aria-hidden="true"/>
                    </a>
                    <a data-toggle="modal"
                       data-target="#quick-view"
                       title="Quick View"
                       onClick={onOpenModal}><i className="fa fa-search" aria-hidden="true"/></a>
                    <Link to={`${process.env.PUBLIC_URL}/new-car/compare`} title="Compare" onClick={onAddToCompareClicked}>
                        <i className="fa fa-refresh" aria-hidden="true"/></Link>
                </div>
                {product.variants?
                    <ul className="product-thumb-list">
                        {product.variants.map((vari, i) =>
                            <li className={`grid_thumb_img ${(vari.images === image)?'active':''}`} key={i}>
                                <a title="Add to Wishlist">
                                    <img src={`${vari.images}`} onClick={() => onClickHandle(vari.images)} />
                                </a>
                            </li>)
                        }
                    </ul>:''}

            </div>
            <div className="product-detail">
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`}>
                        <h6>{product.carName}</h6>
                    </Link>
                    <h4><span className="money">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</span></h4>
                    {product.variants?
                        <ul className="color-variant">
                            {product.variants.map((vari, i) => {
                                return (
                                    <li className={vari.color} key={i} title={vari.color} onClick={() => onClickHandle(vari.images)}/>)
                            })}
                        </ul>:''}
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content quick-view-modal">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6  col-xs-12">
                                    <div className="quick-view-img">
                                        <img src={product.variants?
                                            image?image:product.variants[0].images
                                            :product.img} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-6 rtl-text">
                                    <div className="product-right">
                                        <h2> {product.carName} </h2>
                                        <h3><span className="money">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{symbol}</span></h3>
                                        {product.variants?
                                            <ul className="color-variant">
                                                {product.variants.map((vari, i) =>
                                                    <li className={vari.color} key={i} title={vari.color} onClick={() => onClickHandle(vari.images)}/>)
                                                }
                                            </ul>:''}
                                        <div className="border-product">
                                            <h6 className="product-title">product details</h6>
                                            <p>{product.shortDetails}</p>
                                        </div>
                                        <div className="product-buttons">
                                            <button  className="btn btn-solid" onClick={() => onAddToCartClicked(product, quantity)} >add to cart</button>
                                            <Link to={`${process.env.PUBLIC_URL}/new-car/product/${product.eccarId}`} className="btn btn-solid">view detail</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )

}

export default ProductListItem;