import React from 'react';
import './css/boardProfile.css'

import {user, posts} from './data'
import ProfileImgs from "./profileImgs";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tabs";

const BoardProfile = () => {
    const {profileImg, follow, follower, userId, bookMarks} = user

    return (
        <>
            <div id="main_container">

                <section className="b_inner">

                    <div className="hori_cont">
                        <div className="profile_wrap">
                            <div className="profile_img">
                                <img src={profileImg} alt="착한호랑이"/>
                            </div>
                        </div>

                        <div className="detail">
                            <div className="top">
                                <div className="user_name">{userId}</div>
                                <a className="profile_edit">프로필편집</a>
                                <a href="#" className="logout">로그아웃</a>
                            </div>

                            <ul className="middle">
                                <li>
                                    <span>게시물</span>
                                    {posts.length}
                                </li>
                                <li>
                                    <span>팔로워</span>
                                    {follower.length}
                                </li>
                                <li>
                                    <span>팔로우</span>
                                    {follow.length}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Tabs variant="pills" className="justify-content-center" defaultActiveKey={userId}>
                        <Tab eventKey={userId} title={userId}>
                            <div className="mylist_contents contents_container active">
                                {
                                    posts.map( post => (<ProfileImgs img={post.img}/>))
                                }
                            </div>
                        </Tab>
                        <Tab eventKey={'Bookmark'} title={'Bookmark'}>
                            <div className="mylist_contents contents_container active">
                                {
                                    bookMarks.map( bookMark => (<ProfileImgs img={bookMark.img}/>))
                                }
                            </div>
                        </Tab>
                    </Tabs>
                </section>
            </div>
        </>
    );
};

export default BoardProfile;