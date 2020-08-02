import React from 'react';
import {Link} from 'react-router-dom'
import './css/boardMain.css'
import img from './imgs/img_section/img01.jpg'
import Post from "./Post";
import Story from "./story";
import Recommend from "./recommend";
import {user, posts} from './data'
import NewPost from "./NewPost";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Hashtags from "./hashtags";

const BoardMain = () => {

    return (
        <>
                <section id="main_container">
                    <div className="inner">
                        <div className="contents_box">
                            <Tabs defaultActiveKey={'post'}>
                                <Tab eventKey={'post'} title={'post'}>
                                    {
                                        posts.map(post => (<Post post={post} key={post.postId}/>))
                                    }
                                </Tab>
                                <Tab eventKey={'hash tag'} title={'hash tag'}>
                                    <Hashtags posts={posts}/>
                                </Tab>
                            </Tabs>

                        </div>
                        <input type="hidden" id="page" value="1"/>
                        <div className="side_box">
                            <NewPost/>
                            <div className="user_profile">
                                <div className="profile_thumb">
                                    <img src={user.profileImg} alt="프로필사진"/>
                                </div>
                                <div className="detail">
                                    <Link to={`${process.env.PUBLIC_URL}/post/profile`}><div className="id m_text">{user.userId}</div></Link>
                                    <div className="ko_name">{user.name}</div>
                                </div>
                            </div>

                            <Story posts={posts}/>

                            <Recommend/>

                        </div>
                    </div>
                </section>
        </>
    );
};

export default BoardMain;