import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';
import MarketPrice from "../../MarketPrice";
import {addToCart, addToCartUnsafe} from "../../../cart/cartReducer";
import {addToWishlist} from "../../../wishlist/wishlistReducer";


const DetailsWithPrice = props => {

    const [open,setOpen]=useState(false)
    const [quantity,setQuantity]=useState(1)
    const [stock,setStock]=useState('InStock')
    const [nav3,setNav3]=useState(null)

    const slider3 = useRef();

    useEffect(()=>{

        return () => {
            setNav3(slider3)
        }
    },[])

    const onOpenModal = () => {
        setOpen(true)
    };

    const onCloseModal = () => {
        setOpen(false)
    };

    const minusQty = () => {
        if(quantity > 1) {
            setStock('InStock')
            setQuantity(quantity-1)
        }
    }

    const plusQty = () => {
        if(props.item.stock >= quantity) {
            setQuantity(quantity+1)
        }else{
            setStock('Out of Stock !')
        }
    }
    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const {symbol, item, addToCartClicked, BuynowClicked, addToWishlistClicked} = props

    const colorsnav = {
        slidesToShow: 6,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        focusOnSelect: true
    };

    return (
        <div className="col-lg-6 rtl-text">
            <div className="product-right">
                <h2> {item.name} </h2>
                <h3>{symbol}{item.price} </h3>
                {item.variants?
                    <ul >
                        <Slider {...colorsnav} asNavFor={props.navOne} ref={slider1 => setNav3(slider1)} className="color-variant">
                            {item.variants.map((vari, i) => {
                                return <li className={vari.color} key={i} title={vari.color}/>
                            })}
                        </Slider>
                    </ul>:''}
                <div className="product-description border-product">
                    <div className="qty-box">
                        <MarketPrice/>
                    </div>
                </div>
                <div className="product-buttons" >
                    <a className="btn btn-solid" onClick={() => addToCartClicked(item, quantity)}>add to cart</a>
                    <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, quantity)} >buy now</Link>
                </div>
                <div className="border-product">
                    <div className="product-icon">
                        <button className="wishlist-btn" onClick={() => addToWishlistClicked(item)}><i
                            className="fa fa-heart"/><span
                            className="title-font">Add To WishList</span>
                        </button>
                    </div>
                </div>
                <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>{item.shortDetails}</p>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta</h5>
                        </div>
                        <div className="modal-body">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}


export default DetailsWithPrice;