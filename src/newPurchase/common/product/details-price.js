import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';
import MarketPrice from "../../MarketPrice";
import {addToCart, addToCartUnsafe} from "../../../cart/cartReducer";
import {addToWishlist} from "../../../wishlist/wishlistReducer";


const DetailsWithPrice = props => {
    const [state, setState] = useState({
        open:false,
        quantity:1,
        stock: 'InStock',
        nav3: null
    });

    const slider3 = useRef();

    useEffect(() => {
        setState({
            nav3: slider3.current
        });
    }, []);

    const { open, quantity, stock, nav3 } = state;

    const onOpenModal = () => {
        setState({ open: true });
    };

    const onCloseModal = () => {
        setState({ open: false });
    };

    const minusQty = () => {
        if(quantity > 1) {
            setState({stock: 'InStock'})
            setState({quantity: this.state.quantity - 1})
        }
    }

    const plusQty = () => {
        if(props.item.stock >= quantity) {
            setState({quantity: this.state.quantity+1})
        }else{
            setState({stock: 'Out of Stock !'})
        }
    }
    const changeQty = (e) => {
        setState({ quantity: parseInt(e.target.value) })
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
                        <Slider {...colorsnav} asNavFor={props.navOne} ref={slider => (slider3.current = slider)} className="color-variant">
                            {item.variants.map((vari, i) => {
                                return <li className={vari.color} key={i} title={vari.color}/>
                            })}
                        </Slider>
                    </ul>:''}
                <div className="product-description border-product">
                    {item.size?
                        <div>
                            <h6 className="product-title size-text">select size
                                <span><a href="#" data-toggle="modal"
                                         data-target="#sizemodal" onClick={onOpenModal} >size chart</a></span></h6>
                            <div className="modal fade" id="sizemodal" tabIndex="-1"
                                 role="dialog" aria-labelledby="exampleModalLabel"
                                 aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered"
                                     role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title"
                                                id="exampleModalLabel">Sheer Straight
                                                Kurta</h5>
                                            <button type="button" className="close"
                                                    data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`} alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="size-box">
                                <ul>
                                    {item.size.map((size, i) => {
                                        return <li key={i}><a href="#">{size}</a></li>
                                    })}
                                </ul>
                            </div>
                        </div>:''}
                    <span className="instock-cls">{stock}</span>
                    <h6 className="product-title">quantity</h6>
                    <div className="qty-box">
                        <div className="input-group">
                                  <span className="input-group-prepend">
                                    <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                     <i className="fa fa-angle-left"/>
                                    </button>
                                  </span>
                            <input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                            <span className="input-group-prepend">
                                <button type="button" className="btn quantity-right-plus" onClick={plusQty} data-type="plus" data-field="">
                                <i className="fa fa-angle-right"/>
                                </button>
                               </span>
                        </div>
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