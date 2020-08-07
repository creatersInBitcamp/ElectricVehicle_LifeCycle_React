import React, {useState} from 'react';
import ImageUploader from 'react-images-upload'

const imageTypes = {REQUEST: 'image/REQUEST'}
const imageRequest = action => ({type: imageTypes.REQUEST, payload: action.payload})
const imageReducer = ( state={}, action ) => {
    switch (action.type) {
        case imageTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Image = () => {
    const [image, setImage] = useState([])
    const onDrop = (pictureFiles, pictureBase64) => {
        setImage(pictureFiles)
        console.log(image)
    }
        return (
            <ImageUploader
            label={'jpg, jpeg, png, gif 파일만 가능'}
            withIcon={true}
            buttonText='이미지를 선택하세요'
            onChange={onDrop}
            withPreview={true}
            withLabel={true}
            imgExtension={['.jpg','.jpeg', '.gif','.png']}
            />
        )
}

export default imageReducer
