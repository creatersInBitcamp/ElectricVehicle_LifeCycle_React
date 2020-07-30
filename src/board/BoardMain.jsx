import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './css/boardMain.css'
import img from './imgs/img_section/img01.jpg'
import profile from './imgs/thumb.jpeg'
import Post from "./Post";
import Story from "./story";
import Recommend from "./recommend";

const user = {
    userId: "tedd911",
    name: "이형태",
    profileImg: profile,
}
const posts = [
    {
        postId: 1,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img,
        like: 12,
        comments: [
            {
                commentId: 1,
                userId: 'wnsghk16',
                comment: '코멘트 출력 테스트'
            },
            {
                commentId: 2,
                userId: 'tedd911',
                comment: '코멘트 출력 테스트2'
            },
            {
                commentId: 3,
                userId: 'karkky',
                comment: '다시 연습 중.'
            }
        ],
        dateTime: '2020-07-30, 17:00'
    },
    {
        postId: 2,
        userId: "tedd911",
        name: "이형태",
        profileImg: profile,
        location: "대한민국, 인천 계양",
        img: img,
        like: 12,
        comments: [
            {
                commentId: 1,
                userId: 'wnsghk16',
                comment: '코멘트 출력 테스트'
            },
            {
                commentId: 2,
                userId: 'tedd911',
                comment: '코멘트 출력 테스트2'
            },
            {
                commentId: 3,
                userId: 'karkky',
                comment: '다시 연습 중.'
            }
        ],
        dateTime: '2020-07-30, 17:00'
    },
]


const BoardMain = () => {

    return (
        <>
                <section id="main_container">
                    <div className="inner">
                        <div className="contents_box">
                            {posts.map(post => (
                                <Post post={post} key={post.postId}/>
                            ))}
                        </div>
                        <input type="hidden" id="page" value="1"/>
                        <div className="side_box">
                            <Link to={`${process.env.PUBLIC_URL}/blog/new-post`}><button>POST</button></Link>
                            <Link to={`${process.env.PUBLIC_URL}/blog/board-profile`}><button>PROFILE</button></Link>
                            <Link to={`${process.env.PUBLIC_URL}/blog/board-detail`}><button>DETAIL</button></Link>
                            <div className="user_profile">
                                <div className="profile_thumb">
                                    <img src={user.profileImg} alt="프로필사진"/>
                                </div>
                                <div className="detail">
                                    <div className="id m_text">{user.userId}</div>
                                    <div className="ko_name">{user.name}</div>
                                </div>
                            </div>

                            <Story/>

                            <Recommend/>

                        </div>
                    </div>
                </section>
        </>
    );
};

export default BoardMain;