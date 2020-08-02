import React, {useState} from 'react';

const ImageZoom = () => {
        const [image,setimage] = useState('')

        return (
            <img src={`${image}`}  className="img-fluid image_zoom_cls-0" />
        );

}
export default ImageZoom