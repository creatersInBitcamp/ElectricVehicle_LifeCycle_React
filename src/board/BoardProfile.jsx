import React from 'react';
import './css/boardProfile.css'
import profile from './imgs/thumb.jpeg'
import img01 from './imgs/img_section/img01.jpg'
import img02 from './imgs/img_section/img02.jpg'
import img03 from './imgs/img_section/img03.jpg'
import img04 from './imgs/img_section/img04.jpg'
import img05 from './imgs/img_section/img05.jpg'
import img06 from './imgs/img_section/img06.png'
import img07 from './imgs/img_section/img07.png'


const BoardProfile = () => {
    return (
        <>
            <div id="main_container">

                <section className="b_inner">

                    <div className="hori_cont">
                        <div className="profile_wrap">
                            <div className="profile_img">
                                <img src={profile} alt="착한호랑이"/>
                            </div>
                        </div>

                        <div className="detail">
                            <div className="top">
                                <div className="user_name">KindTiger</div>
                                <a className="profile_edit">프로필편집</a>
                                <a href="#" className="logout">로그아웃</a>
                            </div>

                            <ul className="middle">
                                <li>
                                    <span>게시물</span>
                                    3
                                </li>
                                <li>
                                    <span>팔로워</span>
                                    3
                                </li>
                                <li>
                                    <span>팔로우</span>
                                    3
                                </li>
                            </ul>
                            <p className="about">
                                <span className="nick_name">kindtigerrr</span>
                                <span className="book_mark">bookmark</span>
                            </p>

                        </div>
                    </div>

                    <div className="mylist_contents contents_container active">
                        <div className="pic">
                            <a href="#"><img src={img01} alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"><img src={img02} alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src={img03} alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src={img04} alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src={img05} alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src={img07} alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src={img06} alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src={img03} alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src={img04} alt=""/></a>
                        </div>
                    </div>


                    <div className="bookmark_contents contents_container">
                        <div className="pic">
                            <a href="#"><img src="imgs/img_section/img03.jpg" alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"><img src="imgs/img_section/img01.jpg" alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img02.jpg" alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img01.jpg" alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img02.jpg" alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img03.jpg" alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img01.jpg" alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img02.jpg" alt=""/></a>
                        </div>
                        <div className="pic">
                            <a href="#"> <img src="imgs/img_section/img02.jpg" alt=""/></a>
                        </div>
                    </div>


                </section>
            </div>
        </>
    );
};

export default BoardProfile;