import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';

const SmallImages = props => {
    const [state, setState] = useState({ nav2: null });
    const slider2 = useRef();

    useEffect(() => {
        setState({
            nav2: slider2.current
        });
    }, []);

    const { nav2 } = state;

    const { item, settings } = props;
    const productsnav = settings;

    return <>
        <div className="row">
            <div className="col-12 p-0">
                <Slider {...productsnav} asNavFor={props.navOne} ref={slider => (slider2.current = slider)} className="slider-nav">
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