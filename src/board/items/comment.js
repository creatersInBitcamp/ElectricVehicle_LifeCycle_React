import React from 'react';

const Comment = ({comment}) => {
    return (
        <>
            <li>
                <div className="media">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/avtar.jpg`}
                         alt="Generic placeholder image"/>
                    <div className="media-body">
                        <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                        <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est
                            sit amet felis fringilla bibendum at at leo. Proin molestie ac
                            nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor.
                            Aenean nec felis dui. Integer tristique odio mi, in volutpat
                            metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem
                            hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget
                            lectus sit amet diam vestibulum varius. Suspendisse dignissim
                            mattis leo, nec facilisis erat tempor quis. Vestibulum eu
                            vestibulum ex. </p>
                    </div>
                </div>
                {/*<div className="media">*/}
                {/*    <img src={comment.userProfile}*/}
                {/*         alt="Generic placeholder image"/>*/}
                {/*    <div className="media-body">*/}
                {/*        <h6>{comment.userName} <span>( {comment.date} )</span></h6>*/}
                {/*        <p> { comment.content } </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </li>
        </>
    );
};

export default Comment;