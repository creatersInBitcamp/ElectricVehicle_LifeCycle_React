import React, {useState} from 'react';
import Comments from "./comments";
import {Link} from "react-router-dom";
import {MoreHoriz} from '@material-ui/icons'
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";

const comment_submit = (e) => {
    e.preventDefault()
    alert(`댓글 내용 : ${document.getElementById('input_comment').value}`)
}


const Post = ({post}) => {
    const {profileImg, location, img, userId, like, comments, dateTime} = post

    return (
        <>
            <article className="contents">
                <header className="top">
                    <div className="user_container">
                        <div className="profile_img">
                            <img src={profileImg} alt="프로필이미지"/>
                        </div>
                        <div className="user_name">
                            <Link to={`${process.env.PUBLIC_URL}/blog/board-profile`}><div className="nick_name m_text">{userId}</div></Link>
                            <div className="country s_text">{location}</div>
                        </div>
                    </div>
                    <Button onClick={()=>{alert('click')}}><MoreHoriz/></Button>
                </header>

                <div className="img_section">
                    <div className="trans_inner">
                        <Link to={`${process.env.PUBLIC_URL}/blog/board-detail`}><img src={img} alt="visual01"/></Link>
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
                    <span id="like-count-39">{like}</span>
                    <span id="bookmark-count-39"/>
                    개
                </div>
                {comments.map( comment => (
                <Comments comment={comment} key={comment.commentId}/>
                ))}

                <div className="timer">{dateTime}</div>

                <div className="comment_field" id="add-comment-post37">
                    <input id={"input_comment"} type="text" placeholder="댓글달기..."/>
                    <div className="upload_btn m_text" data-name="comment" onClick={comment_submit}>게시</div>
                </div>
            </article>
        </>
    );
};

export default Post;