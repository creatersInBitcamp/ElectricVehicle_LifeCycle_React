import React from 'react';
import {Link} from 'react-router-dom'
import './css/boardMain.css'
import img from './imgs/img_section/img01.jpg'
import profile from './imgs/thumb.jpeg'
import Post from "./Post";
import Story from "./story";
import Recommend from "./recommend";
import Index from "../dm";

const BoardMain = () => {

    return (
        <>
                <section id="main_container">
                    <div className="inner">
                        <div className="contents_box">
                            <Post/>
                        </div>
                        <input type="hidden" id="page" value="1"/>
                        <div className="side_box">
                            <Link to={`${process.env.PUBLIC_URL}/blog/new-post`}><button>POST</button></Link>
                            <Link to={`${process.env.PUBLIC_URL}/blog/board-profile`}><button>PROFILE</button></Link>
                            <Link to={`${process.env.PUBLIC_URL}/blog/board-detail`}><button>DETAIL</button></Link>
                            <div className="user_profile">
                                <div className="profile_thumb">
                                    <img src={profile} alt="프로필사진"/>
                                </div>
                                <div className="detail">
                                    <div className="id m_text">KindTiger</div>
                                    <div className="ko_name">심선범</div>
                                </div>
                            </div>

                            <Story/>

                            <Recommend/>

                            <Index/>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default BoardMain;