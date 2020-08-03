import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';

const SmallImages = props => {
    const [nav2, setNav2] = useState(props.slider2)

    const productsnav = props.settings;
    const item = props.item
    const navOne = props.navOne


    return <>
        <div className="row">
            <div className="col-12 p-0">
                <Slider {...productsnav} asNavFor={navOne} ref={nav2} className="slider-nav">
                    {item.variants?
                        item.variants.map((vari, index) =>
                            <div key={index}>
                                <img src={`${vari.images}`} key={index} alt=""  className="img-fluid" />
                            </div>
                        ):
                        item.pictures.map((vari, index) =>
                            <div key={index}>
                                <img src={`${vari}`} key={index} alt=""  className="img-fluid" />
                            </div>
                        )}
                </Slider>
            </div>
        </div>
    </>
}

export default SmallImages;