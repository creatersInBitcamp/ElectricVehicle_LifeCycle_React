import React from 'react';

const Comments = ({comment}) => {
    return (
        <>
            <div className="comment_container">
                <div className="comment" id="comment-list-ajax-post37">
                    <div className="comment-detail">
                        <div className="nick_name m_text">{comment.userId}</div>
                        <div>{comment.comment}</div>
                    </div>
                </div>
                <div className="small_heart">
                    <div className="sprite_small_heart_icon_outline"/>
                </div>
            </div>
        </>
    );
};

export default Comments;