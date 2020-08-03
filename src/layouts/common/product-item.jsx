import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';

const ProductItem = props => {
    const [open,setOpen] = useState(false)
    const [stock,setStock] = useState('InStock')
    const [quantity,setQuantity] = useState(1)
    const [image,setImage] = useState('')
    const onClickHandle = (img) => {
        setImage(img)
    }
    const onOpenModal = () => {
        setOpen(true)
    };
    const onCloseModal = () => {
        setOpen(false)
    };
    const minusQty = () => {
        if(quantity > 1) {
            setStock('InStock')
            setQuantity(quantity - 1)
        }
    }
    const plusQty = () => {
        if(props.product.stock >= quantity) {
            setQuantity(quantity+1)
        }else{
            setStock('Out of Stock !')
        }
    }
    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    }
    let RatingStars = []
    for(let i = 0; i < props.product.rating; i++) {
        RatingStars.push(<i className="fa fa-star" key={i}/>)
    }
    return <>
        <div className="product-box">
            <div className="img-wrapper">
                <div className="lable-block">
                    {(props.product.new === true)? <span className="lable3">new</span> : ''}
                    {(props.product.sale === true)? <span className="lable4">on sale</span> : ''}
                </div>
                <div className="front">
                    <Link to={`${process.env.PUBLIC_URL}/product-detail/product/${props.product.id}`} ><img
                        src={`${
                            props.product.variants?
                                image?image:props.product.variants[0].images
                                :props.product.pictures[0]
                        }`}
                        className="img-fluid"
                        alt="" /></Link>
                </div>
                <div className="cart-info cart-wrap">
                    <button title="Add to cart" onClick={props.onAddToCartClicked}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"/>
                    </button>
                    <a title="Add to Wishlist" onClick={props.onAddToWishlistClicked}>
                        <i className="fa fa-heart" aria-hidden="true"/>
                    </a>
                    <a data-toggle="modal"
                       data-target="#quick-view"
                       title="Quick View"
                       onClick={onOpenModal}><i className="fa fa-search" aria-hidden="true"/></a>
                    <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" onClick={props.onAddToCompareClicked}>
                        <i className="fa fa-refresh" aria-hidden="true"/></Link>
                </div>
                {props.product.variants?
                    <ul className="product-thumb-list">
                        { props.product.variants.map((vari, i) =>
                            <li className={`grid_thumb_img ${(vari.images === image)?'active':''}`} key={i}>
                                <a title="Add to Wishlist">
                                    <img src={`${vari.images}`} onClick={()=>onClickHandle(vari.images)} />
                                </a>
                            </li>)}
                    </ul>:''}
            </div>
            <div className="product-detail">
                <div>
                    <div className="rating">
                        {RatingStars}
                    </div>
                    <Link to={`${process.env.PUBLIC_URL}/product-detail/product/${props.product.id}`}>
                        <h6>{props.product.name}</h6>
                    </Link>
                    <h4>{props.symbol}{props.product.price-(props.product.price*props.product.discount/100)}
                        <del><span className="money">{props.symbol}{props.product.price}</span></del>
                    </h4>
                    {props.product.variants?
                        <ul className="color-variant">
                            {props.product.variants.map((vari, i) => {
                                return (
                                    <li className={vari.color} key={i} title={vari.color} onClick={()=>onClickHandle(vari.images)}/>)
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
                                        <img src={`${
                                            props.product.variants?
                                                image?image:props.product.variants[0].images
                                                :props.product.pictures[0]
                                        }`} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-6 rtl-text">
                                    <div className="product-right">
                                        <h2> {props.product.name} </h2>
                                        <h3>{props.symbol}{props.product.price}</h3>
                                        {props.product.variants?
                                            <ul className="color-variant">
                                                {props.product.variants.map((vari, i) =>
                                                    <li className={vari.color} key={i} title={vari.color} onClick={()=>onClickHandle(vari.images)}/>)
                                                }
                                            </ul>:''}
                                        <div className="border-product">
                                            <h6 className="product-title">product details</h6>
                                            <p>{props.product.shortDetails}</p>
                                        </div>
                                        <div className="product-description border-product">
                                            {props.product.size?
                                                <div className="size-box">
                                                    <ul>
                                                        {props.product.size.map((size, i) => {
                                                            return <li key={i}><a href="#">{size}</a></li>
                                                        })}
                                                    </ul>
                                                </div>:''}
                                            <h6 className="product-title">quantity</h6>
                                            <div className="qty-box">
                                                <div className="input-group">
                                                              <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                                                 <i className="fa fa-angle-left"/>
                                                                </button>
                                                              </span>
                                                    <input type="text" name="quantity" value={quantity}  onChange={changeQty} className="form-control input-number" />
                                                    <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-right-plus" onClick={plusQty} data-type="plus" data-field="">
                                                                <i className="fa fa-angle-right"/>
                                                                </button>
                                                               </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-buttons">
                                            <button  className="btn btn-solid" onClick={()=>props.onAddToCartClicked(props.product, quantity)} >add to cart</button>
                                            <Link to={`${process.env.PUBLIC_URL}/product-detail/product/${props.product.id}`} className="btn btn-solid">view detail</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    </>
}
export default ProductItem;