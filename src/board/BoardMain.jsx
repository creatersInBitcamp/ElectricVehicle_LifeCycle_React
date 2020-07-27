import React from 'react';
import {Link} from 'react-router-dom'
import './css/boardMain.css'
import img from './imgs/img_section/img01.jpg'

const BoardMain = () => {

    return (
        <>
                <section id="main_container">
                    <div className="inner">
                        <div className="contents_box">
                            <article className="contents">
                                <header className="top">
                                    <div className="user_container">
                                        <div className="profile_img">
                                            <img src="imgs/thumb.jpeg" alt="프로필이미지"/>
                                        </div>
                                        <div className="user_name">
                                            <div className="nick_name m_text">KindTiger</div>
                                            <div className="country s_text">Seoul, South Korea</div>
                                        </div>
                                    </div>
                                    <div className="sprite_more_icon" data-name="more">
                                        <ul className="toggle_box">
                                            <li><input type="submit" className="follow" value="팔로우" data-name="follow"/></li>
                                            <li>수정</li>
                                            <li>삭제</li>
                                        </ul>
                                    </div>
                                </header>

                                <div className="img_section">
                                    <div className="trans_inner">
                                        <img src={img} alt="visual01"/>
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
                                    <span id="like-count-39">2,346</span>
                                    <span id="bookmark-count-39"/>
                                    개
                                </div>

                                <div className="comment_container">
                                    <div className="comment" id="comment-list-ajax-post37">
                                        <div className="comment-detail">
                                            <div className="nick_name m_text">dongdong2</div>
                                            <div>강아지가 너무 귀여워요~!</div>
                                        </div>
                                    </div>
                                    <div className="small_heart">
                                        <div className="sprite_small_heart_icon_outline"/>
                                    </div>
                                </div>

                                <div className="timer">1시간 전</div>

                                <div className="comment_field" id="add-comment-post37">
                                    <input type="text" placeholder="댓글달기..."/>
                                    <div className="upload_btn m_text" data-name="comment">게시</div>
                                </div>
                            </article>
                        </div>
                        <input type="hidden" id="page" value="1"/>
                        <div className="side_box">
                            <Link to={`${process.env.PUBLIC_URL}/blog/new-post`}><button>POST</button></Link>
                            <Link to={`${process.env.PUBLIC_URL}/blog/board-profile`}><button>PROFILE</button></Link>
                            <Link to={`${process.env.PUBLIC_URL}/blog/board-detail`}><button>DETAIL</button></Link>
                            <div className="user_profile">
                                <div className="profile_thumb">
                                    <img src="imgs/thumb.jpeg" alt="프로필사진"/>
                                </div>
                                <div className="detail">
                                    <div className="id m_text">KindTiger</div>
                                    <div className="ko_name">심선범</div>
                                </div>
                            </div>

                            <article className="story">
                                <header className="story_header">
                                    <div>스토리</div>
                                    <div className="more">모두 보기</div>
                                </header>

                                <div className="scroll_inner">
                                    <div className="thumb_user">
                                        <div className="profile_thumb">
                                            <img src="imgs/thumb02.jpg" alt="프로필사진"/>
                                        </div>
                                        <div className="detail">
                                            <div className="id">kind_tigerrrr</div>
                                            <div className="time">1시간 전</div>
                                        </div>
                                    </div>
                                    <div className="thumb_user">
                                        <div className="profile_thumb">
                                            <img src="imgs/thumb02.jpg" alt="프로필사진"/>
                                        </div>
                                        <div className="detail">
                                            <div className="id">kind_tigerrrr</div>
                                            <div className="time">1시간 전</div>
                                        </div>
                                    </div>
                                    <div className="thumb_user">
                                        <div className="profile_thumb">
                                            <img src="imgs/thumb02.jpg" alt="프로필사진"/>
                                        </div>
                                        <div className="detail">
                                            <div className="id">kind_tigerrrr</div>
                                            <div className="time">1시간 전</div>
                                        </div>
                                    </div>
                                    <div className="thumb_user">
                                        <div className="profile_thumb">
                                            <img src="imgs/thumb02.jpg" alt="프로필사진"/>
                                        </div>
                                        <div className="detail">
                                            <div className="id">kind_tigerrrr</div>
                                            <div className="time">1시간 전</div>
                                        </div>
                                    </div>
                                    <div className="thumb_user">
                                        <div className="profile_thumb">
                                            <img src="imgs/thumb02.jpg" alt="프로필사진"/>
                                        </div>
                                        <div className="detail">
                                            <div className="id">kind_tigerrrr</div>
                                            <div className="time">1시간 전</div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article className="recommend">
                                <header className="reco_header">
                                    <div>회원님을 위한 추천</div>
                                    <div className="more">모두 보기</div>
                                </header>

                                <div className="thumb_user">
                                    <div className="profile_thumb">
                                        <img src="imgs/thumb02.jpg" alt="프로필사진"/>
                                    </div>
                                    <div className="detail">
                                        <div className="id">kind_tigerrrr</div>
                                        <div className="time">1시간 전</div>
                                    </div>
                                </div>
                                <div className="thumb_user">
                                    <div className="profile_thumb">
                                        <img src="imgs/thumb02.jpg" alt="프로필사진"/>
                                    </div>
                                    <div className="detail">
                                        <div className="id">kind_tigerrrr</div>
                                        <div className="time">1시간 전</div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default BoardMain;