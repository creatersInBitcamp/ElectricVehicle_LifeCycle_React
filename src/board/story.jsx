import React from 'react';
import img from "./imgs/img_section/img01.jpg";
import profile2 from "./imgs/thumb02.jpg";

const Story = () => {
    return (
        <>
            <article className="story">
                <header className="story_header">
                    <div>스토리</div>
                    <div className="more">모두 보기</div>
                </header>

                <div className="scroll_inner">
                    <div className="thumb_user">
                        <div className="profile_thumb">
                            <img src={profile2} alt="프로필사진"/>
                        </div>
                        <div className="detail">
                            <div className="id">kind_tigerrrr</div>
                            <div className="time">1시간 전</div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Story;