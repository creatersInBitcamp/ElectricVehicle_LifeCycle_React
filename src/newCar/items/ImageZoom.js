import React from 'react';

export const ImageZoom = props => {
    return <>
        <img src={`${props.image}`}  className="img-fluid image_zoom_cls-0" />
    </>
}
export default ImageZoom