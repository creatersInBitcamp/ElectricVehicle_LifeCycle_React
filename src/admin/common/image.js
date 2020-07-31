import React from 'react';

const imageTypes = {REQUEST: 'image/REQUEST'}
const imageRequest = action => ({type: imageTypes.REQUEST, payload: action.payload})
const imageReducer = ( state={}, action ) => {
    switch (action.type) {
        case imageTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}

export const Image = (props) => {
        return (
            <>
                <div className="d-flex" >
                {props.data.map((res,i) => {
                    return (
                        <img src={res} alt="" key={i} className="img-fluid img-30 mr-2 blur-up lazyloaded" />
                    )
                })}
                </div>
            </>
        )
}

export default imageReducer
