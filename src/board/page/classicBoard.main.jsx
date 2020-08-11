import React, {useEffect, useState} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import {Recent, Media, Popular} from "../items";
import {Link, useRouteMatch} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "@material-ui/lab/Pagination";
import {makeStyles} from '@material-ui/core/styles'
import axios from "axios";

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
const useStyles = makeStyles((theme) => ({
    pagination: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ClassicBoardMain = () => {
        const classes = useStyles()
        const [posts, setPosts] = useState([])
        const match = useRouteMatch('/board/main/:category').params.category
        const [page, setPage] = useState(1)
        const [count, setCount] = useState(10)
        const postAxios = () => {
            axios.get(`http://localhost:8080/posts/pageall/${page}`)
                .then((res) => {
                    setPosts(res.data.content)
                    setCount(res.data.totalPages)
                })
                .catch((error)=> {
                    console.log(error)
                })
        }
        const handleChange = (event, value) => {
            setPage(value)
            postAxios()
        }
        useEffect(()=>{
            postAxios()
        }, [])
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
                                            <Recent posts={posts}/>
                                        </ul>
                                    </div>
                                    <div className="theme-card">
                                        <h4>Popular Post</h4>
                                        <ul className="popular-blog">
                                            <Popular posts={posts}/>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7 order-sec">

                                <div className="row blog-media">
                                    <Container>
                                        <Row>
                                            <Media posts={posts} />
                                        </Row>
                                        <Row>
                                            <Col/>
                                            <Col xs lg={2}>
                                                <Link to={`${process.env.PUBLIC_URL}/board/input/${match}`}>
                                                    <button className="btn btn-solid">글쓰기</button>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                           <Col md={{ span: 6, offset: 3 }}>
                                                <Pagination
                                                    size="large"
                                                    className={classes.pagination}
                                                    variant={"outlined"}
                                                    count={count}
                                                    page={page}
                                                    onChange={handleChange} />
                                           </Col>
                                        </Row>
                                    </Container>
                                    {/*<MediaTable/>*/}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        )
}

export default ClassicBoardMain