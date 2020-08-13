import React, {useEffect, useState} from 'react';
import {Breadcrumb} from "../../common";
import {Recent, Media, Popular} from "../items";
import {Link, useRouteMatch} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "@material-ui/lab/Pagination";
import {makeStyles} from '@material-ui/core/styles'
import axios from "axios";
import {InputGroup} from "reactstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import {Divider} from "@material-ui/core";

const initialUser = JSON.parse(sessionStorage.getItem('user'))

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
        const [title, setTitle] = useState("검색조건")
        const [searchWord, setSearchWord] = useState("")
        const [method,setMethod] = useState(()=>handleChange)
        const postAxios = () => {
                    console.log(page)
                    console.log(match)
            axios.get(`http://localhost:8080/posts/pages/${match}/${page}`)
                .then((res) => {
                    console.log(res.data)
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
        const handleChange2 = (event, value) => {
            setPage(value)
            searchMethod()
        }
        // useEffect(()=>{
        //     postAxios()
        // }, [match])
        const searchMethod = () => {
            axios.get(`http://localhost:8080/posts/search/${match}/${title}/${searchWord}/${page}`)
                .then((res)=>{
                    console.log(res.data)
                    setPosts(res.data.content)
                    setCount(res.data.totalPages)
                })
                .catch((err)=>{
                    console.log(err.status)
                })
        }
        const kepressChange = (event) =>{
            if (event.key === 'Enter') {
                alert(`category: ${match},title: ${title},searchWord : ${searchWord}`)
                searchMethod()
                setMethod(()=>handleChange2)
            }
        }
        return (
            <div>
                <Breadcrumb title={'Board'}/>
                
                {/*Blog Details section*/}
                <section className="section-b-space  blog-page">
                    <Container>
                        <Row>
                            <Col/>
                            <Col md={"auto"}>
                            </Col>
                            <Col xs lg={3}>
                                <InputGroup>
                                    <DropdownButton
                                        title={title}
                                        as={InputGroup.Prepend}
                                        variant={"outline-secondary"}>
                                        <Dropdown.Item onClick={(e) => {setTitle("title")}}>제목</Dropdown.Item>
                                        <Dropdown.Item onClick={(e)=>{setTitle("content")}}>내용</Dropdown.Item>
                                        <Dropdown.Item onClick={(e)=>{setTitle("userId")}}>작성자</Dropdown.Item>
                                        <Dropdown.Divider/>
                                        <Dropdown.Item onClick={(e) => {setTitle("검색조건")}}>통합검색</Dropdown.Item>
                                    </DropdownButton>
                                    <FormControl placeholder="Search" aria-label="Search" onChange={(e)=>{setSearchWord(e.target.value)}} onKeyPress={(e)=>{kepressChange(e)}}/>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Divider/>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-5">
                                <div className="blog-sidebar">
                                    <div className="theme-card">
                                        <h4>Recent Post</h4>
                                        <ul className="recent-blog">
                                            <Recent/>
                                        </ul>
                                    </div>
                                    <div className="theme-card">
                                        <h4>Popular Post</h4>
                                        <ul className="popular-blog">
                                            <Popular/>
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
                                                    onChange={method} />
                                           </Col>
                                        </Row>
                                        <Row>
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