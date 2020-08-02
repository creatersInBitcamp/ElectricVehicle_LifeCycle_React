import React from 'react';
import img from "./imgs/img_section/img01.jpg";

const Story = ({posts}) => {

    return (
        <>
            <article className="story">
                <header className="story_header">
                    <div>스토리</div>
                    <div className="more">모두 보기</div>
                </header>

                <div className="scroll_inner">
                    {posts.map( post => (
                        <div className="thumb_user">
                            <div className="profile_thumb">
                                <img src={post.profileImg} alt="프로필사진"/>
                            </div>
                            <div className="detail">
                                <div className="id">{post.userId}</div>
                                <div className="time">{post.dateTime}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </>
    );
};

export default Story;