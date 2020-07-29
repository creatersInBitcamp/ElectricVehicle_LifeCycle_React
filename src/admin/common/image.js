import React from 'react';

const Image = (props) => {
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

export default Image
