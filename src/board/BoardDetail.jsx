import React from 'react';
import './css/boardDetail.css'
import img03 from './imgs/img_section/img03.jpg'
import profile from './imgs/thumb.jpeg'
import profile2 from './imgs/thumb02.jpg'
import profile3 from './imgs/thumb03.jpg'
import profile4 from './imgs/hyejung.jpg'
import profile5 from './imgs/sunghee.jpg'
import profile6 from './imgs/sunghee2.jpg'

const BoardDetail = () => {
    return (
        <>
            <section id="container">

                <div id="main_container">

                    <section className="b_inner">

                        <div className="contents_box">

                            <article className="detail_contents cont01">

                                <div className="img_section">
                                    <div className="trans_inner">
                                        <div>
                                            <img src={img03} alt=""/>
                                        </div>
                                    </div>
                                </div>


                                <div className="detail--right_box">

                                    <header className="top">
                                        <div className="user_container">
                                            <div className="profile_img">
                                                <img src={profile} alt=""/>
                                            </div>
                                            <div className="user_name">
                                                <div className="nick_name">KindTiger</div>
                                                <div className="country">Seoul, South Korea</div>
                                            </div>
                                        </div>
                                        <div className="sprite_more_icon" data-name="more">
                                            <ul className="more_detail">
                                                <li>팔로우</li>
                                                <li>수정</li>
                                                <li>삭제</li>
                                            </ul>
                                        </div>

                                    </header>

                                    <section className="scroll_section">
                                        <div className="admin_container">
                                            <div className="admin"><img src={profile} alt="user"/></div>
                                            <div className="comment">
                                                <span className="user_id">Kindtiger</span>강아지가 많이 힘든가보다ㅜㅜㅜㅜㅜ조금만힘내
                                                <div className="time">2시간</div>
                                            </div>
                                        </div>

                                        <div className="user_container-detail">
                                            <div className="user"><img src={profile2} alt="user"/></div>
                                            <div className="comment">
                                                <span className="user_id">in0.lee</span>너무귀엽네요 ㅎㅎㅎ맞팔해요~!
                                                <div className="time">2시간 <span className="try_comment">답글 달기</span>
                                                </div>
                                                <div className="icon_wrap">
                                                    <div className="more_trigger">
                                                        <div className="sprite_more_icon"/>
                                                    </div>
                                                    <div>
                                                        <div className="sprite_small_heart_icon_outline"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="user_container-detail">
                                            <div className="user"><img src={profile3} alt="user"/></div>
                                            <div className="comment">
                                                <span className="user_id">ye_solkim</span>강아지 이름이 뭐에요???
                                                <div className="time">2시간 <span className="try_comment">답글 달기</span>
                                                </div>
                                                <div className="icon_wrap">
                                                    <div className="more_trigger">
                                                        <div className="sprite_more_icon"/>
                                                    </div>
                                                    <div>
                                                        <div className="sprite_small_heart_icon_outline"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="user_container-detail">
                                            <div className="user"><img src={profile5} alt="user"/></div>
                                            <div className="comment">
                                                <span className="user_id">ohmygirl.sy</span>너무귀엽네요 ㅎㅎㅎ맞팔해요~!
                                                <div className="time">2시간 <span className="try_comment">답글 달기</span>
                                                </div>
                                                <div className="icon_wrap">
                                                    <div className="more_trigger">
                                                        <div className="sprite_more_icon"/>
                                                    </div>
                                                    <div>
                                                        <div className="sprite_small_heart_icon_outline"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="user_container-detail">
                                            <div className="user"><img src={profile4} alt="user"/></div>
                                            <div className="comment">
                                                <span className="user_id">onmy.hJJung</span>너무귀엽네요
                                                <div className="time">2시간 <span className="try_comment">답글 달기</span>
                                                </div>
                                                <div className="icon_wrap">
                                                    <div className="more_trigger">
                                                        <div className="sprite_more_icon"/>
                                                    </div>
                                                    <div>
                                                        <div className="sprite_small_heart_icon_outline"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="user_container-detail">
                                            <div className="user"><img src={profile6} alt="user"/></div>
                                            <div className="comment">
                                                <span className="user_id">wnsghk</span>너무귀엽네요 ㅎㅎㅎ맞팔해요~!
                                                <div className="time">2시간 <span className="try_comment">답글 달기</span>
                                                </div>
                                                <div className="icon_wrap">
                                                    <div className="more_trigger">
                                                        <div className="sprite_more_icon"/>
                                                    </div>
                                                    <div>
                                                        <div className="sprite_small_heart_icon_outline"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </section>


                                    <div className="bottom_icons">
                                        <div className="left_icons">
                                            <div className="heart_btn">
                                                <div className="sprite_heart_icon_outline" data-name="heartbeat"/>
                                            </div>
                                            <div>
                                                <div className="sprite_bubble_icon"/>
                                            </div>
                                            <div>
                                                <div className="sprite_share_icon" data-name="share"/>
                                            </div>
                                        </div>

                                        <div className="right_icon">
                                            <div className="sprite_bookmark_outline" data-name="book-mark"/>
                                        </div>
                                    </div>

                                    <div className="count_likes">
                                        좋아요
                                        <span className="count">2,351</span>
                                        개
                                    </div>
                                    <div className="timer">2시간</div>

                                    <div className="commit_field">
                                        <input type="text" placeholder="댓글달기.."/>

                                        <div className="upload_btn">게시</div>
                                    </div>


                                </div>


                            </article>


                        </div>


                    </section>

                </div>


                <div className="del_pop">
                    <div className="btn_box">
                        <div className="del">삭제</div>
                        <div className="cancel">취소</div>
                    </div>
                </div>

            </section>
        </>
    );
};
export default BoardDetail;