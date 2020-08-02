import React, {useRef, useState} from 'react';
import Slider from 'react-slick';

const SmallImages = (props) => {
    const [nav2,setnav2] = useState(null)
    const slider2 = useRef('slider2')
        const { item, settings } = props;
        var productsnav = settings;
        return (
            <div className="row">
                <div className="col-12 p-0">
                    <Slider {...productsnav} asNavFor={props.navOne} ref={slider2} className="slider-nav">
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
        );

}

export default SmallImages;