import React, {useEffect, useState} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import Recent from "../items/recent";
import Media from "../items/media";
import {Link, useRouteMatch} from "react-router-dom";

const initialState = [
    {
        postId: 1,
        userId: "tedd911",
        title: "쏘울(SOUL) EV 시승기 – 감성과 테크놀로지의 조화",
        name: "이형태",
        link: "https://www.evpost.co.kr/wp/쏘울soul-ev-시승기-감성과-테크놀로지의-조화/",
        img: "https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2020/05/13112107/05-13-%ED%95%9C%EC%9A%A9%EB%8D%95-%EC%8F%98%EC%9A%B8-EV-%EC%8B%9C%EC%8A%B9%EA%B8%B0-%EA%B0%90%EC%84%B1%EA%B3%BC-%ED%85%8C%ED%81%AC%EB%86%80%EB%A1%9C%EC%A7%80%EC%9D%98-%EC%A1%B0%ED%99%94-696x365.jpg",
        hits: 123,
        like: 12,
        content: 'post 글쓴이의 글',
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
        dateTime: "time",
    },
]

const ClassicBoardMain = () => {
        const [posts, setPosts] = useState([])
        const match = useRouteMatch('/board/main/:category').params.category
        console.log(match)
        useEffect(()=>{
            console.log('useEffect on')
            setPosts(initialState)
        })
        return (
            <div>
                <Breadcrumb title={'Board'}/>
                
                {/*Blog Details section*/}
                <section className="section-b-space  blog-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-5">
                                <div className="blog-sidebar">
                                    <div className="theme-card">
                                        <h4>Recent Post</h4>
                                        <ul className="recent-blog">
                                            { posts.map( post => (<Recent post={post} key={post.postId}/>) )}
                                        </ul>
                                    </div>
                                    <div className="theme-card">
                                        <h4>Popular Post</h4>
                                        <ul className="popular-blog">
                                            <li>
                                                <div className="media">
                                                    <div className="blog-date">
                                                        <span>03 </span>
                                                        <span>may</span>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <h6>Injected humour the like</h6>
                                                        <p>0 hits</p>
                                                    </div>
                                                </div>
                                                <p>it look like readable English. Many desktop publishing text. </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7 order-sec">
                            <Link to={`${process.env.PUBLIC_URL}/board/input/${match}`}>
                                <button className="btn btn-solid">test</button>
                            </Link>
                                <div className="row blog-media">
                                    {posts.map( post => (<Media post={post} key={post.postId}/>))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        )
}

export default ClassicBoardMain