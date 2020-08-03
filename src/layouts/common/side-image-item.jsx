import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const SideImageItem = props => {
    const [image,setIamge] = useState('')
    const onClickHandle = (img) => {
        setIamge(img)
    }
    let RatingStars = []
    for(let i = 0; i < props.product.rating; i++) {
        RatingStars.push(<i className="fa fa-star" key={i}/>)
    }
    return <>
        <div className="product-box2">
            <div className="media">
                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${props.product.id}`} ><img
                    src={`${
                        props.product.variants?
                            image?image:props.product.variants[0].images
                            :props.product.pictures[0]
                    }`}
                    className="img-fluid lazyload bg-img"
                    alt="" /></Link>
                <div className="media-body align-self-center">
                    <div>
                        <div className="rating">
                            {RatingStars}
                        </div>
                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${props.product.id}`}>
                            <h6>{props.product.name}</h6>
                        </Link>
                        <h4>{props.symbol}{props.product.price-(props.product.price*props.product.discount/100)}
                            <del><span className="money">{props.symbol}{props.product.price}</span></del>
                        </h4>
                        {props.product.variants?
                            <ul className="color-variant">
                                {props.product.variants.map((vari, i) => {
                                    return (
                                        <li className={vari.color} key={i} title={vari.color} onClick={onClickHandle(vari.images)}/>)
                                })}
                            </ul>:''}
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default SideImageItem