import React from 'react';
import Comments from "./comments";

const comment_submit = () => {
    alert(`댓글 내용 : ${document.getElementById('input_comment').value}`)
}

const more_button = () => {
    alert('more버튼 클릭')
}

const Post = ({post}) => {
    return (
        <>
            <article className="contents">
                <header className="top">
                    <div className="user_container">
                        <div className="profile_img">
                            <img src={post.profileImg} alt="프로필이미지"/>
                        </div>
                        <div className="user_name">
                            <div className="nick_name m_text">{post.userId}</div>
                            <div className="country s_text">{post.location}</div>
                        </div>
                    </div>
                    <div className="sprite_more_icon" data-name="more" onClick={more_button}>
                        <ul className="toggle_box">
                            <li><input type="submit" className="follow" value="팔로우" data-name="follow"/></li>
                            <li>수정</li>
                            <li>삭제</li>
                        </ul>
                    </div>
                </header>

                <div className="img_section">
                    <div className="trans_inner">
                        <img src={post.img} alt="visual01"/>
                    </div>
                </div>
                <div className="bottom_icons">
                    <div className="left_icons">
                        <div className="heart_btn">
                            <div className="sprite_heart_icon_outline"
                                 data-name="heartbeat"/>
                        </div>
                        <div className="sprite_bubble_icon"/>
                        <div className="sprite_share_icon" data-name="share"/>
                    </div>
                    <div className="right_icon">
                        <div className="sprite_bookmark_outline" data-name="bookmark"/>
                    </div>
                </div>

                <div className="likes m_text">
                    좋아요
                    <span id="like-count-39">{post.like}</span>
                    <span id="bookmark-count-39"/>
                    개
                </div>
                {post.comments.map( comment => (
                <Comments comment={comment} key={comment.commentId}/>
                ))}

                <div className="timer">{post.dateTime}</div>

                <div className="comment_field" id="add-comment-post37">
                    <input id={"input_comment"} type="text" placeholder="댓글달기..."/>
                    <div className="upload_btn m_text" data-name="comment" onClick={comment_submit}>게시</div>
                </div>
            </article>
        </>
    );
};

export default Post;